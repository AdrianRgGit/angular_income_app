import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovementService } from '../movements.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  incomes: any[] = [];
  expenses: any[] = [];

  totalIncome: number = 0;
  totalExpense: number = 0;
  total: number = 0;

  private movementsSubscription!: Subscription;

  constructor(private movementsService: MovementService) {}

  ngOnInit() {
    this.movementsSubscription = this.movementsService
      .movementsChanged()
      .subscribe(() => {
        this.incomes = this.movementsService.incomes;
        this.expenses = this.movementsService.expenses;

        this.totalIncome = this.incomes.reduce(
          (total, income) => total + income.amount,
          0
        );
        this.totalExpense = this.expenses.reduce(
          (total, expense) => total + expense.amount,
          0
        );
        this.total = this.totalIncome + this.totalExpense;
      });
  }

  ngOnDestroy() {
    this.movementsSubscription.unsubscribe();
  }
}
