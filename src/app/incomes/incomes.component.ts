import { Component, OnInit } from '@angular/core';
import { Movement } from '../movement.model';
import { MovementService } from '../movements.service';

@Component({
  selector: 'app-incomes',
  templateUrl: './incomes.component.html',
  styleUrls: ['./incomes.component.sass'],
})
export class IncomesComponent implements OnInit {
  incomes: Movement[] = [];

  constructor(private movementService: MovementService) {}

  ngOnInit(): void {
    this.incomes = this.movementService.incomes;
  }
}
