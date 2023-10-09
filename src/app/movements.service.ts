import { Movement } from './movement.model';

export class movementService {
  movements: Movement[] = [];

  pushMovement(income: Movement) {
    console.log('added ' + income.amount + 'for ' + income.reason);
    this.movements.push(income);
  }
}
