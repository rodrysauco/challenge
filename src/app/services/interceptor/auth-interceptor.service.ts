import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	constructor() {}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const token = 'W2E9JmXSgPD2ZZHunBHRN7iQWeHqDnJeMNWohZ5D';
		const authReq = req.clone({
			setHeaders:{
				'X-API-Key':token
			}
		});
		
		return next.handle(authReq);
	}
}