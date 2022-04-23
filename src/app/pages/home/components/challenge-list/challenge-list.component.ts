import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../../services';

@Component({
  selector: 'app-challenge-list',
  templateUrl: './challenge-list.component.html',
  styleUrls: ['./challenge-list.component.css'],
})
export class ChallengeListComponent implements OnInit {
  isLogin = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.isLogin = this.authService.isAuthenticated();
  }

  gotoChallengeDetail(): void {
    this.router.navigate(['/challenge-detail']);
  }

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }
  navigateToChallengeDetail(): void {
    this.router.navigate(['/challenge-detail', 1]);
  }
}
