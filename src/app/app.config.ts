import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideNativeDateAdapter } from '@angular/material/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

// PrimeNG Imports
import { providePrimeNG } from 'primeng/config';
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

// 1. Define your custom theme using your brand color #4555a5
const MyCustomTheme = definePreset(Aura, {
    semantic: {
        primary: {
            50: '#f4f5f9',
            100: '#e9ebf3',
            200: '#c7cde2',
            300: '#a5aed1',
            400: '#6171af',
            500: '#4555a5', // Your exact Primary Color
            600: '#3e4d95',
            700: '#34407c',
            800: '#293363',
            900: '#212a51',
            950: '#131930'
        }
    }
});

export const appConfig: ApplicationConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
          provideNativeDateAdapter(),
        provideZonelessChangeDetection(),
        provideRouter(routes),
        provideClientHydration(withEventReplay()),
        provideAnimations(),
        
        providePrimeNG({
            theme: {
                preset: MyCustomTheme,
                options: {
                    darkModeSelector: 'system'
                }
            }
        }),
    ]
};