import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//Inicia servicios
import { CargarScriptsService } from './cargar-scripts.service';
//fin servicios

//RUTAS
//import{APP_ROUTING} from './app.routes';

// aqui importacion de servicios
import { HeroesService } from './services/heroes.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NabvarComponent } from './components/utilidades/nabvar/nabvar.component';
import { FooterComponent } from './components/utilidades/footer/footer.component';
import { CarouselComponent } from './components/utilidades/carousel/carousel.component';
import { HomeComponent } from './components/utilidades/home/home.component';

//RUTAS
//import{APP_ROUTING} from './app.routes';

import { APP_ROUTING } from './app.routes';
import { from } from 'rxjs';
import { CandidatoComponent } from './components/utilidades/candidato/candidato.component';
import { UsuarioComponent } from './components/utilidades/usuario/usuario.component';
import { PartidoComponent } from './components/utilidades/partido/partido.component';
import { MesaComponent } from './components/utilidades/mesa/mesa.component';
import { LoginComponent } from './components/utilidades/login/login.component';
import { ResultadoComponent } from './components/utilidades/resultado/resultado.component';

@NgModule({
  declarations: [
    AppComponent,
    NabvarComponent,
    FooterComponent,
    CarouselComponent,
    HomeComponent,   
    CandidatoComponent,
    UsuarioComponent,
    PartidoComponent,
    MesaComponent,
    LoginComponent,
    ResultadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    APP_ROUTING //rutas
  ],
  //aqui llamo servicios
  providers: [
    CargarScriptsService,
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
