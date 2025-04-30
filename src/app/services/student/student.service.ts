import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../../model/student';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StudentService {


  readonly BASE_URL = "https://68109e2527f2fdac24121629.mockapi.io/"
  readonly STUDENTS_ENDPOINT = "students/"

  constructor(private http: HttpClient, private router: Router) {

  }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.BASE_URL + this.STUDENTS_ENDPOINT)
  }

  getStudent(id: string): Observable<Student> {
    return this.http.get<Student>(this.BASE_URL + this.STUDENTS_ENDPOINT + id)
  }

  removeStudent(id: string) {
    fetch(this.BASE_URL + this.STUDENTS_ENDPOINT + id, {
      method: 'DELETE',
    }).then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Network response was not ok');
      }
    }).then(() => {
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 1000);
    }).catch(error => {
      console.error('Error deleting task:', error);
    })
  }

  addMarks(id: string, marks: number[]): Promise<Student> {

    const patchValue = { marks: marks }

    return fetch(this.BASE_URL + this.STUDENTS_ENDPOINT + id, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(patchValue)
    }).then(res => {
      return res.json();
    }
      // handle error
    ).catch(error => {
      console.error(error);
    })
  }

  addStudent() {
    const testStudent: Student = {
      name: "Indiana",
      surname: "Pipps",
      country: "Topolinia",
      dob: "01/10/1980",
      gender: "m",
      imageUrl: "https://www.topolino.it/wp-content/uploads/2019/11/indiana_pipps_intera.png",
      marks: [1, 2, 3, 4, 5],
      id: ""
    }

    fetch(this.BASE_URL + this.STUDENTS_ENDPOINT, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(testStudent)
    }).then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Network response was not ok');
      }
    }).then(newStudent => {
      console.log("newStudent", newStudent);

    }).catch(error => {

    })
  }

}
