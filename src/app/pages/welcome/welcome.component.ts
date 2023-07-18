import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemoDataService } from 'src/service/data/demo-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent  implements OnInit {

  user: string = '';
  title: string = 'Welcome in MyShop!';
  subtitle: string = 'Check offers of the day';
  

  constructor(private route: ActivatedRoute, private demoService: DemoDataService) {}

  ngOnInit(): void {
    this.user = this.route.snapshot.params['userId']
  }

  demo: string = "";

  getDemo = () : void => {
    this.demoService.getDemo().subscribe(
      res => this.handleResponse(res)
    );
  }

  handleResponse(res: Object) {
    this.demo = res.toString();
  }

}
