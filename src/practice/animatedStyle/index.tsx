import * as React from 'react';
import {StyleSheet, SafeAreaView, Button, Dimensions} from 'react-native';
import Animated,{
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
const {width} = Dimensions.get('screen');
const AnimatedStylePractice = () => {
  const translateX = useSharedValue(10);
  const handlePress = () => {
    translateX.value = translateX.value + 10;
  };
  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: translateX.value < width / 2 ? 'red' : 'green',
    transform: [{translateX: withTiming(translateX.value)}],
  }));
  return (
    <SafeAreaView style={styles.container}>
      <Animated.Text style={[{backgroundColor: 'blue'}, animatedStyle]}>
        AnimatedStyle
      </Animated.Text>
      <Button onPress={handlePress} title="Move" />
    </SafeAreaView>
  );
};

export default AnimatedStylePractice;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
