import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbservicesService } from '../../shared/service/dbservices.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productadd',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './productadd.component.html',
  styleUrl: './productadd.component.css'
})
export class ProductaddComponent {
  id:any;
  prodata:any;
  constructor(private _actRoute:ActivatedRoute,private _dbobj:DbservicesService,private _router:Router){}

  ngOnInit(){
    this._actRoute.params.subscribe((param:any)=>{
      console.log(param);
      this.id=param.id;
      this._dbobj.getsingleRecord("products",this.id).subscribe((res:any)=>{
        this.prodata={...res}
      })
    })
  }

  addData(val:any){
    this._dbobj.getupdateRecord("products",this.id,val).subscribe(()=>{
      window.alert("product update successfully");
      this._router.navigate(["/maindashboard/productdash"]);
    })

  }

}
