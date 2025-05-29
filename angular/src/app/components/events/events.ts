import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-events',
  imports: [NgIf],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {
  show: boolean = false;
  showMessage() {
    this.show = !this.show; //toggle
    alert('O botão foi clicado');
  }

  constructor() {}
}
