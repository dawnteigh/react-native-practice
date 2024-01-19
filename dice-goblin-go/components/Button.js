import { Pressable, Text } from "react-native"

const Button = ({ text, onClick }) => {
  return (
    <Pressable onPressOut={onClick}>
      <Text>{text}</Text>
    </Pressable>
  )
}

export default Button