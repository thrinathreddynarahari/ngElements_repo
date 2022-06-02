import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { HomeComponent } from './components/home/home.component';
import { AggregatorComponent } from './components/aggregator/aggregator.component';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpFormComponent,
    HomeComponent,
    AggregatorComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  entryComponents:[AggregatorComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { 
  ngDoBootstrap(){}
  constructor(injector:Injector){

    // const ele=createCustomElement(SignUpFormComponent,{injector});
    // customElements.define('signup-form',ele);

    const ele=createCustomElement(AggregatorComponent,{injector})
    customElements.define('routing-guard',ele);
  }
}
