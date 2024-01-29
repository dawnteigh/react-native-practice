import { Text, View } from 'react-native';
import { useStore } from '../store';
import Button from '../components/Button';

export const DieShowScreen = () => {

  const die = useStore(store => store.showDie)
  const buttons = die.values.map(v => {
    return (
      <Button key={v.id} text={v} style="" onClick={() => console.log(`Pressed ${v}`)} />
    )
  }
  )
  return (
    <View>
      <Text>DieShowScreen</Text>
      {buttons}
    </View>
  )
}
