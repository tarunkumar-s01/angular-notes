import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CubePipe } from '../shared/customepipe/cube.pipe';
import { SquarePipe } from '../shared/customepipe/square.pipe';

@Component({
  selector: 'app-mypipes',
  standalone: true,
  imports: [CommonModule,CubePipe,SquarePipe],
  templateUrl: './mypipes.component.html',
  styleUrl: './mypipes.component.css'
})
export class MypipesComponent {
  msg:string='hello makkalee'
  emp={id:11,name:'tarun',salary:45000,address:'chennai'};
  dateObj=new Date();

}
