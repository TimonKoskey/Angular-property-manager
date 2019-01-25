import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PersistenceService, StorageType} from 'angular-persistence';

@Injectable({
  providedIn: 'root'
})
export class SuperadminGuard implements CanActivate {

  constructor(
    private persistenceService: PersistenceService
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const role = this.persistenceService.get('user_data', StorageType.SESSION)['role']['role_name'];
      if (role === 'Super-Administrator') {
        return true;
      }
    return false;
  }
}

export class AdminGuard implements CanActivate {

  constructor(
    private persistenceService: PersistenceService
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const role = this.persistenceService.get('user_data', StorageType.SESSION)['role']['role_name'];
      if (role === 'Administrator') {
        return true;
      }
    return false;
  }
}

export class ClientGuard implements CanActivate {

  constructor(
    private persistenceService: PersistenceService
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const role = this.persistenceService.get('user_data', StorageType.SESSION)['role']['role_name'];
      if (role === 'Client') {
        return true;
      }
    return false;
  }
}

// ("Super-Administrator", "Super-Administrator"),
// ("Administrator", "Administrator"),
// ("Client", "Client"),
// )
