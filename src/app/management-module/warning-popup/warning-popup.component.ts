import { Component, OnInit, Inject, EventEmitter, Output} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, NgForm , FormArray} from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap';
import { PersistenceService, StorageType} from 'angular-persistence';
import { PropertyResourceService } from '../services/property-api/property-resource.service';

@Component({
  selector: 'app-warning-popup',
  templateUrl: './warning-popup.component.html',
  styleUrls: ['./warning-popup.component.css']
})
export class WarningPopupComponent implements OnInit {
  @Output() action_confirmed = new EventEmitter<boolean>();

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

  action(bol: boolean) {
    this.action_confirmed.emit(bol);
    this.bsModalRef.hide();
  }

}
