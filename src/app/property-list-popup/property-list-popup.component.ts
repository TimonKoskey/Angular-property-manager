import { Component, OnInit, Inject, EventEmitter, Output} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, NgForm , FormArray} from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap';
import { PersistenceService, StorageType} from 'angular-persistence';
import { PropertyResourceService } from '../services/property-api/property-resource.service';

@Component({
  selector: 'app-property-list-popup',
  templateUrl: './property-list-popup.component.html',
  styleUrls: ['./property-list-popup.component.css']
})
export class PropertyListPopupComponent implements OnInit {
  adminisrator_id;
  Properties ;
  PropertyCheckForm: FormGroup;
  private selectedProperty = [];

  @Output() assignSuccessEvent = new EventEmitter();

  constructor(
    public modalRef: BsModalRef,
    private fb: FormBuilder,
    private persistenceservice: PersistenceService,
    private propertyservice: PropertyResourceService,
  ) {

    this.Properties =  this.persistenceservice.get('property_list', StorageType.SESSION);

    const controls = this.Properties.map(c => new FormControl(false));
    this.PropertyCheckForm = this.fb.group({
      property_objs: this.fb.array(controls),
    });
   }

  ngOnInit() {

  }

  isSelected(property) {
    this.selectedProperty.push(property);
  }

  handleSubmit(PropertyCheckForm) {

    const selectedProperties = PropertyCheckForm.value.property_objs.map((v, i) =>
     v ? this.Properties[i] : null).filter(v => v !== null);

    const properties_to_be_assigned = {
      adminisrator_id: this.adminisrator_id,
      selected_properties: selectedProperties,
    };

    this.propertyservice.assignPropertiesToAdmin( properties_to_be_assigned ).subscribe(results => {
      this.assignSuccessEvent.emit({data: results});
    });

    // this.assignSuccessEvent.emit({data: properties_to_be_assigned});

    this.modalRef.hide();
  }

}
