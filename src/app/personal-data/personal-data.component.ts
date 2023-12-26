import { Component, computed, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { SignalserviceService } from '../signalservice.service';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent {
  // userForm!: FormGroup;


  profileForm!: FormGroup;

  constructor(private fb: FormBuilder,private service:SignalserviceService) {
    this.profileForm = this.fb.group({
      firstName: [''],
      lastName: ['']
    });
  }

  firstName = signal('sahana ')
  lastName = signal('k')

  fullname = computed(()=>`${this.firstName()} ${this.lastName()} `)


adddata(){
  
this.service.form1Submitted.emit(this.fullname())
this.profileForm.reset()
}
  ngOnInit() {
  }

}



  
