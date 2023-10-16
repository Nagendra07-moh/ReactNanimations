import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from "react-native-reanimated";
import tw from 'twrnc';
import { View, Button ,Text} from "react-native";

export default function AnimatedStyleUpdateExample(props) {
  return (
    <View style={tw`justify-center items-center`}>
      <Text>Hello and welcome!!</Text>
    </View>
  );
}
