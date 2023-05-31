import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable, Subject} from "rxjs";
import {selectShortenUrl, selectShortenUrlError} from "./reducers/shorten/shorten-url.selector";
import {getShortenUrl} from "./reducers/shorten/shorten-url.actions";
import {ShortenUrlFeatureState} from "./reducers/shorten/shorten-url.reducer";
import {selectShortenUrlLoading} from "./reducers/shorten/shorten-url.selector";
import {FormControl, Validators} from '@angular/forms';
import {ValidatorUrl} from "./utils/utils";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public url = new FormControl(null, Validators.pattern(ValidatorUrl()))
  public url$: Observable<string[]> | undefined;
  public loading$: Observable<boolean> | undefined;
  public error$: Observable<string | null> | undefined;
  public shortenUrls: string[] = []
  private unsubscribe$ = new Subject<void>();

  constructor(private store: Store<ShortenUrlFeatureState>) {}

  ngOnInit() {
    this.valueStoreInitialize()
  }

  private valueStoreInitialize() {
    this.url$ = this.store.pipe(select(selectShortenUrl));
    this.loading$ = this.store.pipe(select(selectShortenUrlLoading));
    this.error$ = this.store.pipe(select(selectShortenUrlError));
  }

  getShortenUrl(url: string) {
    this.store.dispatch(getShortenUrl({url: url}));
  }

  ngOnDestroy() {
    this.unsubscribe$.next()
    this.unsubscribe$.complete()
  }

}
