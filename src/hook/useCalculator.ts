import React, { useRef, useState } from 'react'

enum Operator {
    add,
    substract,
    divider,
    multiply 
}

export const useCalculator = () => {

    const [number, setNumber] = useState('0')
    const [prevNumber, setPrevNumber] = useState('0')

    const lastOperator = useRef<Operator>()

    const buildNumber = (num: string): void => {
        

        if(number.includes('.')  && num === '.' ) return;

        if (number.startsWith('0') || number.startsWith('-0')) {

            if( num === '.') return setNumber(prev => prev + num)

            if( num === '0' && !number.includes('.')) return;

            if( num === '0' && number.includes('.')) return setNumber(prev => prev + num)
            
            if( num !== '0' && !number.includes('.')) return setNumber(num)

        }
        
        setNumber(prev => prev + num)
    }

    const clean = (): void => {
        setNumber('0')
        setPrevNumber('0')
    }

    const deleteOperation = (): void => {
        if (number.length <= 0) return 

        setNumber(prev => {
            const operation = prev.slice(0, -1)
            if (operation.includes('-') && operation.length === 1) return '0';
            return operation.length <= 0 ? '0' : operation;
        })
    }

    const changeSign = () => {
        if (number.includes('-')) {
            setNumber( prev => prev.replace('-', ''))
            return
        }
        setNumber( `-${number}` )
    }

    const setLastNumber = () => {
        if (prevNumber !== '0') return recalculateResult();
        
        if (number.endsWith('.')) {
            setPrevNumber( number.slice(0, -1) )
        }else{
            setPrevNumber( number )
        }
        setNumber('0')
    }

    const divideOperation = () => {
        setLastNumber()
        lastOperator.current = Operator.divider
    }

    const multiplyOperation = () => {
        setLastNumber()
        lastOperator.current = Operator.multiply
    }

    const substractOperation = () => {
        setLastNumber()
        lastOperator.current = Operator.substract
    }

    const addOperation = () => {
        setLastNumber()
        lastOperator.current = Operator.add
    }

    const calculate = (callbackNumber: Function, callbackPrevNumber: Function) => {

        const parseNum = Number(number);
        const parsePrevNum = Number(prevNumber);

        switch (lastOperator.current) {
            case Operator.add:
                callbackNumber(`${ parseNum + parsePrevNum }`)
                break;
            case Operator.substract:
                callbackNumber(`${ parsePrevNum - parseNum }`)
                break;
            case Operator.multiply:
                callbackNumber(`${ parseNum * parsePrevNum }`)
                break;
            case Operator.divider:
                callbackNumber(`${ parsePrevNum / parseNum }`)
                break;
            default:
                throw new Error("Operation not implemented");;
        }

        callbackPrevNumber('0')
    }

    const recalculateResult = () => {
        calculate(setPrevNumber, setNumber)
    }
  
    const calculateResult = () => {
        calculate(setNumber, setPrevNumber)
    }

  return {
    number,
    prevNumber,
    buildNumber,
    clean,
    deleteOperation,
    changeSign,
    divideOperation,
    multiplyOperation,
    substractOperation,
    addOperation,
    calculateResult
  }
}
