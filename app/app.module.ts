import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component.ts'; //TODO: handle .ts
import { SurveyComponent } from './survey/survey.component.ts'; //TODO: handle .ts

@NgModule({
    imports: [BrowserModule],
    declarations: [
        SurveyComponent, AppComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
