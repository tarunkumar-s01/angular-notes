import { Component } from '@angular/core';

@Component({
  selector: 'app-toggleimg',
  standalone: true,
  imports: [],
  templateUrl: './toggleimg.component.html',
  styleUrl: './toggleimg.component.css'
})
export class ToggleimgComponent {
  imgpath:string='../../assets/images/chepauk.jpeg'
  imgname:string='chepauk'
  name:string='Chepauk'
 

  changeimg(){
    if (this.imgname=='chepauk'){
      this.imgpath='../../assets/images/chinnaswamy.jpeg'
      this.imgname='chinaswamy'
      this.name='Chinnaswamy'
    }
    else{
      this.imgpath='../../assets/images/chepauk.jpeg'
      this.imgname='chepauk'
      this.name='Chepauk'

    }
  }

}
