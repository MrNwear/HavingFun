import React from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
} from 'react-native-reanimated';
import { Svg,Ellipse } from 'react-native-svg';

const AnimatedEllipse = Animated.createAnimatedComponent(Ellipse);
type circleProps={
    animatedProps:any
}
export default function AnimatedEllipseComponent(props:circleProps) {


  return (
    <View style={styles.container}>
      <Svg style={styles.svg}>
        <AnimatedEllipse
          cx="50%"
          cy="50%"
          rx={10}
          ry={100}
          
          fill="#b58df1"
          // highlight-next-line
          animatedProps={props.animatedProps}
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
  },
  svg: {
    height: 400,
    // position:'absolute',
    width: '100%',

  },
});
