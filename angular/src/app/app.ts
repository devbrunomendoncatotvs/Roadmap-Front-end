import { Component } from '@angular/core';
import { FirstComponent } from './components/first-component/first-component';
import { ParentData } from './components/parent-data/parent-data';
import { Directives } from './components/directives/directives';

@Component({
  selector: 'app-root',
  imports: [FirstComponent, ParentData, Directives],
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
