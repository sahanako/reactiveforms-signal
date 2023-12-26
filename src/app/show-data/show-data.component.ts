import { Component, Input } from '@angular/core';
import { SignalserviceService } from '../signalservice.service';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.scss']
})
export class ShowDataComponent {
formData:any
formdata1:any
  constructor(private service:SignalserviceService){}
ngOnInit(){
   this.service.form1Submitted.subscribe(data => this.displayFormData(data));
  this.service.form2Submitted.subscribe(res=>this.displayFormData1(res))
}

displayFormData(formData: any){
  this.formData = formData
}
displayFormData1(formData: any){
  this.formdata1 = formData
}

}
