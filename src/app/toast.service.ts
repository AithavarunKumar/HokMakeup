import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toastSubject=new Subject<string>();
  toastMessage$=this.toastSubject.asObservable();
  
  showToast(message:string):void{
      this.toastSubject.next(message);

      setTimeout(() => {
        this.toastSubject.next('');
      }, 1000);
  }

}
