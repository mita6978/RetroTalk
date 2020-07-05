export interface IAuthenticationState {
  facebookProfileData: IFacebookProfileData;
  token: string;
}

export interface IFacebookProfileData {
  id: string;
  first_name: string;
  last_name: string;
  middle_name: string;
  name: string;
  name_format: string;
  picture: string;
  short_name: string;
}
