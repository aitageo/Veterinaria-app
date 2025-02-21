import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';

export const routes: Routes = [
    { path: 'login' , component: InicioComponent },
    { path: '', component: LoginComponent,},
];
