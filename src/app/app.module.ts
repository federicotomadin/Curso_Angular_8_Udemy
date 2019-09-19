import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { AngularFirestore } from '@angular/fire/firestore';

// Rutas
import { APP_ROUTING } from './app.routes';


// Servicios
import { HeroesService } from './servicios/heroes.service';


// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    APP_ROUTING
  ],
  providers: [HeroesService, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
