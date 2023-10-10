import { Component } from '@angular/core';
import { Movement } from '../movement.model';
import { MovementService } from '../movements.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass'],
  providers: [MovementService],
})
export class FormComponent {
  reason: string = '';
  amount: number = 0;

  constructor(private movementService: MovementService) {}

  newMovement() {
    let movement = new Movement(this.reason, this.amount);
    this.movementService.pushMovement(movement);
  }
}
