import { Component, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() pdata:any;
  @Output() eventObj = new EventEmitter()

  sendata(val:string){
    console.log(val);
    this.eventObj.emit(val);

  }

}
