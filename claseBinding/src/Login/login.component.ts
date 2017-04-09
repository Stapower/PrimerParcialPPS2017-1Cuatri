import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }

}

export class Login {
user = {};
constructor(public navCtrl: NavController){}
Login(){
          console.log(this.user);
       }
}