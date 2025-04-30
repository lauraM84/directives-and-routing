import { Component, inject } from '@angular/core';
import { StudentService } from '../../services/student/student.service';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-student',
  imports: [ReactiveFormsModule],
  templateUrl: './new-student.component.html',
  styleUrl: './new-student.component.scss'
})
export class NewStudentComponent {

  studetsServ = inject(StudentService);

  newStudentForm = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    birthDate: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    imageUrl: new FormControl('', Validators.required),

  });


  addStudent() {
    throw new Error('Method not implemented.');
  }
}
