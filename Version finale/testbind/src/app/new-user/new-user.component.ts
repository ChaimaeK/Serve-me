import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {userServices} from "../Services/user.Services";
import {User} from "../Model/User.Model";

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  log_current_user = localStorage.getItem('logadmin');
  userForm!: FormGroup;
  constructor(private formBuilder: FormBuilder , private userService: userServices) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      nom : ['', Validators.required],
      prenom : ['', Validators.required],
      email : ['', Validators.required, Validators.email],
      password: ['', Validators.required],
      telephone:['', Validators.required],
      adresse:['', Validators.required],
      codePostal:['', Validators.required],
      disponible:['', Validators.required],
      profession:['', Validators.required],
      totalservices:'',
    });
  }
  onSubmitForm() {
    const formValue = this.userForm.value;
    const newUser = new User(0,
      formValue['email'],
      formValue['nom'].concat(' ', formValue['prenom']),
      formValue['password'],
      formValue['telephone'],
      formValue['adresse'],
      formValue['codePostal'],
      (/true/i).test(formValue['disponible']),
      formValue['profession'],
      0,
    );
    this.userService.currentUser=newUser;
    this.userService.saveUserToServer(newUser);
    localStorage.setItem('name', newUser.full_name);
    localStorage.setItem('password', newUser.password);
    localStorage.setItem('new' , 'true');
  }


}
