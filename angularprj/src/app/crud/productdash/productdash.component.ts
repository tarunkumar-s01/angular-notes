import { Component } from '@angular/core';
import { DbservicesService } from '../../shared/service/dbservices.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-productdash',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './productdash.component.html',
  styleUrl: './productdash.component.css'
})
export class ProductdashComponent {
  productArray :any;

  constructor(public dbobj:DbservicesService){}

  ngOnInit(){
    this.fetchdata();
  }

  fetchdata(){
    this.dbobj.getRecord("products").subscribe((res:any)=>{
      console.log(res);
      this.productArray = res;
    })
  }

  deletedata(id:any){
    if(window.confirm(`are you sure want to delete the data ${id}`)){
      this.dbobj.deleteRecord("products",id).subscribe(()=>{
        window.alert("product deleted successfully");
        this.fetchdata();
      })
    }

    }
   


}
