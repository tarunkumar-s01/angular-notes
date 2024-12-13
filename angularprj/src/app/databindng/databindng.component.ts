import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databindng',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './databindng.component.html',
  styleUrl: './databindng.component.css'
})
export class DatabindngComponent {

  myname:string="Tarun kumar S"
  imgpath:string="../../assets/images/1.jpg"
  imgname:string='cricket'

  inputdata:string='samosa'

  greeting(val:string){
    window.alert(`good morning ${val}`);
  }

}
