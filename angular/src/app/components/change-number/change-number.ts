import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number',
  imports: [],
  templateUrl: './change-number.html',
  styleUrl: './change-number.css',
})
export class ChangeNumber {
  @Output() changeNuber: EventEmitter<any> = new EventEmitter();

  constructor() {}
  handleClick() {
    this.changeNuber.emit();
  }
}
