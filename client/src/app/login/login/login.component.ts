import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  selectCharacter(name: string): void {
    this.router.navigate(['/preview']);
  }

  get starmanTaken(): boolean {
    return false;
  }

  get starmanBorderTaken(): string {
    return this.starmanTaken ? '#ff3603' : '';
  }

  get arthurTaken(): boolean {
    return true;
  }

  get arthurBorderTaken(): string {
    return this.arthurTaken ? '#ff3603' : '';
  }

}
