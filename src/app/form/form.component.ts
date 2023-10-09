import { Component } from '@angular/core';
import { Movement } from '../movement.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass'],
})
export class FormComponent {

  let movement = new Movement(
    this.reasonInputRef.nativeElement.value
  )
}
