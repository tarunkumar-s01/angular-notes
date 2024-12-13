import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DbservicesService } from '../../shared/service/dbservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productedd',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './productedd.component.html',
  styleUrl: './productedd.component.css'
})
export class ProducteddComponent {

  constructor( public _dbobj:DbservicesService,public _router:Router){}

  addData(data:any){
    console.log(data);
    this._dbobj.addRecord("products",data).subscribe(()=>{
      window.alert("product added successfully");
      this._router.navigate(["/maindashboard/productdash"])
    })
  }

}
