import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  register_form: FormGroup
  constructor(
    private fb: FormBuilder
  ) {

  }
  ngOnInit()
  {
    this.loadData()
  }
  loadData()
  {
console.log("load data execute here");

  }
  initForm()
  {
    this.register_form=this.fb.group({
      first_name:['',[Validators.required,Validators.minLength(3),Validators.maxLength(15)]],
      last_name:['',[Validators.required,Validators.minLength(3),Validators.maxLength(15)]],
      email:['',[Validators.required,Validators.email]],
      phone_number:['',[Validators.required]],
      address:['',[Validators.required,Validators.minLength(8),Validators.maxLength(50)]],
    })
  }
}
