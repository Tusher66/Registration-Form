import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../service/userdata.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users:any;

  constructor(private userdata:UserdataService){

    console.warn("userdata",userdata.users())
    this.users=userdata.users();
  }

  ngOnInit(): void {
  }

  onSubmitLogin(data){
    console.warn(data);
  }


}
