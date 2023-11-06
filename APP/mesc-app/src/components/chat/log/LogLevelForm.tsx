import React, {useState} from 'react';
import * as S from './LogLevelForm.styles';
import Check from '../../../assets/icons/check.svg';

const logLevels = ['TRACE', 'DEBUG', 'INFO', 'WARN', 'ERROR'];

const LogLevelForm = () => {
  const [selectedLevels, setSelectedLevels] = useState(new Set());

  const toggleLevel = (level: string) => {
    const newSelectedLevels = new Set(selectedLevels);
    if (newSelectedLevels.has(level)) {
      newSelectedLevels.delete(level);
    } else {
      newSelectedLevels.add(level);
    }
    setSelectedLevels(newSelectedLevels);
  };

  return (
    <S.LogLevelFormContainer>
      {/* <S.ButtonBox>
        <S.Button></S.Button>
      </S.ButtonBox> */}
      <S.Title>로그 레벨</S.Title>
      {logLevels.map(level => (
        <S.LogLevelItem key={level}>
          <S.LogLevelText>{level}</S.LogLevelText>
          <S.CheckboxContainer onPress={() => toggleLevel(level)}>
            {selectedLevels.has(level) ? (
              <Check />
            ) : (
              <S.Checkbox checked={false} />
            )}
          </S.CheckboxContainer>
        </S.LogLevelItem>
      ))}
    </S.LogLevelFormContainer>
  );
};

export default LogLevelForm;
