import * as React from "react";
import { Dimensions, StyleSheet, View, Text, Image } from "react-native";
import Svg, {
  Defs, LinearGradient, Stop, Path,
} from "react-native-svg";
import Animated from "react-native-reanimated";
const arrow = require('./assets/arrow.png')

const { interpolate, multiply } = Animated;
const { width } = Dimensions.get("window");
const size = width / 2;
const strokeWidth = 20;
const AnimatedPath = Animated.createAnimatedComponent(Path);
const { PI, cos, sin } = Math;
const r = (size - strokeWidth) / 2;
const cx = size / 2;
const cy = size / 2;
const A = PI + PI * 0.4;
const startAngle = PI + PI * 0.2;
const endAngle = 2 * PI - PI * 0.2;
// A rx ry x-axis-rotation large-arc-flag sweep-flag x y
const x1 = cx - r * cos(startAngle);
const y1 = -r * sin(startAngle) + cy;
const x2 = cx - r * cos(endAngle);
const y2 = -r * sin(endAngle) + cy;
const d = `M ${x1} ${y1} A ${r} ${r} 0 1 0 ${x2} ${y2}`;

const percentage = .2*100
const degrees = (90-(-90))/100*percentage - 90
const angle = degrees
const dx = 20
const dy = 0

interface CircularPogressProps {
  progress: Animated.Value<number>;
}

export default ({ progress }: CircularPogressProps) => {
  const circumference = r * A;
  const α = interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, A],
  });
  const strokeDashoffset = multiply(α, r);
  return (
    <View>
    <Svg width={size} height={size}>
      <Defs>
        <LinearGradient id="grad" x1="0" y1="0" x2="100%" y2="0">
          <Stop offset="0" stopColor="#ef9837" />
          <Stop offset="0.5" stopColor="#f7cd46" />
          <Stop offset="1" stopColor="#ef9837" />
        </LinearGradient>
      </Defs>
      <Path
        stroke="white"
        fill="none"
        strokeDasharray={`${circumference}, ${circumference}`}
        {...{ d, strokeWidth }}
      />
      <AnimatedPath
        stroke="url(#grad)"
        fill="none"
        strokeDasharray={`${circumference}, ${circumference}`}
        {...{ d, strokeDashoffset, strokeWidth }}
      />
      {/* <Path d='M15.875 0A15.875 15.875 0 0 0 0 15.875h15.968V.005A15.875 15.875 0 0 0 15.875 0z' fill='#ff3333' /> */}
    </Svg>
    {/* <View
      style={{
        bottom:25,
        position: 'absolute',
        height:100,
        width: 25,
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        alignSelf:'center',
        backgroundColor:"#ef9837"
      }}/> */}

      {/* <View
        style={{
          position: 'absolute',
          bottom:25,
          alignSelf:'center',
          width: 0,
          height: 0,
          borderLeftWidth: 55,
          borderLeftColor: 'transparent',
          borderRightWidth: 55,
          borderRightColor: 'transparent',
          borderBottomWidth: 100,
          borderBottomColor: 'red',
          borderRadius: 55,
          height:100
        }}


      /> */}


      <View
        style={{
          position:'absolute',
          bottom:30,
          alignSelf:'center'}}
          >
        <Image
          source={arrow}
          style={{
            height:75,
            resizeMode:'contain',
            transform: [
              {rotate: `${degrees}deg`},
              {translateX: Math.cos(angle) * dx - Math.sin(angle) * dy},
              {translateY: Math.sin(angle) * dx + Math.cos(angle) * dy}
            ]
          }}
        />
      </View>

      <View style={{position:'absolute', left: 0, bottom: 10}}>
        <Text>Culture Add</Text>
      </View>
      <View style={{position: 'absolute', right:0, bottom: 10}}>
        <Text>Culture Fit</Text>
      </View>
    </View>
  );
};
