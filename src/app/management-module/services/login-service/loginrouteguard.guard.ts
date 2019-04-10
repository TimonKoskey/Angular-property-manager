import	{	CanActivate	}	from	'@angular/router';
import	{	Injectable	}	from	'@angular/core';
import { LoginServiceService } from './login-service.service';
import {Router, ActivatedRoute} from '@angular/router';

@Injectable()
export	class	ManagementLoginRouteGuard	implements	CanActivate	{
    private username;
    private permissionLevel;

    constructor(private loginService: LoginServiceService , private route: Router) {
        this.username = this.loginService.getUsername();
        this.permissionLevel = this.loginService.getPermissionLevel();
    }

    canActivate() {
        if (this.loginService.checkToken() && this.username &&
            (this.permissionLevel === 'super-administrator' || this.permissionLevel === 'administrator')) {
            return true;
        } else {
            this.loginService.logout();
        }
    }
}

@Injectable()
export	class SuperAdministratorRouteGuard	implements	CanActivate	{
    private permissionLevel;

    constructor(private loginService: LoginServiceService , private route: Router) {
        this.permissionLevel = this.loginService.getPermissionLevel();
    }

    canActivate() {
        if (this.permissionLevel === 'super-administrator') {
            return true;
        } else {
            this.route.navigate([`${this.route.url}`]);
        }
    }
}
