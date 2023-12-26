import { Component, EventEmitter, Output, computed, signal } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SignalserviceService } from '../signalservice.service';

@Component({
  selector: 'app-prof-data',
  templateUrl: './prof-data.component.html',
  styleUrls: ['./prof-data.component.scss']
})
export class ProfDataComponent {


  profForm!: FormGroup;
  constructor(private fb: FormBuilder,private service:SignalserviceService) {
    this.profForm = this.fb.group({
      firstName: [''],
      lastName: ['']
    });
  }

  firstName = signal('')
  lastName = signal('')

  fullName = computed(()=>`${this.firstName()} ${this.lastName()} `)


adddata(){
  
  this.service.form2Submitted.emit(this.fullName())
  this.profForm.reset()
}
}
