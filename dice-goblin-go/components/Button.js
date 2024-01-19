import { Pressable, Text } from "react-native"

const Button = ({ text }) => {
  return (
    <Pressable>
      <Text>{text}</Text>
    </Pressable>
  )
}

export default Button