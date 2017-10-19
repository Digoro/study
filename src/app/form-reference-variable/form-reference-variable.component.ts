import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-form-reference-variable',
    templateUrl: './form-reference-variable.component.html',
    styleUrls: ['./form-reference-variable.component.css']
})
export class FormReferenceVariableComponent implements OnInit {
    user = {
        userId: '',
        userName: '',
        userPassword: ''
    };

    constructor() {
    }

    ngOnInit() {
    }

}
