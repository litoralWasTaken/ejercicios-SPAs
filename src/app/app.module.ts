import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeLinkStyleDirective } from './directives/change-link-style.directive';
import { FormComponent } from './components/form/form.component';
import { CheckInputDirective } from './components/form/directives/check-input.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ChangeLinkStyleDirective,
    FormComponent,
    CheckInputDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
