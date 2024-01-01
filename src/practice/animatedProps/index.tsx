import {View, Button} from 'react-native';
import {
  useAnimatedProps,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import AnimatedEllipseComponent from '../../Components/animatedEllipse';

export default function AnimatedPropsPractice() {
  const r = useSharedValue(10);

  const handlePress = () => {
    r.value += 5;
  };

  const animatedProps = useAnimatedProps(() => ({
    rx: r.value % 2 == 0 ? withSpring(r.value * 5) : withSpring(r.value),
    fill: r.value % 2 == 0 ? withTiming('#000') : withTiming('#faaf'),
  }));
  return (
    <View style={{flex: 1}}>
      <AnimatedEllipseComponent animatedProps={animatedProps} />
      <Button onPress={handlePress} title="Click me" />
    </View>
  );
}
