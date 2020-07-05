import { IFacebookProfileData } from './models/authentication-state.model';
import { AuthenticationStateService } from './authentication-state.service';

describe('AuthenticationStateService', () => {
  const service: AuthenticationStateService = new AuthenticationStateService();
  const originalState = JSON.parse(JSON.stringify(service.state));

  beforeEach(() => {
      service.state = {...originalState};
    });

  describe('setFacebookProfileDataState()', () => {
    it('should set the Facebook profile data state', () => {
      const facebookProfileData: IFacebookProfileData = {
        id: '12344',
        first_name: 'Jon',
        last_name: 'Jimmy',
        middle_name: 'Doe',
        name: 'Jon Jimmy Doe',
        name_format: 'some format',
        picture: 'https://facebook.com/myprofilepicture.jpg',
        short_name: 'Jon Doe'
      };

      service.setFacebookProfileDataState(facebookProfileData);

      expect(service.state).toEqual({...service.state, facebookProfileData});
    });
  });

  describe('setAuthenticationToken()', () => {
    it('should set the authentication token', () => {
      const token = 'abc123';

      service.setAuthenticationToken(token);

      expect(service.state).toEqual({...service.state, token});
    });
  });

  describe('getFacebookProfileData()', () => {
    it('should get the Facebook profile data state', () => {
      const facebookProfileData: IFacebookProfileData = {
        id: '12344',
        first_name: 'Jon',
        last_name: 'Jimmy',
        middle_name: 'Doe',
        name: 'Jon Jimmy Doe',
        name_format: 'some format',
        picture: 'https://facebook.com/myprofilepicture.jpg',
        short_name: 'Jon Doe'
      };

      service.setFacebookProfileDataState(facebookProfileData);

      expect(service.getFacebookProfileData()).toEqual(facebookProfileData);
    });
  });

  describe('getAuthenticationToken()', () => {
    it('should get the authentication token', () => {
      const token = 'abc123';

      service.setAuthenticationToken(token);

      expect(service.getAuthenticationToken()).toEqual(token);
    });
  });

});
