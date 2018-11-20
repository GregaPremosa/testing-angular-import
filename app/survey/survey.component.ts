import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.less']
})
export class SurveyComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    handleClick(): void {
        console.log("I clicked my button.");
    }

}
