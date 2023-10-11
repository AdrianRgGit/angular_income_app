import { Component, OnDestroy, OnInit } from '@angular/core';
import { Movement } from '../movement.model';
import { MovementService } from '../movements.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-incomes',
  templateUrl: './incomes.component.html',
  styleUrls: ['./incomes.component.sass'],
})
export class IncomesComponent implements OnInit, OnDestroy {
  incomes: Movement[] = [];

  private movementsSubscription!: Subscription;

  constructor(private movementsService: MovementService) {}

  ngOnInit() {
    this.movementsSubscription = this.movementsService
      .movementsChanged()
      .subscribe(() => {
        this.incomes = this.movementsService.incomes;
      });
  }

  ngOnDestroy() {
    this.movementsSubscription.unsubscribe();
  }
}
