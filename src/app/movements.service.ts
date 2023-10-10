import { VariableBinding } from '@angular/compiler';
import { Movement } from './movement.model';

export class MovementService {
  incomes: Movement[] = [];
  expenses: Movement[] = [];
  pushMovement(movement: Movement) {
    console.log('added ' + movement.amount + 'for ' + movement.reason);
    if (movement.amount < 0) {
      console.log('Es un gasto');
      this.expenses.push(movement);
    } else {
      console.log('Es un beneficio');
      this.incomes.push(movement);
    }
  }
}
