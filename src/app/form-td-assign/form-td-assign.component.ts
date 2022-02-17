import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-td-assign',
  templateUrl: './form-td-assign.component.html',
  styles: [
    `
      .container {
        margin-top: 30px;
      }
      input.ng-invalid.ng-touched {
        border: 1px solid red;
      }
    `,
  ],
})
export class FormTdAssignComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultSub = 'Advance';

  onSubmit() {
    console.log(this.signupForm.value);
  }
}
