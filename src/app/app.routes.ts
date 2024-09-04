import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProjectComponent } from './pages/project/project.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AiComponent } from './pages/ai/ai.component';
import { ArComponent } from './pages/ar/ar.component';
import { SMMAComponent } from './pages/smma/smma.component';

export const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  // { path: 'project', redirectTo: 'ai', pathMatch: 'full' },
  { path: 'contact', component: ContactComponent },
  { path: 'ai', component: AiComponent },
  { path: 'ar', component: ArComponent },
  { path: 'smma', component: SMMAComponent },
];
