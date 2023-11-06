import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Animated} from 'react-native';

interface AccordionProps {
  title: string;
  content: React.ReactNode;
  expanded: boolean;
}

const Accordion: React.FC<AccordionProps> = ({title, content}) => {
  const [expanded, setExpanded] = useState(false);
  const animatedHeight = new Animated.Value(0);

  const toggleAccordion = () => {
    setExpanded(!expanded);
    Animated.timing(animatedHeight, {
      toValue: expanded ? 0 : 400, // 열렸을 때와 닫혔을 때의 높이를 조절하세요.
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        flexDirection: 'column',
      }}>
      <TouchableOpacity
        onPress={toggleAccordion}
        style={{
          height: '20%',
          width: '100%',
          borderBottomWidth: 1,
          borderBottomColor: 'black',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            //   backgroundColor: 'pink',
            width: '50%',
            textAlign: 'center',
          }}>
          {title} {'    ∨'}
        </Text>
      </TouchableOpacity>
      {/* 아코디언 활성화되면 나오는 창 */}
      <Animated.View style={{height: animatedHeight, overflow: 'hidden'}}>
        {content}
      </Animated.View>
    </View>
  );
};

export default Accordion;
