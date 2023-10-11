import { Component } from '@angular/core';
import { Movement } from '../movement.model';
import { Subscription } from 'rxjs';
import { MovementService } from '../movements.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.sass'],
})
export class ExpensesComponent {
  expenses: Movement[] = [];

  private movementsSubscription!: Subscription;

  constructor(private movementsService: MovementService) {}

  ngOnInit() {
    this.movementsSubscription = this.movementsService
      .movementsChanged()
      .subscribe(() => {
        this.expenses = this.movementsService.expenses;
      });
  }

  ngOnDestroy() {
    this.movementsSubscription.unsubscribe();
  }
}
