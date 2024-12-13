import { Component } from '@angular/core';


@Component({
  selector: 'app-multipleimg',
  standalone: true,
  imports: [],
  templateUrl: './multipleimg.component.html',
  styleUrl: './multipleimg.component.css'
})

export class MultipleimgComponent {
  imgpath:string='../../assets/images/one.jpeg'
  imgname:string='raina'
  name:string='Raina'
 

  changeimg(){
    
      this.imgpath='../../assets/images/two.jpeg'
      this.imgname='kohli'
      this.name='kohli'
  }
  changeimg1(){
    
      this.imgpath='../../assets/images/three.jpeg'
      this.imgname='sachin'
      this.name='sachin'
  }
  changeimg2(){
    
      this.imgpath='../../assets/images/four.jpeg'
      this.imgname='rohith'
      this.name='rohith'
  }
  changeimg3(){
    
      this.imgpath='../../assets/images/one.jpeg'
      this.imgname='raina'
      this.name='raina'
  }


}
