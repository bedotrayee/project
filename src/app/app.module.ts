import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { AppRoutingModule,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { T1Component } from './t1/t1.component';
import { T2Component } from './t2/t2.component';
 

@NgModule({
  declarations: [
    AppComponent,
    T1Component,
    T2Component,
    routingComponents,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
