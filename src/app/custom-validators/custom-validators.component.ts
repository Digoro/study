import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";
import {InputValidator} from "./input-validator";

@Component({
  selector: 'app-custom-validators',
  templateUrl: './custom-validators.component.html',
  styleUrls: ['./custom-validators.component.css']
})
export class CustomValidatorsComponent implements OnInit {
  form: FormGroup;
  username: FormControl;

  constructor(private fb: FormBuilder) {
    this.username = new FormControl('',
      Validators.compose([
        Validators.required, Validators.minLength(3),
        Validators.maxLength(10), InputValidator.startsWithNumber
      ])
    );
    this.form = fb.group({
      username: this.username
    })
  }

  ngOnInit() {
  }

}
