import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemservicesService {

  constructor() { 
    
      
    }
    welcome(para:any){
      window.alert(`hello ${para}`)
  }
}
