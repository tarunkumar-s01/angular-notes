import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbservicesService {

  baseurl:string="http://localhost:8888"

  constructor(public httpObj:HttpClient) { }

  getRecord(tablename:any){
    return this.httpObj.get(`${this.baseurl}/${tablename}`);
  }

  deleteRecord(tablename:any,id:any){
    return this.httpObj.delete(`${this.baseurl}/${tablename}/${id}`);
  }

  addRecord(tablename:any,body:any){
    return this.httpObj.post(`${this.baseurl}/${tablename}`,body);
  }

  getsingleRecord(tablename:any,id:any){
    return this.httpObj.get(`${this.baseurl}/${tablename}/${id}`);
  }

  getupdateRecord(tablename:any,id:any,body:any){
    return this.httpObj.put(`${this.baseurl}/${tablename}/${id}`,body);
  }

}
