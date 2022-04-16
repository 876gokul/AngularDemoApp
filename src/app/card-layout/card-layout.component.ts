import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-card-layout',
  templateUrl: './card-layout.component.html',
  styleUrls: ['./card-layout.component.css'],
})
export class CardLayoutComponent implements OnInit {
  data: any;
  totalLength: any;
  page: number = 1;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<any>('https://jsonplaceholder.typicode.com/comments')
      .subscribe((data) => {
        this.data = data;
        this.totalLength = data.length;
        console.log(this.totalLength);
      });
  }
}
