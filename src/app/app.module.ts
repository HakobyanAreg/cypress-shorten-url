import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule, StoreRootModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {CommonModule} from "@angular/common";
import {reducers} from "./reducers";
import {AppEffects} from "./app.effects";
import {AppService} from "./app.service";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    StoreRootModule,
    EffectsModule.forRoot([AppEffects]),
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
