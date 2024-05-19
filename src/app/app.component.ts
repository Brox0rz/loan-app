/**
 * Title: app.component.ts
 * Authors: Professor Richard Krasso and Brock Hemsouvanh
 * Date Created: 05/12/2024
 * Description: Root component of the Loan App, managing the main layout and navigation, providing an
 * entry point for the application's functionality.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Title for the application, used in the toolbar to welcome users
  assignment: string = 'Welcome to Loan App';

  constructor() {
    // Initialize application with a welcoming message that introduces the Loan App
    this.assignment = 'Welcome to Loan App: Your Trusted Loan Payment Calculator';
  }
}
