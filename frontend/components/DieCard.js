import { Image, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { useStore } from '../store'

const DieCard = ({ die }) => {
  const setShowDie = useStore(store => store.setShowDie)

  const { id, image_url, description } = die
  return (
    <TouchableOpacity onPress={() => setShowDie(id)}>
      <Text>{description}</Text>
      <Image source={{ uri: image_url }} />
    </TouchableOpacity>
  )
}

export default DieCard