import { useState } from 'react'
import { Text, TextInput, View } from 'react-native'

const TextScreen = () => {
  const [name, setName] = useState('')

  return <View>
    <Text style={{fontSize: 30}}>Text Screen</Text>
    <TextInput 
      style={{borderColor: 'black', borderWidth: 1, margin: 15}}
      autoCapitalize='none'
      autoCorrect={false}
      value={name}
      onChangeText={(value) => setName(value)}
    />
    {name.length > 5 
    ? <Text>Name: {name}</Text>
    : name.length > 0 
    ? <Text>Enter a name longer then 5 letters!</Text>
    : null
    }

  </View>
}

export default TextScreen