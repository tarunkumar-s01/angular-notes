import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-switchtask',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './switchtask.component.html',
  styleUrl: './switchtask.component.css'
})
export class SwitchtaskComponent {

  bikes:string[]=["hero-honda","ktm","bullet","bajaj","tvs","yamaha"];
  cars:string[]=["bmw","ford","rolls royce","tata","mahendra"];
  items:string[]=[];
  selectedName: string ='';

  display(){
    this.items=this.bikes
    this.selectedName='';
    
  }
  display2(){
    this.items=this.cars
    this.selectedName='';
  }
  selectItem(name: string) {
    this.selectedName = name; 
  }

}
