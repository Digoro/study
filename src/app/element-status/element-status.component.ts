import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-element-status',
    templateUrl: './element-status.component.html',
    styleUrls: ['./element-status.component.css']
})
export class ElementStatusComponent implements OnInit {
    user = {
        id: ''
    };

    constructor() {
    }

    ngOnInit() {
    }

}
