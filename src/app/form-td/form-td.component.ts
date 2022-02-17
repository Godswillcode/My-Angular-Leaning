import { Component } from "@angular/core";

@Component({
    selector: 'app-form-td',
    templateUrl: './form-td.component.html'
})

export class FormTdComponent {
    suggestUserName() {
        const suggestedName = 'Superuser';
      }
}