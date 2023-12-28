import { NavigationContainer } from '@react-navigation/native';
import { TabNavigator } from './TabNavigator';

export default function App() {

  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}