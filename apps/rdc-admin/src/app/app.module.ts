import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminShellModule } from '@rdc-final/admin/src/lib/shell/feature';

import { AppComponent } from './app.component';
import { RouterOutlet } from "@angular/router";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AdminShellModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
