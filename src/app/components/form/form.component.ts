import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }


  public formValues = {
    test: '',
    userEmail: '',
    userPassword: '',
  }
  public isValidated = false;

  public validateForm() {
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (this.formValues.userEmail.match(emailRegex) && this.formValues.userPassword.length > 8) {
      this.isValidated = true;
    }

  }
}
