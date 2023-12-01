import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideClientHydration(), provideRouter(appRoutes)],
};


export const environment = {
  production: false,
  supabaseUrl: 'https://sojbecommfeabelnhqjt.supabase.co',
  supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNvamJlY29tbWZlYWJlbG5ocWp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE0NDM1MDEsImV4cCI6MjAxNzAxOTUwMX0.na2fZh5GbqXmmFmPEY4gdGzGdzPynaGdoSrVi9XytxA',
};
