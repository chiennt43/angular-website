import { Observable, of } from 'rxjs';
import { accountList } from '../database';
import { AccountLogin } from '../../models';

function checkExistAccount(account: AccountLogin): boolean {
  const isAccountExist = accountList.some(
    (accountItem) => accountItem.username === account.username
  );
  return isAccountExist;
}

function getAccountToken(account: AccountLogin): string {
  // JWT research
  const accountToken = 'abcd35353.gfgf5.hhhh';
  return accountToken;
}

export function loginApi(account: AccountLogin): Observable<any> {
  const isAccountExist = checkExistAccount(account);

  if (!isAccountExist) {
    const errorContent = {
      status: 400,
      error: {
        message: 'Username or Password is not correct. Please check again',
      },
    };
    return of(errorContent);
  }

  const dataContent = {
    token: getAccountToken(account),
    status: 200,
  };
  return of(dataContent);
}
