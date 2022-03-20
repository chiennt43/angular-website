import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-challenge-items',
  templateUrl: './challenge-items.component.html',
  styleUrls: ['./challenge-items.component.css']
})
export class ChallengeItemsComponent implements OnInit {

  constructor( private router : Router ) { }

  ngOnInit(): void {
  }

  navigateToChallengeDetail() {
    this.router.navigate(['/challenge-detail', 1]);
  };
}
