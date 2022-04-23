import { Injectable } from '@angular/core';
import { FetchApiService } from './fetch-api.service';
import { ApiUrl } from '../common/apiUrl';
import { AccountLogin } from '../models';
import { NavigationService } from './navigation.service';
//apply temporary
import { loginApi } from '../backend/api';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private navigationService: NavigationService) {}

  login(account: AccountLogin): void {
    loginApi(account).subscribe((data) => {
      console.log('data ', data);
      if (data.status == 200) {
        setTimeout(() => {
          this.navigationService.navigationToPage('/channel');
        }, 1000);
      } else {
        //Notification error
      }
    });
  }

  isAuthenticated(): boolean {
    if (this.getAccessToken()) {
      return true;
    }
    return false;
  }

  getAccessToken(): string | null {
    // check sessionStorage support or not
    return sessionStorage.getItem('access_token');
  }

  // getAccessTokenExpiration
}
