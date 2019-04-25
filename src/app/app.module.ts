import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { Page404Component } from './page404/page404.component';

import { StoreModule } from '@ngrx/store';
// import { pizzaReducers } from './store/reducers';
import { calculatorReducer } from './store/reducers/calculator.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ "reactiveCalc": calculatorReducer})
    //reason for the ActionReducerMap is because forRoot() takes only that type of reducer or InjectionToken
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
