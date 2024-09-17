import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient, withFetch} from "@angular/common/http";
import {BrowserAnimationsModule, provideAnimations} from "@angular/platform-browser/animations";
import {ConfirmationService, MessageService} from "primeng/api";
import {DialogService} from "primeng/dynamicdialog";
import {DatePipe} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
      provideHttpClient(withFetch()),
    provideAnimations(),
    importProvidersFrom(BrowserAnimationsModule),
    MessageService,
    BrowserModule,
    ConfirmationService,
    DatePipe,
    DialogService
  ]
};
