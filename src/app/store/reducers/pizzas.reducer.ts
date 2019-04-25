import { Pizza } from './../../models/pizza.model';

import * as PizzaActions from './../actions/pizzas.action';

export interface PizzaState {
    data: Pizza[];
    loading: boolean;
    loaded: boolean;    
}
//an empty array is universal valid entry for any ArrayType

//state of the app
export const initialState : PizzaState = {
    data : [{
        id: 1,
        name: "First"
    }, {
        id : 2,
        name: "Second"
    }],
    loading: false,
    loaded: false
}


export function PizzaReducer(state=initialState, action: PizzaActions.PizzasAction): PizzaState {
    switch (action.type){
        case PizzaActions.LOAD_PIZZAS: {
            console.log("Load pizzas was called");
            return {
                ...state,
                loading: true
            }
        }
        case PizzaActions.LOAD_PIZZAS_SUCCESS: {
            return {
                ...state,
                loading: false,
                loaded: true
            }
        }
        case PizzaActions.LOAD_PIZZAS_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false    
            }
        }
    }
    return state
}