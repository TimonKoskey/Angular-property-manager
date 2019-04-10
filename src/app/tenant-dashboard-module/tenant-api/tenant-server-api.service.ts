import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Router, ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/map';
import { PersistenceService, StorageType} from 'angular-persistence';

@Injectable({
  providedIn: 'root'
})
export class TenantServerApiService {
  baseUrl = 'http://127.0.0.1:8000/users/serializers/';

  constructor(
    private http: HttpClient,
    private route: Router,
    private persistence_data: PersistenceService
  ) { }

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

  logout() {
    this.route.navigate(['/login']);
  }

  authenticateTenant (tenantCredentials) {
    const authUrl = `${this.baseUrl}tenant/login/api-token-auth/`;
    return this.http.post(authUrl, tenantCredentials).map(response => {
      // console.log(response[1]);
      this.persistence_data.set('tenant_details', response[1], {type: StorageType.SESSION});
    });
  }

  getTenantDetails() {
    return this.persistence_data.get('tenant_details', StorageType.SESSION);
  }

  fetchTenantData(id: number) {
    const url = `http://127.0.0.1:8000/property/serializers/tenant/details/${id}`;
    const httpOptions = this.createHeaders();
    return this.http.get(url, httpOptions);
  }
}
