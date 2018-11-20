import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-survey',
    template: `
<div class="myCustomStyle">
    <p> my Html component! </p>
<button (click)="handleClick()"> Click and Check Console </button>
</div>
`,
    styles: [`
.myCustomStyle{
    color:red;
    background-color:green;
    border: solid;
    border-width:2px;
    border-color:coral;
}
`]
})
export class SurveyComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    handleClick(): void {
        console.log("I clicked my button.");
    }

}
