import { Component } from '@angular/core';
import { commonImgPath } from '../shared/constant/constantData';
import { CommonModule } from '@angular/common';
import { ItemservicesService } from '../shared/service/itemservices.service';


@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  itemObj =new ItemservicesService();
  myitems: any[] =[
    {name:'thala' ,description:'best captain ever',imgpath:commonImgPath.audio},
    {name:'virat' ,description:'best captain ever',imgpath:commonImgPath.audio1},
    {name:'kohli' ,description:'best captain ever',imgpath:commonImgPath.audio2},
    {name:'sachin' ,description:'best captain ever',imgpath:commonImgPath.audio3},
    {name:'raina' ,description:'best captain ever',imgpath:commonImgPath.audio4},
    {name:'bumrah' ,description:'best captain ever',imgpath:commonImgPath.audio5}
  ]

}
