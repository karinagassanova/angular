import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import {JsonPipe, NgIf} from "@angular/common";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    JsonPipe,
    NgIf,
    RouterOutlet
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: any;
  title: string | undefined;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.error('Error fetching data from serverless endpoint', error);
      }
    );
  }
}
