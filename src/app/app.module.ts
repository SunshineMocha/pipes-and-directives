import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { FirstUpperPipe } from './pipes/first-upper/first-upper.pipe';
import { GetAgePipe } from './pipes/get-age/get-age.pipe';
import { TruncateDescPipe } from './pipes/truncate-desc/truncate-desc.pipe';
import { SpecialButtonDirective } from './directives/special-button/special-button.directive';
import { CheckAgeDirective } from './directives/check-age/check-age.directive';

@NgModule({
  declarations: [
    AppComponent,
    PipeComponent,
    DirectiveComponent,
    FirstUpperPipe,
    GetAgePipe,
    TruncateDescPipe,
    SpecialButtonDirective,
    CheckAgeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
