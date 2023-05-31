import { createSelector, createFeatureSelector } from '@ngrx/store';
import {ShortenUrlFeatureState} from "./shorten-url.reducer";


export const selectUrlFeatureState = createFeatureSelector<ShortenUrlFeatureState>('ShortenUrlFeatureState');


export const selectShortenUrlLoading = createSelector(
  selectUrlFeatureState,
  (state: ShortenUrlFeatureState) => state.loading
);

export const selectShortenUrl = createSelector(
  selectUrlFeatureState,
  (state: ShortenUrlFeatureState) => state.data);

export const selectShortenUrlError = createSelector(
  selectUrlFeatureState,
  (state: ShortenUrlFeatureState) => state.error
);
