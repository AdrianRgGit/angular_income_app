import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent {
  totalIncome: number = 0;
  totalExpense: number = 0;
  total: number = this.totalIncome - this.totalExpense;
}
