import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DbservicesService } from '../../shared/service/dbservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  name:any;
  pass:any;
  userdata:any;

  constructor(private _dbserv:DbservicesService,private _router:Router){}
  
  checkUser(){
    console.log(this.name,this.pass)
    this._dbserv.getRecord("users").subscribe((res)=>{
      this.userdata = res;
      const currentuser = this.userdata.filter((val:any,index:any)=>{
        return val.userid === this.name && val.userpass === this.pass
      });

      if(currentuser.length > 0){
        sessionStorage.setItem("user",this.name);
        window.alert('login successfully');
        this._router.navigate(["/maindashboard"])
      }else{
        window.alert('wrong validation');
        this.name='';
        this.pass='';
      }
    })

  }

}
