import { Injectable } from '@angular/core';

import { IAuthenticationState, IFacebookProfileData } from './models/authentication-state.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationStateService {
  state: IAuthenticationState = {
    facebookProfileData: {
      id: '',
      first_name: '',
      last_name: '',
      middle_name: '',
      name: '',
      name_format: '',
      picture: '',
      short_name: ''
    },
    token: ''
  };


  setFacebookProfileDataState(facebookProfileData: IFacebookProfileData): void {
    this.state = { ...this.state, facebookProfileData};
  }

  setAuthenticationToken(token: string): void {
    this.state = { ...this.state, token};
  }

  getFacebookProfileData(): IFacebookProfileData {
    return this.state.facebookProfileData;
  }

  getAuthenticationToken(): string {
    return this.state.token;
  }
}
