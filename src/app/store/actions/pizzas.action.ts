import { Action } from '@ngrx/store';
//we need this to be implemented for each of our actions that will be directed to a particular reducer.

import { Pizza } from './../../models/pizza.model';


// creating the action names...for actions dispatch identification
export const LOAD_PIZZAS = '[products] Load Pizzas';
export const LOAD_PIZZAS_FAIL = '[products] Load Pizzas fail';
export const LOAD_PIZZAS_SUCCESS = '[products] Load Pizzas success';

//to create an action...you are creating a class
export class LoadPizza implements Action {
    readonly type = LOAD_PIZZAS
}

export class LoadPizzaFail implements Action {
    readonly type = LOAD_PIZZAS_FAIL
    constructor(public payload: Pizza[]){}
}

export class LoadPizzaSuccess implements Action {
    readonly type = LOAD_PIZZAS_SUCCESS;
    constructor(public payload: Pizza[]){}
}

//any variable that take a type of PizzasAction can be of any of these types...making it have more than one type checking compulsion...meaning if type checking for LoadPizzaFail fails try type checking for LoadPizzaSuccess, if it fails too, try type checking for LoadPizza

export type PizzasAction = LoadPizzaFail | LoadPizzaSuccess | LoadPizza;