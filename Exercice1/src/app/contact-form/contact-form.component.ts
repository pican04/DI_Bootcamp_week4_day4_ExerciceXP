import { Component } from '@angular/core';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})

/* In the component class, create a model object
 with properties for each of the form fields (name, email, message). */

export class ContactFormComponent {

  name: string = " ";
  email: string = " ";
  message: string = " ";

  submit() {
    console.log(this.name, this.email, this.message);
  }
 
}
