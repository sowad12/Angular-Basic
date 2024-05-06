import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input()
  all:number=0;
  @Input()
  InStock:number=0;
  @Input()
  OutStock:number=0;
  RadioButtonValue:string='all';
  @Output()
  selectedRadioButtonFilter:EventEmitter<string>=new EventEmitter<string>();
  FilterDataSend(){
    // console.log("child Event Emiter Call"+this.RadioButtonValue);
    this.selectedRadioButtonFilter.emit(this.RadioButtonValue);
  }
}
