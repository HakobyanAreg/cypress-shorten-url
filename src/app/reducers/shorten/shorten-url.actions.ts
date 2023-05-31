import {createAction, props} from '@ngrx/store';

export const getShortenUrl = createAction('[Url] GetUrl', props<{ url: string }>());
export const getShortenUrlSuccess = createAction('[Url] GetUrlSuccess', props<{ data: string[] }>());
export const getShortenUrlError = createAction('[Url] GetUrlError', props<{ error: string }>());
