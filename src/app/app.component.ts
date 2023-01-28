import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { EmployeService } from './employe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';
  ValidatorForm: any;
  submitted = false;
  validateAge: any;
  validateEmail : any;
  errorMessag: any;
  messageError: any;
  successMessage = "";

  constructor(private formBuilder: FormBuilder, private service: EmployeService) {
    this.ValidatorForm = this.formBuilder.group({
      fname: ["", Validators.required],
      lname: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      age: ["", Validators.required],
      birthday: ["", Validators.required],
      gender: ["", Validators.required],
      married: ["", Validators.required],
      country: ["", Validators.required]
    })
  }

  get fname() { return this.ValidatorForm.get("fname") }
  get lname() { return this.ValidatorForm.get("lname") }
  get email() { return this.ValidatorForm.get("email") }
  get age() { return this.ValidatorForm.get("age") }
  get birthday() { return this.ValidatorForm.get("birthday") }
  get married() { return this.ValidatorForm.get("married") }
  get country() { return this.ValidatorForm.get("country") }
  get gender() { return this.ValidatorForm.get("gender") }

  onSubmit() {
    this.submitted = true;

    if(this.email.value.length > 0){
      let result = this.email.value.search("@yopmail.com");
      if(result !== -1){
        this.validateEmail= false
      }else {
        this.validateEmail= true
      }
    }

    if(this.age.value> 0) {
      if(this.age.value > 60 ){
         this.messageError = "Age must be over 18+ and less than 60"
         this.validateAge= false
      }else if(this.age.value < 18){
        this.messageError = "Age must be over 18+ and less than 60"
        this.validateAge= false
      }else{
        this.messageError = ""
        this.validateAge= true
      }
    }


    if(this.validateAge && this.validateEmail && this.ValidatorForm.valid){
      this.service.createEmployee(this.ValidatorForm.value);
          console.log("added !")   
          this.successMessage= "added succefuly !"
    }
  }

}
