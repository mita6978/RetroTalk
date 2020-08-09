import { Injectable } from '@angular/core';

import { Socket } from 'ngx-socket-io';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ECharacters } from './models/characters.enum';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  selectedCharacter: ECharacters;

    // tslint:disable-next-line: variable-name
    private _state$ = new BehaviorSubject<IState>({
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
      }});

    state$ = this._state$.asObservable();

    constructor(private socket: Socket) { }

    initAppState() {
      const oldState = this._state$.getValue();

      this.socket.on('appState', (state: IState) => {
        this._state$.next({ ...oldState, ...state });
      });
    }

    toggleCharacterTaken(characterState: ESetCharacterState) {
      this.socket.emit('toggleCharacterTaken', characterState);
    }

    phoneCall(phoneCall: IPhoneCall) {
      this.socket.emit('phoneCall', phoneCall);
    }

    resetAppState(): void {
      this.socket.emit('resetState', true);
    }

    setSelectedCharacter(character: ECharacters): void {
      this.selectedCharacter = character;
    }

}

export interface IState {
  isArthurTaken: boolean;
  isArthurReady: boolean;
  isStarmantaken: boolean;
  isStarmanReady: boolean;
  phoneCall: IPhoneCall;
}

export interface IPhoneCall {
  arthurToken: string | null;
  starmanToken: string | null;
  arthurCallingStarman: boolean;
  starmanCallingArthur: boolean;
  phoneCallActive: boolean;
  roomsid: string | null;
  roomUniqueName: string | null;
}

export enum ESetCharacterState {
  ARTHUR_TAKEN = 'ARTHUR_TAKEN',
  ARTHUR_AVAILABLE = 'ARTHUR_AVAILABLE',
  ARTHUR_READY = 'ARTHUR_READY',
  ARTHUR_NOT_READY = 'ARTHUR_NOT_READY',
  STARMAN_TAKEN = 'STARMAN_TAKEN',
  STARMAN_AVAILABLE = 'STARMAN_AVAILABLE',
  STARMAN_READY = 'STARMAN_READY',
  STARMAN_NOT_READY = 'STARMAN_NOT_READY'
}
