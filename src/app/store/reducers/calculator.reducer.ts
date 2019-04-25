
import * as calculatorActions from './../actions/calculator.action';

export interface CalculatorState {
    firstNumber: number;
    secondNumber: number;
    currentOperation: string;
    negativeMode: boolean,
    total: Number;
}

const initialState: CalculatorState = {
    firstNumber : null,
    secondNumber: null,
    currentOperation: null,
    negativeMode: false,
    total: 0
}

export function getTotal(state: any):number{
    let total: any;
    const { firstNumber, secondNumber } = state;
    switch(state.currentOperation){
        case "+":
            total = firstNumber + secondNumber;
            break;
        case "-":
            total = firstNumber - secondNumber;
            break;
        case "*":
            total = firstNumber * secondNumber;
            break;
        case "/":
            total = firstNumber / secondNumber;
            break;
    }
    return total;
}


export function calculatorReducer( state: CalculatorState = initialState, action: calculatorActions.calculatorTypes): CalculatorState{
    switch(action.type){
        case calculatorActions.ADD: {
            console.log("add has been called", action.payload);
            return state;
        }
        case calculatorActions.SUBTRACT: {
            console.log("subtract has been called");
            return state;
        }
        case calculatorActions.DIVISION: {
            console.log("division called");
            return state;
        }
        case calculatorActions.MULTIPLICATION: {
            console.log("Multiplication called");
            return state;
        }
        case calculatorActions.GET_TOTAL: {
            console.log("get total clicked"); 
            let total: number = getTotal(state);         
            return {
                ...state,
                firstNumber : total,
                secondNumber: null,
                currentOperation: null,
            }
        }
        case calculatorActions.NUMBER_ENTERED: {
            console.log("number added");
            let newFirstNumber: any = state.firstNumber? state.firstNumber.toString(): '0' , newSecondNumber: any = state.secondNumber? state.secondNumber.toString(): '0' ;
            if (state.currentOperation){
                newSecondNumber += action.payload.toString();
                return {
                    ...state,
                    secondNumber: parseInt(newSecondNumber)
                };
            } else {
                newFirstNumber += action.payload.toString();
                return {
                    ...state,
                    firstNumber: (state.negativeMode)? parseInt(newFirstNumber) * -1: parseInt(newFirstNumber),
                    negativeMode: false,
                    total: 0
                };
            }

        }
        
        case calculatorActions.OP_ENTERED: {
            console.log("op added");
            if (!state.firstNumber && !state.secondNumber && action.payload === "-"){
                return {
                    ...state,
                    negativeMode: true
                }
            }
            if (state.firstNumber && !state.secondNumber){
                return {
                    ...state,
                    currentOperation: action.payload
                }
            }
            if (state.secondNumber && state.firstNumber){
               return {
                   ...state,
                   firstNumber: getTotal(state),
                   currentOperation: action.payload
               }
            }
            return state
        }

        case calculatorActions.CLEAR: {
            return initialState;
        }
        
    }
    return state;
}