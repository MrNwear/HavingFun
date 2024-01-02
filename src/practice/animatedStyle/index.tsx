import * as React from 'react';
import { Text, StyleSheet, SafeAreaView, Button, Dimensions } from 'react-native';
import { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import Animated from 'react-native-reanimated';
interface AnimatedStyleProps {}
const {width}=Dimensions.get('screen');
const AnimatedStylePractice = (props: AnimatedStyleProps) => {
    const translateX=useSharedValue(10);
    const handlePress=()=>{
        translateX.value=translateX.value+10;
    }
    const animatedStyle=useAnimatedStyle(()=>({
        backgroundColor:translateX.value<width/2?'red':'green',
        transform:[{translateX:translateX.value}]
    }))
  return (
    <SafeAreaView style={styles.container}>
      <Animated.Text style={[{backgroundColor:'blue'},animatedStyle]}>AnimatedStyle</Animated.Text>
        <Button onPress={handlePress} title='Move'/>
    </SafeAreaView>
  );
};

export default AnimatedStylePractice;

const styles = StyleSheet.create({
  container: {
    flex:1,
  }
});
