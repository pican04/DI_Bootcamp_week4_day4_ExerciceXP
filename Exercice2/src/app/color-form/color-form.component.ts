import { Component } from '@angular/core';

@Component({
  selector: 'app-color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.css']
})

/*In the component’s template, display the value of the displayColor property below the form.*/
export class ColorFormComponent {
  favoriteColor: string= "";
  displayColor: string= "";

  submit() {
    console.log(this.favoriteColor);
    this.displayColor = this.favoriteColor;
  }
}
