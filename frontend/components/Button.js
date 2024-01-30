import { Pressable, Text } from "react-native"

const Button = ({ text, onClick, style, pressedStyle }) => {
  return (
    <Pressable onPressOut={onClick} style={({ pressed }) => pressed ? pressedStyle : style}>
      <Text>{text}</Text>
    </Pressable>
  )
}

export default Button