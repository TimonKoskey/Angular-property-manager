import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import 'rxjs/add/operator/map';
import { PersistenceService, StorageType} from 'angular-persistence';

import {AuthLoginData} from '../../auth/auth';
import { User } from '../../auth/user';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private baseUrl = 'http://127.0.0.1:8000/users/serializers/';
  property_details;
  private _property_list;

  // 'http://127.0.0.1:8000/auth/serializers/';
  constructor(
    private cookieService: CookieService,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private persistenceService: PersistenceService
  ) { }

  get property_list () {
    return this._property_list;
  }

  set property_list (propList) {
    this._property_list = propList;
  }

  get user_data() {
    return this.persistenceService.get('user_data', StorageType.SESSION);
  }

  // navigate() {
  //   const token = this.checkToken();
  //   if ( token ) {
  //     this.router.navigate(['/account']);
  //   }
  // }

  createHeaders(token?: string) {
    const data = {
         'Content-Type': 'application/json',
    };
    if (token) {
      data['authorization'] = `JWT ${token}`;
    }
     const httpOptions = {
          headers: new HttpHeaders(data)
      };
     return httpOptions;
  }

  checkToken() {
    if (this.persistenceService.get('token', StorageType.SESSION)) {
      return true;
    } else {
      return false;
    }
    // return this.cookieService.check('jwttoken');
  }

  getToken() {
    return this.persistenceService.get('token', StorageType.SESSION);
  }

  getApp_details() {
    return this.persistenceService.get('company_data', StorageType.SESSION);
  }

  getUser_ID() {
    return this.persistenceService.get('user_data', StorageType.SESSION);
  }

  logout(msg?: string) {
    this.cookieService.delete('jwttoken', '/');
    this.persistenceService.removeAll(StorageType.SESSION);
    this.router.navigate(['/management']);
  }


  setUsername(user: User) {
    this.cookieService.set('username', user.username);
  }

  deleteUsername() {
    this.cookieService.delete('username');
  }

  // getUsername(): string {
  //   return this.cookieService.get('username') || null;
  // }

  setTokenCookie(token, expires= null, msg?: string) {
     this.cookieService.set('jwttoken', token, expires, '/');
  }

  login(data: AuthLoginData): Observable<any> {
    const apiLoginEndpoint = `${this.baseUrl}management/login/api-token-auth/`;
    return this.http.post(apiLoginEndpoint, data)
    .map((response: any) => {
      console.log(response);
      const token = response[0].token || null;
      const date = new Date(response[0]);

      this.persistenceService.set('company_data', response[2],
                                              {type: StorageType.SESSION});

      this.persistenceService.set('token', token,
                                  {type: StorageType.SESSION});

      this.persistenceService.set('user_data', response[1],
                                  {type: StorageType.SESSION});

      this.setTokenCookie(token, date);
      this.setUsername(response);
      return response;
    });
}

  getAppData(userID) {
    const token = this.getToken();
    const httpOptions = this.createHeaders(token);
    return this.http.get(`${this.baseUrl}login-details/${userID}/`, httpOptions);
  }

  getAdminsList(params) {
    const token = this.getToken();
    const httpOptions = this.createHeaders(token);
    httpOptions['params'] = params;
    return this.http.get(`${this.baseUrl}users/list/`, httpOptions);
  }

  deleteAdmin( admin_id ) {
    const token = this.getToken();
    const httpOptions = this.createHeaders(token);
    return this.http.delete(`${this.baseUrl}admin/delete/${ admin_id }/`, httpOptions);
  }

  getTenantList( property_id ) {
    const baseUrl = 'http://127.0.0.1:8000/property/serializers/';
    const token = this.getToken();
    const httpOptions = this.createHeaders(token);
    return this.http.get(`${baseUrl}tenant-list/${ property_id }/`, httpOptions);
  }

  registerAdmin(data): Observable<any> {
    const url = `${this.baseUrl}user/create/`;
    const token = this.getToken();
    const httpOptions = this.createHeaders(token);
    return this.http.post(url, data, httpOptions);

  }

  setUsernameAndPermissionLevel(username, permissionLevel) {
    this.persistenceService.set('username', username, {type: StorageType.SESSION});
    this.persistenceService.set('permissionLevel', permissionLevel, {type: StorageType.SESSION});
    const url = `/management/account/${permissionLevel}`;
    this.persistenceService.set('userAccountBaseUrl', url, {type: StorageType.SESSION});
  }

  getUsername() {
    return this.persistenceService.get('username', StorageType.SESSION);
  }

  getPermissionLevel() {
    return this.persistenceService.get('permissionLevel', StorageType.SESSION);
  }

  userAccountBaseUrl() {
    return this.persistenceService.get('userAccountBaseUrl', StorageType.SESSION);
  }


  handleRoles () {
    const permissionLevel = this.persistenceService.get('user_data', StorageType.SESSION)['role_name'];
    const username = this.persistenceService.get('user_data', StorageType.SESSION)['user']['username'];
    this.setUsernameAndPermissionLevel(username, permissionLevel);

    this.router.navigate(['/management/account', permissionLevel]);

  }

}
