import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  public formGroup: FormGroup
  constructor(private formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      username: ['example'],
      password: [''],
    })

  }

  ngOnInit(): void {
  }

}
