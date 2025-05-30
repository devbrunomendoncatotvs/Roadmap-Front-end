import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-render-list',
  imports: [NgFor],
  templateUrl: './render-list.html',
  styleUrl: './render-list.css',
})
export class RenderList {
  constructor() {}

  listAnimals = [
    { name: 'Bob', type: 'Dog' },
    { name: 'Duck', type: 'Pato' },
    { name: 'Marli', type: 'Dog' },
  ];
}
