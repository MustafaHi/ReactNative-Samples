import { StackScreenProps } from '@react-navigation/stack'
import { Text } from 'react-native'

type Sample01Props = StackScreenProps<RouteParam, 'Sample01'>

const Sample01 = ({ navigation, route }: Sample01Props) => {
  return <Text>Sample01 route {/* {route.params} */}</Text>
}
export default Sample01;
