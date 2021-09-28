import { Component } from '@angular/core';
import { Details } from './details';
import {ApiServiceService} from './service/api-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nutritionist';
  constructor(private user:ApiServiceService){ }
  listcomments: Details[];
  ngOnInit(){
    // this.user.getdata().subscribe(data=>{
    //   this.food
    // })
    // this.user.getdata().subscribe(data=>{
    //   this.listcomments = data;
    //   console.log(data);
    // });
  }
}
