import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

/**
 * Keycloak / Auth Guard placeholder comment:
 * When integrating with Keycloak in the future:
 * 1. Add provideHttpClient() from @angular/common/http
 * 2. Add KeycloakBearerInterceptor / KeycloakService initialization here.
 */

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled'
      })
    ),
    provideClientHydration(withEventReplay())
  ]
};
