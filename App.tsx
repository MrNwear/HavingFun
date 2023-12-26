import { useRef } from 'react';
import { Button, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';

export default function App() {
  const width = useSharedValue(50);
  const handlePress = () => {
    width.value = withSpring( width.value+10 );
  };
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <Animated.View
        style={{
          width,
          height: width,
          backgroundColor: 'violet',
        }}
      />
      <TouchableOpacity onPress={handlePress}>

      <Text  >
      click Me
      </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}