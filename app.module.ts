// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarPage1Component } from './sidebar-page1/sidebar-page1.component';
import { SidebarPage2Component } from './sidebar-page2/sidebar-page2.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarPage1Component,
    SidebarPage2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
