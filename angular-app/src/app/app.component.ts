import { Component, OnInit } from '@angular/core';
import { AuthService } from './core';
export class Customer {
  public id: number;
  public name: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  customers: Customer[] = [{ id: 1, name: 'john' }];

  isAuthenticated = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.isAuthenticated().subscribe(isAuthenticated => this.isAuthenticated = isAuthenticated);
  }
}
