import {Component, inject} from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation, MatStepperModule} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {AsyncPipe} from '@angular/common';
import {MatTimepickerModule} from '@angular/material/timepicker';
import {MatDatepickerModule} from '@angular/material/datepicker';
@Component({
  selector: 'app-book-appointment',
  standalone: true,
  imports: [
  MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatTimepickerModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AsyncPipe,

  ],

  templateUrl: './book-appointment.html',
  styleUrls: ['./book-appointment.scss'],
})
export class BookAppointment {
   value!: Date;
  activeStep: number = 1;

  services = [
    { id: 1, name: 'General Checkup' },
    { id: 2, name: 'Teeth Cleaning' },
    { id: 3, name: 'Root Canal' },
    { id: 4, name: 'Dental Filling' },
    { id: 5, name: 'Teeth Whitening' },
    { id: 6, name: 'Orthodontics' },
    { id: 7, name: 'Dental Implants' },
    { id: 8, name: 'Emergency Care' }
  ];

  doctors = [
    { id: 1, name: 'Dr. Sarah Johnson', specialty: 'General Dentistry' },
    { id: 2, name: 'Dr. Michael Chen', specialty: 'Orthodontics' },
    { id: 3, name: 'Dr. Emily Williams', specialty: 'Cosmetic Dentistry' },
    { id: 4, name: 'Dr. James Anderson', specialty: 'Oral Surgery' },
    { id: 5, name: 'Dr. Lisa Park', specialty: 'Pediatric Dentistry' },
    { id: 6, name: 'Dr. Robert Martinez', specialty: 'Endodontics' }
  ];

  selectedService: any = null;
  selectedDoctor: any = null;

  selectService(service: any) {
    this.selectedService = service;
  }

  selectDoctor(doctor: any) {
    this.selectedDoctor = doctor;
  }

   private _formBuilder = inject(FormBuilder);

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  stepperOrientation: Observable<StepperOrientation>;

  constructor() {
    const breakpointObserver = inject(BreakpointObserver);

    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }
}
