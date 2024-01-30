import { NavigationContainer } from '@react-navigation/native';
import { TabNavigator } from './TabNavigator';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <TabNavigator />
    </NavigationContainer>
  );
}
