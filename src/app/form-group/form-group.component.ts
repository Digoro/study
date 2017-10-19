import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
    selector: 'app-form-group',
    templateUrl: './form-group.component.html',
    styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {
    form = new FormGroup({
        lowerCase: new FormControl('', Validators.required),
        upperCase: new FormControl('', Validators.compose([Validators.required, Validators.pattern('[A-Z]{3}')]))
    });

    setValue() {
        this.form.setValue({
            lowerCase: 'abc',
            upperCase: 'ABC'
        })
    };

    reset() {
        this.form.setValue({
            lowerCase: '',
            upperCase: ''
        })
    }

    onSubmit(event) {
        console.info('this.form.value ... ', this.form.value.lowerCase, this.form.value.upperCase);
        console.info('this.form.get... ', this.form.get('lowerCase'), this.form.get('upperCase'));
    }

    patch() {
        this.form.patchValue({
            lowerCase: 'one',
            upperCase: 'ONE'
        })
    }

    constructor() {
    }

    ngOnInit() {
    }

}
