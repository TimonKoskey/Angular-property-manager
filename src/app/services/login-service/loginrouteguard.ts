import	{	CanActivate	}	from	'@angular/router';
import	{	Injectable	}	from	'@angular/core';
import { LoginServiceService } from './login-service.service';
import {Router, ActivatedRoute} from '@angular/router';

@Injectable()
export	class	LoginRouteGuard	implements	CanActivate	{
    constructor(private loginService: LoginServiceService , private route: Router) {}
    canActivate() {
        return true;
    }
}