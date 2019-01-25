import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Router } from '@angular/router';

import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie-service'; //


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private cookieService: CookieService, // changed ; to ,
    private router: Router
    ) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const jwttoken = this.cookieService.get('jwttoken');
    console.log(jwttoken, 'testing token interceptor');
    if (jwttoken) {
      request = request.clone({
        setHeaders: {
          // This is where you can use your various tokens
          // Authorization: `JWT ${jwttoken}`,
          // 'X-CSRFToken': `${csrftoken}`
        }
      });
    }
    return next.handle(request).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // do stuff with response if you want
        // console.log("cool it worked!")
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401 || err.status === 403) {
          const currentUrl = this.router.url;
          if (currentUrl !== '/saka/sign-in') {
            // alert("Session ended. Please login again")
            // console.log('testing token interceptor');
            this.cookieService.delete('jwttoken');
            // this.router.navigate(['/saka/sign-in'], {queryParams: {next: currentUrl}})
          }
          // /login?next=/status/create
        }
      }
    });
  }
}
