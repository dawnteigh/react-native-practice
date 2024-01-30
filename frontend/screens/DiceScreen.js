import { Text, View } from 'react-native';
import styles from '../styles';
import StackNavigator from '../StackNavigator';
import { useStore } from '../store';

const DiceScreen = () => {
  const die = useStore(store => store.showDie)
  return (
    <View style={styles.container}>
      <Text>Dice Screen</Text>
      {die && <StackNavigator name={die.description} />}
    </View>
  )
}

export default DiceScreen