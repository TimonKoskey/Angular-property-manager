import { Component, OnInit, OnDestroy } from '@angular/core';
import { PersistenceService, StorageType} from 'angular-persistence';
import { LoginServiceService } from '../services/login-service/login-service.service';
import { PropertyResourceService } from '../services/property-api/property-resource.service';
import {Router, ActivatedRoute} from '@angular/router';
import { PropertyListPopupComponent } from '../property-list-popup/property-list-popup.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-adminisrator-details',
  templateUrl: './adminisrator-details.component.html',
  styleUrls: ['./adminisrator-details.component.css']
})
export class AdminisratorDetailsComponent implements OnInit, OnDestroy {
  admin_details;
  avatar = 'http://127.0.0.1:8000';

  modalRef: BsModalRef;

  constructor(
    private persistence: PersistenceService,
    private loginservice: LoginServiceService,
    private route: Router,
    private router: ActivatedRoute,
    private modalService: BsModalService,
    private dbservice: PropertyResourceService
    ) {
    this.admin_details = this.persistence.get('admin', StorageType.SESSION);
  }

  ngOnInit() {
    console.log(this.admin_details);
  }

  deleteAdminAccount() {
    this.loginservice.deleteAdmin(this.admin_details.id).subscribe(data => {
      this.route.navigate(['/account/admins']);
    });
  }

  assignProperty() {
    const initialState = {
      adminisrator_id: this.admin_details['id'],
      Properties: this.dbservice.getproperty_list()
    };
    this.modalRef = this.modalService.show(PropertyListPopupComponent, {initialState});

    this.modalRef.content.assignSuccessEvent.subscribe(data => {
      // console.log(data);
    });
  }

  ngOnDestroy() {
    this.persistence.remove('admin', StorageType.SESSION);
  }

}
