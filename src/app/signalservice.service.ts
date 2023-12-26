import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalserviceService {

  constructor() { }

  form1Submitted = new EventEmitter<any>();
  form2Submitted = new EventEmitter<any>();
}
