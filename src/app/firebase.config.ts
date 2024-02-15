import { EnvironmentProviders, importProvidersFrom } from '@angular/core';
import { provideFirebaseApp } from '@angular/fire/app';
import { provideAuth } from '@angular/fire/auth';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { environment } from '../environments/environment';

const firebaseProviders: EnvironmentProviders = importProvidersFrom([
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
]);

export { firebaseProviders };