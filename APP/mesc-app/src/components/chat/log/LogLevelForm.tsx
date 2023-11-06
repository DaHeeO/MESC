import React, {useState} from 'react';
import * as S from './LogLevelForm.styles';

const logLevels = ['TRACE', 'DEBUG', 'INFO', 'WARN', 'ERROR'];

const LogLevelForm = () => {
  const [selectedLevels, setSelectedLevels] = useState(new Set());

  const toggleLevel = (level: any) => {
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
      {logLevels.map(level => (
        <S.LogLevelItem key={level}>
          <S.LogLevelText>{level}</S.LogLevelText>
          <S.CheckboxContainer onPress={() => toggleLevel(level)}>
            <S.Checkbox checked={selectedLevels.has(level)}>
              {selectedLevels.has(level) && <S.CheckboxInner />}
            </S.Checkbox>
          </S.CheckboxContainer>
        </S.LogLevelItem>
      ))}
    </S.LogLevelFormContainer>
  );
};

export default LogLevelForm;
