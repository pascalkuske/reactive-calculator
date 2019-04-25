import { ActionReducerMap } from '@ngrx/store';

import * as fromPizzzas from './pizzas.reducer';

export interface ProductState {
    pizzas: fromPizzzas.PizzaState
}

export const pizzaReducers: ActionReducerMap<ProductState> = {
    pizzas: fromPizzzas.PizzaReducer
}
