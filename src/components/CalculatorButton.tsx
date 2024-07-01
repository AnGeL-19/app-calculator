import React from 'react'
import { Pressable, Text } from 'react-native'
import { globalStyles, colors } from '../theme/app-theme'

type sizes = 'normal' | 'large'
type color = 'white' | 'dark'

interface Props{
    label: string;
    color?: string;
    size?: sizes;
    textColor?: color;
    onPress: () => void;
}

export const CalculatorButton = ({ label, color, size = 'normal', textColor = 'white', onPress }: Props) => {

    
  return (
    <Pressable 
        onPress={() => onPress()}
        style={({pressed}) => ({
        ...globalStyles.button,
        backgroundColor: color,
        width: size === 'large' ? globalStyles.buttonLarge.width: globalStyles.buttonNormal.width,
        opacity: pressed ? 0.8 : 1
    })}>
        <Text
            style={{
            ...globalStyles.buttonText,
            color: textColor
        }}>{label}</Text>
    </Pressable>
  )
}
