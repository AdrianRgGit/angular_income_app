import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { IncomesComponent } from './incomes/incomes.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { FormsModule } from '@angular/forms';
import { MovementService } from './movements.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    IncomesComponent,
    ExpensesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [MovementService],
  bootstrap: [AppComponent],
})
export class AppModule {}
