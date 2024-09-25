// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarPage1Component } from './sidebar-page1/sidebar-page1.component';
import { SidebarPage2Component } from './sidebar-page2/sidebar-page2.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'page1', component: SidebarPage1Component },
  { path: 'page2', component: SidebarPage2Component },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
