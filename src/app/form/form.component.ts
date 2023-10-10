import { Component } from '@angular/core';
import { Movement } from '../movement.model';
import { MovementService } from '../movements.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass'],
})
export class FormComponent {
  reason: string = '';
  amount: number = 0;

  constructor(private movementService: MovementService) {}

  newMovement() {
    if(!this.reason){
      this.reason = "A default reason"
    }
    let movement = new Movement(this.reason, this.amount);
    this.movementService.pushMovement(movement);
    this.reason = ""
  }
}
