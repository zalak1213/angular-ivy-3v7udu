import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css'],
})
export class StudentlistComponent implements OnInit {
  url: string = 'https://5e8bb871be5500001689ec86.mockapi.io/api/v1/students';
  students: Array<any> = [];
  constructor(private _http:HttpClient) {}

  ngOnInit() {
    this.getData();
  }
  getData() {
    this._http.get(this.url).subscribe((data: any) => {
      this.students = data;
    });
  }
  sendStudentForm(data: any) {
    this._http.post(this.url, data).subscribe((res: any) => {
      console.log(res);
    });
  }
}
