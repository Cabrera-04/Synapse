// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Lobby } from './components/lobby/lobby';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: Login },
  { path: 'lobby', component: Lobby },
  { path: '**', redirectTo: 'login' },
];
