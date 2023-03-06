import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { ServicesPageComponent } from './components/pages/services-page/services-page.component';
import { NavbarComponent } from './components/pages/navbar/navbar.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    ServicesPageComponent,
    NavbarComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
