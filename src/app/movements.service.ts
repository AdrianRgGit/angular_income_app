import { Injectable } from '@angular/core';
import { Movement } from './movement.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovementService {
  incomes: Movement[] = [];
  expenses: Movement[] = [];
  movementSubject = new BehaviorSubject<null>(null);

  pushMovement(movement: Movement) {
    console.log('added ' + movement.amount + ' for ' + movement.reason);
    if (movement.amount < 0) {
      console.log('Es un gasto');
      this.expenses.push(movement);
    } else {
      console.log('Es un beneficio');
      this.incomes.push(movement);
    }
    // Notifica a los suscriptores que ha habido cambios en los movimientos
    this.movementSubject.next(null);
  }

  movementsChanged(): Observable<null> {
    return this.movementSubject.asObservable();
  }
}
