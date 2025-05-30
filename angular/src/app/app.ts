import { Component } from '@angular/core';
import { FirstComponent } from './components/first-component/first-component';
import { ParentData } from './components/parent-data/parent-data';
import { Directives } from './components/directives/directives';
import { IfRender } from './components/if-render/if-render';
import { Events } from './components/events/events';
import { Emitter } from './components/emitter/emitter';
import { RenderList } from './components/render-list/render-list';

@Component({
  selector: 'app-root',
  imports: [
    FirstComponent,
    ParentData,
    Directives,
    IfRender,
    Events,
    Emitter,
    RenderList,
  ],
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
