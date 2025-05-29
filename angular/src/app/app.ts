import { Component } from '@angular/core';
import { FirstComponent } from './components/first-component/first-component';
import { ParentData } from './components/parent-data/parent-data';

@Component({
  selector: 'app-root',
  imports: [FirstComponent, ParentData],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  userName: string = 'Joaozinho123';
  userData = {
    email: 'joaozinho123@gmail.com',
    age: 22,
  };
  protected title = 'angular';
}
