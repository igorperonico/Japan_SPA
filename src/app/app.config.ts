import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideToastr } from 'ngx-toastr';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
              provideHttpClient(withFetch()),
              provideRouter(routes),
              provideToastr({
                timeOut: 5000,
                positionClass: 'toast-top-center',
                preventDuplicates: true,
              }),
              provideAnimationsAsync()
              ]
};
