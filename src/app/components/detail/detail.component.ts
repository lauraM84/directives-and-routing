import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../services/student/student.service';
import { Student } from '../../model/student';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-detail',
  imports: [ReactiveFormsModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {

  marks?: number[];

  myForm = new FormGroup({
    mark: new FormControl(''),
  });

  authServ = inject(AuthService);
  route = inject(ActivatedRoute);
  studentServ = inject(StudentService);
  student?: Student;
  form: any;

  constructor() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.studentServ.getStudent(id).subscribe({
        next: (data) => {
          this.student = data;
          this.marks = data.marks;
        },
        error: (err) => console.error()
      })
    }

    /*   if (this.student) {
        this.marks = this.student.marks;
      }
   */
  }
  removeStudent(id: string) {
    this.studentServ.removeStudent(id)

  }

  addMark() {
    const newMark = this.myForm.value.mark;



    if (this.marks) {
      this.marks?.push(Number(newMark));
      this.addMarksToStudent(this.marks);
    }
    this.myForm.reset();

  }


  addMarksToStudent(newMarks: number[]) {
    if (this.student) {
      this.studentServ.addMarks(this.student?.id, newMarks)
        .then(modifiedStudent => this.student = modifiedStudent)
    }
  }

}
