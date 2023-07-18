import { Component } from '@angular/core';
import { AuthappService } from 'src/service/authapp.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public authBasis: AuthappService) {

  }

}
