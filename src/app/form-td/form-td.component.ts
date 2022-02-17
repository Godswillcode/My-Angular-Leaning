import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-td',
  templateUrl: './form-td.component.html',
  styleUrls: ['./form-td.component.css']
})
export class FormTdComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'pet'

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  //   onSubmit(form: NgForm) {
  //     console.log(form);
  //   }

  onSubmit() {
    console.log(this.signupForm);
  }
}
