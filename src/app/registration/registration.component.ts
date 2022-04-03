import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../service/userdata.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  

  users:any;

  constructor(private userdata:UserdataService){

    console.warn("userdata",userdata.users())
    this.users=userdata.users();
  }


  regArr:any={}

  registerArray:any={}
  passwordPtn ='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$'


  ngOnInit(): void {
  }

  onSubmitReg(data){
    console.warn(data);
  }

  

}
