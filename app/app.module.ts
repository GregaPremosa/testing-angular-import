import { NgModule, Component }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
    selector: 'my-app',
    template: '<p>This is external app component ! (success)</p>'
})
export class AppComponent { }

@NgModule({
    imports: [BrowserModule],
    declarations: [
        AppComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
