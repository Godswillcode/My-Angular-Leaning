import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
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
export class FormReactiveComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Chris', 'Anna'];

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),

      gender: new FormControl('male'),
      hobbies: new FormArray([]),
    });
  }
  onSubmit() {
    console.log(this.signupForm);
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
      if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
          return {'nameIsForbidden' : true};
      }
      return null;
  }

  // forbiddenEmails(control: FormControl): Promise<any> | Observable<any>{
  //  const promise = new Promise<any>(() => {
  //      setTimeout(() => {
  //         if (control.value === 'test@test.com') {
  //             resolve({'emailIsForbidden' : true})
  //         } else {
  //             resolve(null)
  //         }
  //      }, 1500)
  //  })

  //    return promise
  // }
  
}
