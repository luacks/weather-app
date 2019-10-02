import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {

  searchValue: string = '';

  @Output() onSearch = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  search(){
    this.onSearch.emit(this.searchValue);
  }

}
