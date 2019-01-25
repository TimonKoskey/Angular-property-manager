import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { LoginServiceService} from '../login-service/login-service.service';


@Injectable()
export class PropertyResourceService {
  private baseUrl = 'http://127.0.0.1:8000/property/serializers/';
  private permission_status;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private loginservice: LoginServiceService,
    ) {

     }

  createHeaders(token?: string) {
    const data = {
         'Content-Type': 'application/json',
    };
    if (token) {
      data['authorization'] = `JWT ${token}`;
      // console.log(data, 'Token');
    }
     const httpOptions = {
          headers: new HttpHeaders(data)
      };
     return httpOptions;
  }

  createQuery(user, permission) {
    let params = new HttpParams();
    params = params.append('user', user);
    params = params.append('permission', permission);
    return params;
  }

  fetchAllProperties () {
    const token = this.loginservice.getToken();
    const httpOptions = this.createHeaders(token);
    const apiLoginEndpoint = `${this.baseUrl}list/all`;
    return this.http.get(apiLoginEndpoint, httpOptions);
  }


  fetchListofProperties ( permission, user) {
    const token = this.loginservice.getToken();
    const httpOptions = this.createHeaders(token);
    const apiLoginEndpoint = `${this.baseUrl}list/`;
    const params = this.createQuery(user, permission);
    httpOptions['params'] = params;
    console.log (httpOptions);
    return this.http.get(apiLoginEndpoint, httpOptions);
  }

  fetchPropertyDetails (propertyID) {
    const token = this.loginservice.getToken();
    const httpOptions = this.createHeaders(token);
    return this.http.get(`${this.baseUrl}details/${propertyID}/`, httpOptions);
  }

  DeleteProperty (propertyID) {
    const token = this.loginservice.getToken();
    const httpOptions = this.createHeaders(token);
    return this.http.delete(`${this.baseUrl}details/delete/${propertyID}/`, httpOptions);
  }

  EditProperty (propertyID, params) {
    const token = this.loginservice.getToken();
    const httpOptions = this.createHeaders(token);
    return this.http.put(`${this.baseUrl}details/edit/${propertyID}/`, params, httpOptions);
  }

  searchTerm(term: string) {
    console.log(term);
    const apiLoginEndpoint = `${this.baseUrl}location/`;
    const params = '';
    if (!term.trim()) {
      // if not search term, return empty hero array, {params: params}.
      return of([]);
    }
    return this.http.get(apiLoginEndpoint);
  }
  addProperty(params) {
    const token = this.loginservice.getToken();
    const httpOptions = this.createHeaders(token);
    const add_property_url = this.baseUrl + 'create/';
    return this.http.post(add_property_url, params, httpOptions);
  }

  addUnit(params) {
    // console.log(params);
    const token = this.loginservice.getToken();
    const httpOptions = this.createHeaders(token);
    const add_property_url = this.baseUrl + 'unit/create/';
    return this.http.post(add_property_url, params, httpOptions);
  }

  getUnitsList( property_id ) {
    const units_url = this.baseUrl;
    const token = this.loginservice.getToken();
    const httpOptions = this.createHeaders(token);
    return this.http.get(`${units_url}units/list/${property_id}/`, httpOptions);
  }

  fetchUnitDetails (unit_id) {
    const token = this.loginservice.getToken();
    const httpOptions = this.createHeaders(token);
    return this.http.get(`${this.baseUrl}unit/details/${unit_id}/`, httpOptions);
  }

  editUnitDetails (unit_id, params) {
    const token = this.loginservice.getToken();
    const httpOptions = this.createHeaders(token);
    return this.http.put(`${this.baseUrl}unit/details/edit/${unit_id}/`, params, httpOptions);
  }

  assignPropertiesToAdmin(properties) {
    const token = this.loginservice.getToken();
    const httpOptions = this.createHeaders(token);
    return this.http.post(`${this.baseUrl}properties/assign-to-admin/`, properties, httpOptions);
  }
// ${ property_id }/
}
