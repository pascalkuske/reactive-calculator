import { Action } from '@ngrx/store';

//create basic calculator actions
export const ADD = "[Calc] add operation";
export const SUBTRACT = "[Calc] subtract operation";
export const DIVISION = "[Calc] DIVISION operation";
export const MULTIPLICATION = "[Calc] MULTIPLICATION operation";
export const NUMBER_ENTERED = "[Calc] number entered";
export const OP_ENTERED = "[Calc] OP entered";
export const GET_TOTAL = "[Calc] Get total entered";
export const CLEAR = "[CALC] CLEAR";


export class Add implements Action{
    readonly type = ADD;
    constructor(public payload: number){}
}

export class Subtract implements Action {
    readonly type = SUBTRACT;
    constructor(public payload: number){}
}

export class Division implements Action {
    readonly type = DIVISION;
    constructor(public payload: number){}
}

export class Multiplication implements Action {
    readonly type = MULTIPLICATION;
    constructor(public payload: number){}
}

export class NumberEntered implements Action {
    readonly type = NUMBER_ENTERED;
    constructor(public payload: number){}
}

export class OpEntered implements Action {
    readonly type = OP_ENTERED;
    constructor(public payload: string){}
}

export class GetTotal implements Action {
    readonly type = GET_TOTAL;
}

export class Clear implements Action {
    readonly type = CLEAR;
}

export type calculatorTypes = Add | Subtract | Division | Multiplication | NumberEntered | OpEntered | GetTotal | Clear;
