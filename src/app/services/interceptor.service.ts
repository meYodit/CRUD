import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
 // let token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsQGdtYWlsLmNvbSIsImlhdCI6MTcwMzc4ODI1OCwiZXhwIjoxNzAzNzkxODU4LCJzdWIiOiIxIn0.0-AlzX6QoeQViUL4OnPfmFLdto58cVhYIavks4qTymY"
  let token = localStorage.getItem('token')
  if(token){
    const headers = new HttpHeaders().set("Authorization", "Bearer " + token);
  const modified_req = req.clone({
      headers
     })
    return next.handle(modified_req)
  }
  return next.handle(req)
    //throw new Error('Method not implemented.');
  }
}
