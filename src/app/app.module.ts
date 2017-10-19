import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {BuiltInValidatorComponent} from "./built-in-validator/built-in-validator.component";
import {ElementStatusComponent} from './element-status/element-status.component';
import {FormReferenceVariableComponent} from './form-reference-variable/form-reference-variable.component';
import {FormGroupComponent} from './form-group/form-group.component';

@NgModule({
    declarations: [
        AppComponent,
        BuiltInValidatorComponent,
        ElementStatusComponent,
        FormReferenceVariableComponent,
        FormGroupComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
