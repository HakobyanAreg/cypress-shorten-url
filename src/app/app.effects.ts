import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {getShortenUrl, getShortenUrlSuccess, getShortenUrlError} from "./reducers/shorten/shorten-url.actions";
import {catchError, map, mergeMap, of} from "rxjs";
import {AppService} from "./app.service";
import {ShortenUrlResponse} from "./interfaces/index.interfaces";

@Injectable()
export class AppEffects {
  fetchShortenUrl$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getShortenUrl),
      mergeMap(({url}) => {
        return this.apiService.getItems(url).pipe(
            map((data: ShortenUrlResponse) => {
              const result = data.result;
              const shortenUrls = Object.keys(result)
                .filter((key: string) => key.startsWith("full_short_link"))
                .map(item => result[item]);
              return getShortenUrlSuccess({data: shortenUrls})
            }),
            catchError((error) => of(getShortenUrlError({error: 'Something was wrong'})))
          )
        }
      )
    )
  );

  constructor(private actions$: Actions, private apiService: AppService) {
  }

}
