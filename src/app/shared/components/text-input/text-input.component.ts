import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {

  @Input() searchValue = '';
  @Output() onSearch = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  search(){
    this.onSearch.emit(this.searchValue);
  }

}
