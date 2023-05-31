import { createReducer, on } from '@ngrx/store';
import {getShortenUrl, getShortenUrlError, getShortenUrlSuccess} from "./shorten-url.actions";


export interface ShortenUrlFeatureState {
  data: string[];
  loading: boolean,
  error: string | null
}

export const initialState: ShortenUrlFeatureState = {
  data: [],
  loading: false,
  error: null
};

export const shortenUrlReducer = createReducer(
  initialState,
  on(getShortenUrl, state => ({ ...state, loading: true, error: null })),
  on(getShortenUrlSuccess, (state, {data}) => ({ ...state, loading: false, error: null, data: data })),
  on(getShortenUrlError, (state, data) => ({ ...state, loading: false, error: data.error })),
);
