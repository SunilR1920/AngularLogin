import { HttpInterceptorFn } from '@angular/common/http';

export const senderInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(`Request is on its way to ${req.url}`);
    const loginReq = req.clone({
      headers: req.headers.set('Authorization','passobj')
    });
  return next(loginReq);
};
