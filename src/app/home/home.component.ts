/**
 * Title: home.component.ts
 * Authors: Professor Richard Krasso and Brock Hemsouvanh
 * Date Created: 05/10/2024
 * Modified: 05/17/2024
 * Description: TypeScript file for the Home component of the Loan App, handling the loan calculation logic.
 */

import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('loanAmountInput') loanAmountInput!: ElementRef;

  loanDetails = {
    amount: 0,
    interestRate: 0,
    years: 0
  };
  monthlyPayment: number = 0;
  totalInterest: number = 0;

  calculateLoan() {
    // P is the principal loan amount
    const P = this.loanDetails.amount;

    // r is the monthly interest rate, calculated by dividing the annual rate by 100 and then by 12
    const r = (this.loanDetails.interestRate / 100) / 12;

    // n is the total number of monthly payments, calculated by multiplying the number of years by 12
    const n = this.loanDetails.years * 12;

    // Calculate the monthly payment using the specified formula
    this.monthlyPayment = P * (r * Math.pow((r + 1), n)) / (Math.pow((1 + r), n) - 1);

    // Calculate the total interest paid over the loan term
    this.totalInterest = (this.monthlyPayment * n) - P;
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
    setTimeout(() => {
      this.loanAmountInput.nativeElement.focus(); // autofocus on loan amount field upon page load
    }, 0);
  }

  selectText(event: FocusEvent) {
    const inputElement = event.target as HTMLInputElement; // highlights text in the field upon focus
    inputElement.select();
  }
}
