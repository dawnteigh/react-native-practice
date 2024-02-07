import { Text, View } from 'react-native';
import styles from '../styles';
import ImagePickerExample from '../components/ImagePicker';

const HomeScreen = () => {
  return (
    <View style={styles.container} >
      <Text>Home Screen</Text>
      <ImagePickerExample />
    </View>
  )
}

export default HomeScreen