import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirm-form-input',
  templateUrl: './confirm-form-input.component.html',
  styleUrls: ['./confirm-form-input.component.css']
})
export class ConfirmFormInputComponent implements OnInit {
  @Input() form_data;
  @Output() data_confirmed = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  checkType(obj) {
    // console.log(typeof obj);
    return typeof obj;
  }

  objectKeys(data) {
    // console.log(data);
    if (data !== null && data !== undefined) {
      return Object.keys(data);
    }
  }

  save (approved: boolean) {
    this.data_confirmed.emit(approved);
    this.form_data = null;
  }

}
