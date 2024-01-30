import { createStackNavigator } from "@react-navigation/stack";
import { DieShowScreen } from "./screens/DieShowScreen";

import React from 'react'

const StackNavigator = ({ name }) => {

  const Stack = createStackNavigator()

  return (
    <Stack.Navigator>
      <Stack.Screen name={name} component={DieShowScreen} />
    </Stack.Navigator>
  )
}

export default StackNavigator