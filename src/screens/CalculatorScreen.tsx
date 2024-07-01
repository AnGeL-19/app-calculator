import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { colors, globalStyles } from '../theme/app-theme'
import { CalculatorButton } from '../components/CalculatorButton'
import { useCalculator } from '../hook/useCalculator'

export const CalculatorScreen = () => {
  
    const {
        number, 
        prevNumber, 
        buildNumber, 
        clean, 
        changeSign, 
        deleteOperation,
        addOperation,
        divideOperation,
        multiplyOperation,
        substractOperation,
        calculateResult
    } = useCalculator()
  
    return (
    <View style={globalStyles.calculatorConrainer}>

        <View style={{ paddingHorizontal: 10, paddingVertical: 20 }}>
            <Text
                adjustsFontSizeToFit
                numberOfLines={1}  
                style={globalStyles.mainResult}>
                    {number}
            </Text>
            
            <Text 
                adjustsFontSizeToFit
                numberOfLines={1}  
                style={globalStyles.subResult}>
                {
                    prevNumber !== '0' && prevNumber
                }
            </Text>
            
            
        </View>
        
        <View style={globalStyles.containerButtons}>

      
                <CalculatorButton onPress={ clean } label='C' color={colors.lightGray} textColor='dark' />
                <CalculatorButton onPress={ changeSign } label='+/-' color={colors.lightGray} textColor='dark' />
                <CalculatorButton onPress={ deleteOperation } label='DEL' color={colors.lightGray} textColor='dark' />
                <CalculatorButton onPress={ divideOperation} label='/' color={colors.orange} />
     
                <CalculatorButton onPress={ () => buildNumber('7') } label='7' color={colors.lightGray} />
                <CalculatorButton onPress={ () => buildNumber('8') } label='8' color={colors.lightGray} />
                <CalculatorButton onPress={ () => buildNumber('9') }label='9' color={colors.lightGray} />
                <CalculatorButton onPress={ multiplyOperation }label='X' color={colors.orange} />
      
                <CalculatorButton onPress={ () => buildNumber('4') } label='4' color={colors.lightGray} />
                <CalculatorButton onPress={ () => buildNumber('5') } label='5' color={colors.lightGray} />
                <CalculatorButton onPress={ () => buildNumber('6') } label='6' color={colors.lightGray} />
                <CalculatorButton onPress={ substractOperation } label='-' color={colors.orange} />
          
                <CalculatorButton onPress={ () => buildNumber('1') } label='1' color={colors.lightGray} />
                <CalculatorButton onPress={ () => buildNumber('2') } label='2' color={colors.lightGray} />
                <CalculatorButton onPress={ () => buildNumber('3') }label='3' color={colors.lightGray} />
                <CalculatorButton onPress={ addOperation }label='+' color={colors.orange} />

                <CalculatorButton onPress={ () => buildNumber('0') }label='0' size='large' color={colors.lightGray} />
                <CalculatorButton onPress={ () => buildNumber('.') } label='.' color={colors.lightGray} />
                <CalculatorButton onPress={ calculateResult }label='=' color={colors.orange} />
          

        </View>

    </View>
  )
}
