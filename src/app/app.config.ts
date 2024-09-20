import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideToastr } from 'ngx-toastr';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { customInterceptor } from './interceptor/custom';
import { provideAnimations } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(withFetch(), withInterceptors([customInterceptor])),
              provideAnimations(),
              provideRouter(routes),
              provideToastr({
                timeOut: 5000,
                positionClass: 'toast-top-center',
                preventDuplicates: true,
              }),
              provideAnimationsAsync(),
              ]
};
