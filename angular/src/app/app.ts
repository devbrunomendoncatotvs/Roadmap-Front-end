import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './components/first-component/first-component';

@Component({
  selector: 'app-root',
  imports: [FirstComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'angular';
}
