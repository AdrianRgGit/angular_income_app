import { Component } from '@angular/core';
import { Movement } from '../movement.model';
import { MovementService } from '../movements.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass'],
})
export class FormComponent {
  // FIXME: No me funciona como booleano, echarle un vistazo
  isIncome: string = 'true';
  reason: string = '';
  amount: number = 0;

  constructor(private movementService: MovementService) {}

  newMovement() {
    if (!this.reason) {
      this.reason = 'A default reason';
    }
    let originalAmount = this.amount;
    console.log(this.isIncome);

    if (this.isIncome == 'false') {
      this.amount = -this.amount;
    }

    let movement = new Movement(this.reason, this.amount);

    this.amount = originalAmount;
    this.movementService.pushMovement(movement);
    this.reason = '';
  }
}
