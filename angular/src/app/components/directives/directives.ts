import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  imports: [NgStyle],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {
  size: number = 36;
  color: string = 'red';

  constructor() {}
}
