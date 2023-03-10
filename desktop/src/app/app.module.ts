import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialDesignModule } from "./material-design/material-design.module";
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DayComponent } from './day/day.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { TaskComponent } from './task/task.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TokenInterceptorProvider } from './interceptors/token.interceptor';
import { GameComponent } from './game/game.component';
import { TimePipe } from './pipes/time.pipe';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DayComponent,
    HeaderComponent,
    TaskComponent,
    RegisterComponent,
    NotFoundComponent,
    GameComponent,
    TimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialDesignModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TokenInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
