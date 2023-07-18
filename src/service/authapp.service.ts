import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthappService {

  constructor() { }
 
  auth = (userid: string, password: string) : boolean => {
    var sesVal = (userid === 'Super' && password === '123') ? true : false;

    if(sesVal) {
      sessionStorage.setItem('currentUser', userid)
    }
    return sesVal
  }

  loggedUser = () : string | null => (sessionStorage.getItem('currentUser')) ? sessionStorage.getItem('currentUser') : '';

  isLogged = () : boolean => (sessionStorage.getItem('currentUser')) ? true : false;

  removeUser = () : void => sessionStorage.removeItem('currentUser');

  clearAll = () : void => sessionStorage.clear();
}
