import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [
    provideFirebaseApp(() => initializeApp({ projectId: "pokerapp-9502a", appId: "1:620169605194:web:42d492a2720f7ef5efb6b3", storageBucket: "pokerapp-9502a.firebasestorage.app", apiKey: "AIzaSyAyaJSMG2WTVYkdVceshJYESARxhswlnvE", authDomain: "pokerapp-9502a.firebaseapp.com", messagingSenderId: "620169605194" })),
    provideFirestore(() => getFirestore())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
