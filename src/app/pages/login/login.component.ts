import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthappService } from 'src/service/authapp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userId: string = 'Super';
  password: string = '';

  authenticated: boolean = true;

  errorMessage: string = 'Sorry, your user name or password is wrong!';

  title: string = 'Access & Authentication';
  subtitle: string = 'Please enter you login and password';

constructor(private route: Router, private authBasis: AuthappService) {
}


  getAuth() : void {
    console.log(this.userId);
    
    if(this.authBasis.auth(this.userId, this.password)) {
      
      this.route.navigate(['welcome', this.userId]);
      this.authenticated = true;
    } else {
      this.authenticated = false;
    }

    
  }

}
