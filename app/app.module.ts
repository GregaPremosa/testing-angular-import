import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

//@Component({
//    selector: 'my-app',
//    template: '<p>This is external app component ! (success)</p>'
//})
//export class AppComponent { }

@NgModule({
    imports: [BrowserModule],
    declarations: [
        AppComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
