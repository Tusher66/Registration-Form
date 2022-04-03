import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }

  users(){
    return[
    {name:'Tusher', age:28, email:'tusher66@gmail.com'},
    {name:'Abcxyz', age:36, email:'abcxyz@gmail.com'},
    ]
  }

}
