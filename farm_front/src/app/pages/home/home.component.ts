import { Component, OnInit } from '@angular/core';
import { Animal, AnimalStatus } from '../animal/animal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  page: number = 1;

  constructor() {}

  ngOnInit(): void {
  }

}
