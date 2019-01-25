import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { PropertyResourceService } from '../services/property-api/property-resource.service';
import { LoginServiceService } from '../services/login-service/login-service.service';
// import { PropertyClientsListComponent } from '../property-clients-list/property-clients-list.component';

@Component({
  selector: 'app-content-holder',
  templateUrl: './content-holder.component.html',
  styleUrls: ['./content-holder.component.css']
})
export class ContentHolderComponent implements OnInit {
  private user_role;
  private user;
  private token;

  constructor(
    private route: Router,
    private dbservice: PropertyResourceService,
    private loginservice: LoginServiceService
  ) { }

  ngOnInit() {
    if (this.route.url === '/account') {
      this.loginservice.handleRoles();
    }
  }

}
