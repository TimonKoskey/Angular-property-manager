import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
// import { Location, LocationStrategy, PathLocationStrategy, PopStateEvent } from '@angular/common';
import 'rxjs/add/operator/filter';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import PerfectScrollbar from 'perfect-scrollbar';
import { LoginServiceService} from './services/login-service/login-service.service';

declare const $: any;

@Component({
  selector: 'app-root',
  templateUrl: './mydashboard.component.html',
  styleUrls: ['./mydashboard.component.css']
})
export class MyAppComponent implements OnInit {
    data = [];
    superAdmin = true;

    constructor(private loginservice: LoginServiceService) {}

    ngOnInit() {

    }
    // Logout() {
    //     this.dbservice.logout();
    //   }
}
