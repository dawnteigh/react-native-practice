import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './screens/HomeScreen';
import DiceScreen from './screens/DiceScreen';
import StatsScreen from './screens/StatsScreen';

export const TabNavigator = () => {

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: { backgroundColor: '#110e35' },
      headerStyle: { backgroundColor: '#110e35' },
    }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Dice" component={DiceScreen} />
      <Tab.Screen name="Stats" component={StatsScreen} />
    </Tab.Navigator>
  )
}