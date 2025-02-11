import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { importProvidersFrom, isDevMode } from '@angular/core';
import { cartReducer } from './app/store/reducers/cart.reducer';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideStore({ cart: cartReducer }), 
    provideEffects(),  
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ]
});
