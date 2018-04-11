import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterializeModule } from 'angular2-materialize';

import {RoutingModule} from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SecondComponent } from './second/second.component';
import { FirstchildComponent } from './firstchild/firstchild.component';
import { SecondchildComponent } from './secondchild/secondchild.component';
import {DataService} from './data.service';
import {HttpClientModule} from '@angular/common/http';
import {TestmoduleModule} from './testmodule/testmodule.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SecondComponent,
    FirstchildComponent,
    SecondchildComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TestmoduleModule,
    HttpModule,
    MaterializeModule,
    RoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
