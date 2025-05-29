import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  imports: [],
  templateUrl: './first-component.html',
  styleUrl: './first-component.css',
})
export class FirstComponent {
  name: string = 'Bruno Mendonça';
  age: number = 27;
  job: string = 'Front-end Developer';
  hobbies: string[] = ['Treinar', 'Estudar', 'Codar'];
  car = {
    name: 'Civic',
    year: 2013,
  };

  constructor() {}
}
