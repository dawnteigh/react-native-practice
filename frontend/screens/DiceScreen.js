import { Text, View } from 'react-native';
import styles from '../styles';
import StackNavigator from '../StackNavigator';
import { useStore } from '../store';
import DieCard from '../components/DieCard';

const DiceScreen = () => {
  const showDie = useStore(store => store.showDie)
  const dice = useStore(store => store.dice)
  const displayDice = dice.map(d => <DieCard key={d.id} die={d} />)

  return (
    <View style={styles.container}>
      <Text>Dice Screen</Text>
      {displayDice}
      {showDie && <StackNavigator name={showDie.description} />}
    </View>
  )
}

export default DiceScreen