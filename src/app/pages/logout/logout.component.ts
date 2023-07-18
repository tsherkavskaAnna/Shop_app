import { Component,OnInit } from '@angular/core';
import { AuthappService } from 'src/service/authapp.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authBasis: AuthappService) {}

ngOnInit() :void {
  this.authBasis.clearAll();
}

}
