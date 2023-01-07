import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { User } from '../../register/model/user.model';
import { RegistrationService } from '../../register/service/registration.service';

@Component({
  selector: 'app-login-home',
  templateUrl: './login-home.component.html',
  styleUrls: ['./login-home.component.css']
})
export class LoginHomeComponent implements OnInit {

  users:User[];
  logInForm:FormGroup;
  user:User;
  errorMsg: string;
  uid:string;
  role:string;


  constructor(private registrationService:RegistrationService,private appService:AppService,private router:Router) { }

  ngOnInit(): void {


    this.registrationService.getUsers().subscribe(data=>{
      this.users=data;
    });

    this.logInForm=new FormGroup({

      username:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)
    });
  }

  onPostLogin(){

    let username =this.logInForm.value.username;
    let password = this.logInForm.value.password;

    let user=this.users.find(u=>u.userName===username && u.plainTextPassword===password);


    if(user){
      this.uid=user.id;
      this.role=user.role;
      localStorage.setItem("isLoggedIn","true");

      let token= btoa(username+':'+password);


      localStorage.setItem("token",token);

      localStorage.setItem("userId",this.uid);
      localStorage.setItem("userRole",this.role);

      if(this.role="Merchant"){
        localStorage.setItem("isMerchant","true");
        this.appService.isMerchant.next(true);
      }else{
        localStorage.setItem("isMerchant","false");
        this.appService.isMerchant.next(false);
      }

      this.appService.loggedIn.next(true);
      this.router.navigateByUrl("/");
      alert("User logged in");
    }
    else
    {
      this.errorMsg = 'Invalid Credentials';
    }



}

}
