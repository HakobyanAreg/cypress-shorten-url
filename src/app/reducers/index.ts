import {isDevMode} from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import {ShortenUrlFeatureState, shortenUrlReducer} from "./shorten/shorten-url.reducer";

export interface State {
  ShortenUrlFeatureState: ShortenUrlFeatureState
}

export const reducers: ActionReducerMap<State> = {
  ShortenUrlFeatureState: shortenUrlReducer
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
