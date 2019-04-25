import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Pizza } from './../models/pizza.model';
import * as fromStore from './../store';
import { CalculatorState } from './../store/reducers/calculator.reducer';

import * as allActions from './../store/actions/calculator.action';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
//a dependency injection from the StoreModule
  private calculatorState: CalculatorState;

  constructor(private store: Store<fromStore.ProductState>) { }

  ngOnInit() {
    this.store.select<any>('reactiveCalc').subscribe(data => this.calculatorState = data);
  }

  dispatchLoad(){
    this.store.dispatch(new allActions.Add(2));
  }

  dispatchNumberClicked(number: number){
    this.store.dispatch(new allActions.NumberEntered(number));
  }

  dispatchOp(op: string){
  
    this.store.dispatch(new allActions.OpEntered(op));
  }

  getTotal(){
    this.store.dispatch(new allActions.GetTotal());
  }

  clear(){
    this.store.dispatch(new allActions.Clear());
  }

}
