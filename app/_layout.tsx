import 'react-native-reanimated';
import { Text, View } from 'react-native';
import SampleTurboModule from '../specs/NativeSampleModule';


export default function RootLayout() {
  return (
    <View style={{marginTop: 100}}>
      <Text>Sample reversed string: {SampleTurboModule.reverseString("HELLO")}</Text>
    </View>
  );
}
