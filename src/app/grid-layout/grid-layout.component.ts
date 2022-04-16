import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-layout',
  templateUrl: './grid-layout.component.html',
  styleUrls: ['./grid-layout.component.css'],
})
export class GridLayoutComponent implements OnInit {
  data: any;
  totalLength: any;
  page: number = 1;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<any>('https://jsonplaceholder.typicode.com/users')
      .subscribe((data) => {
        this.data = data;
        this.totalLength = data.length;
        console.log(this.totalLength);
      });
  }
}
