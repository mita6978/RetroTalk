import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { AppStateService, IState, ESetCharacterState } from 'src/app/shared/services/app-state.service';
import { ECharacters } from 'src/app/shared/services/models/characters.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  state: IState = {
    isArthurTaken: false,
    isArthurReady: false,
    isStarmantaken: false,
    isStarmanReady: false,
    phoneCall: {
        arthurToken: null,
        starmanToken: null,
        arthurCallingStarman: false,
        starmanCallingArthur: false,
        phoneCallActive: false,
        roomsid: null,
        roomUniqueName: null
    }};

  constructor(private router: Router, private appStateService: AppStateService) {
  }

  ngOnInit(): void {
    this.appStateService.state$.subscribe((state: IState) => {
      this.state = {...this.state, ...state};
    });

    if (this.appStateService.selectedCharacter === ECharacters.ARTHUR) {
      this.appStateService.toggleCharacterTaken(ESetCharacterState.ARTHUR_AVAILABLE);
    }

    if (this.appStateService.selectedCharacter === ECharacters.STARMAN) {
      this.appStateService.toggleCharacterTaken(ESetCharacterState.STARMAN_AVAILABLE);
    }
  }

  takeArthur(): void {
    this.appStateService.toggleCharacterTaken(ESetCharacterState.ARTHUR_TAKEN);
    this.appStateService.setSelectedCharacter(ECharacters.ARTHUR);
    this.router.navigate(['/preview']);
  }

  takeStarman(): void {
    this.appStateService.toggleCharacterTaken(ESetCharacterState.STARMAN_TAKEN);
    this.appStateService.setSelectedCharacter(ECharacters.STARMAN);
    this.router.navigate(['/preview']);
  }

  get starmanTaken(): boolean {
    return this.state.isStarmantaken;
  }

  get starmanBorderTaken(): string {
    return this.starmanTaken ? '#ff3603' : '';
  }

  get arthurTaken(): boolean {
    return this.state.isArthurTaken;
  }

  get arthurBorderTaken(): string {
    return this.arthurTaken ? '#ff3603' : '';
  }

}
