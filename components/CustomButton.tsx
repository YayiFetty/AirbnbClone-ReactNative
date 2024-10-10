import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Colors from '@/constants/Colors'
import { defaultStyles } from '@/constants/Styles'

const CustomButton = ({
    title, handlePress, containerStyle
}:any) => {
  return (
   <GestureHandlerRootView>
    <TouchableOpacity
      style={[defaultStyles.btn, containerStyle]}
     onPress={handlePress}
      >
      
        <Text style={defaultStyles.btnText}>{title}</Text>
    </TouchableOpacity>
   </GestureHandlerRootView>
  )
}

export default CustomButton