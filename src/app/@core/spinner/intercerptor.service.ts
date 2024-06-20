import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { SpinnerService } from './spinner.service';

@Injectable({
  providedIn: 'root'
})
export class IntercerptorService implements HttpInterceptor{

  constructor(private spinnerService: SpinnerService) { }

  intercept(req : HttpRequest<any>, next : HttpHandler) : Observable<HttpEvent<any>> {
      this.spinnerService.llamarSpinner();
      return next.handle(req).pipe(
        finalize( ()=>this.spinnerService.detenerSpinner() )
      );
    }

}