import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination'
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { createCustomElement } from '@angular/elements';
@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
constructor(private injector:Injector) {
  const ele = createCustomElement(AppComponent, {injector});
  customElements.define('user-details',ele);
}

 }
