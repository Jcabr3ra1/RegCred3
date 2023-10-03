import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { HomeComponent } from './components/utilidades/home/home.component';
import { CarouselComponent } from './components/utilidades/carousel/carousel.component';
import { CandidatoComponent } from './components/utilidades/candidato/candidato.component';
import { PartidoComponent } from './components/utilidades/partido/partido.component';
import { MesaComponent } from './components/utilidades/mesa/mesa.component';
import { ResultadoComponent } from './components/utilidades/resultado/resultado.component';
import { LoginComponent } from './components/utilidades/login/login.component';
import { UsuarioComponent } from './components/utilidades/usuario/usuario.component';

const APP_ROUTES:Routes=[
    
    {path:'home',component:HomeComponent},
    {path: 'candidato',component:CandidatoComponent},
    {path:'partido',component:PartidoComponent},
    {path:'mesa',component:MesaComponent},
    {path:'resultado',component:ResultadoComponent},    
    {path:'usuario',component:UsuarioComponent},
    {path:'login',component:LoginComponent},    
    {path:'**',pathMatch:'full', redirectTo: 'home'}
    
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
