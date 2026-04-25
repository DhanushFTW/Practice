import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { Route, Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
   
 isLoggedIn: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.isLoggedIn = !!localStorage.getItem('currentUser');
  }

  goToTasks() {
    this.router.navigate(['/tasks']);
  }
}
