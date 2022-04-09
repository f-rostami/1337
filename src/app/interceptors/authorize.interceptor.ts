import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable()
export class AuthorizeInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (request.url.startsWith(environment.baseUrl)) {

      const headers = new HttpHeaders().set('Authorization', environment.apiKey);
      const authReq = request.clone({ headers });
      return next.handle(authReq)

      // return from(this._authService.getAccessToken().then(token => {
      //   const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      //   const authReq = request.clone({ headers });
      //   return next.handle(authReq).pipe(tap(_ => { }, error => {
      //     var respError = error as HttpErrorResponse;
      //     if (respError && (respError.status === 401 || respError.status === 403)) {
      //       this._router.navigate(['/unauthorize']);
      //     }
      //   })).toPromise();
      // }));
    }
    else {
      return next.handle(request);
    }
  }
}
