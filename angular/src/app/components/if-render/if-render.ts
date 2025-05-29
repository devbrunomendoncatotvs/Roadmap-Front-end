import { Component } from '@angular/core';

import { NgIf } from '@angular/common';

@Component({
  selector: 'app-if-render',
  imports: [NgIf],
  templateUrl: './if-render.html',
  styleUrl: './if-render.css',
})
export class IfRender {
  canShow: boolean = false;

  constructor() {}
}
