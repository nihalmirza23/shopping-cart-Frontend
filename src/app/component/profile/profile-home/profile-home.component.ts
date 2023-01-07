import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UpdateUser, User } from '../../login/model/User.model';
import { ProfileServiceService } from '../service/profileservice.service';

@Component({
  selector: 'app-profile-home',
  templateUrl: './profile-home.component.html',
  styleUrls: ['./profile-home.component.css']
})
export class ProfileHomeComponent implements OnInit {

  user:User;
  updateProfileModal:boolean;
  updateForm:FormGroup;
  updateUser:UpdateUser;


  constructor(private profileService:ProfileServiceService) {

    this.updateProfileModal = false;

    this.updateUser={address:{
    }};

    this.user={"address":null,dateOfBirth:null,email:"",fullName:"",gender:"",id:"",mobileNo:"",password:"",
    plainTextPassword:"",role:"",userName:""
            };

    this.updateForm = new FormGroup(
      {
        "fullName":new FormControl(null,Validators.required),
         "email": new FormControl(null,[Validators.required, Validators.email]),
          "mobileNo":new FormControl(null,
            [
              Validators.required,
              Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$'),
            ]),
          "gender":new FormControl(null,Validators.required),
          "dateOfBirth":new FormControl(null,Validators.required),
          "houseNumber":new FormControl(null,Validators.required),
          "streetName":new FormControl(),
          "colonyName":new FormControl(null,Validators.required),
          "city":new FormControl(null,Validators.required),
          "state":new FormControl(null,Validators.required),
          "pinCode":new FormControl(null,Validators.required)
      }
    );

   }

  ngOnInit(): void {
   let userId = localStorage.getItem('userId');
   console.log(userId);
  this.profileService.getUserDetails(userId).subscribe(
    data=>{
      console.log(data);
      this.user=data;
    },
    error=>{
      alert("error")
    }
  );
  }

  updateProfile(){
    this.updateProfileModal = !this.updateProfileModal;
  }

  onSubmit(){
    let userId = localStorage.getItem('userId');
    console.log(this.updateForm.value);
    this.updateUser.fullName=this.updateForm.value.fullName;
    this.updateUser.email=this.updateForm.value.email;
    this.updateUser.dateOfBirth=this.updateForm.value.dateOfBirth;
    this.updateUser.mobileNo=this.updateForm.value.mobileNo;
    this.updateUser.gender=this.updateForm.value.gender;
    this.updateUser.address.houseNumber=this.updateForm.value.houseNumber;
    this.updateUser.address.streetName=this.updateForm.value.streetName;
    this.updateUser.address.colonyName=this.updateForm.value.colonyName
    this.updateUser.address.city=this.updateForm.value.city;
    this.updateUser.address.state=this.updateForm.value.state;
    this.updateUser.address.pinCode=this.updateForm.value.pinCode;
    console.log(this.updateUser);

    this.profileService.updateUser(userId,this.updateUser).subscribe(data=>{
      this.user=data;
      console.log(data);
    });
    alert("profile updated successfully");
  }
}
