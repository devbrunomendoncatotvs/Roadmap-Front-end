import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { IAnimal } from '../../interfaces/Animal';
@Component({
  selector: 'app-render-list',
  imports: [NgFor],
  templateUrl: './render-list.html',
  styleUrl: './render-list.css',
})
export class RenderList {
  constructor() {}

  animalDetails = '';

  showDetails(anima: IAnimal): void {
    this.animalDetails = `O pet ${anima.name} e tem ${anima.age} anos!`;
  }

  listAnimals: IAnimal[] = [
    { name: 'Bob', type: 'Dog', age: '7' },
    { name: 'Duck', type: 'Pato', age: '12' },
    { name: 'Marli', type: 'Dog', age: '6' },
  ];
}
