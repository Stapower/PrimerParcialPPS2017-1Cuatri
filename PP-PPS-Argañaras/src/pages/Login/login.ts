import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import {Global} from '../global/global';

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  user: string;
  pass: string;
  isLogged: boolean;

  SignUp()
  {
    if(this.user.length>0)
    {
      Global.Usuario.user=this.user;
      console.log(Global.Usuario.user);

    this.navCtrl.setRoot(TabsPage)
    .then(data => console.log(data) , error=>console.log(error));
    }
    else
    console.log("Acceso denegado");
  }
/*
  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }*/

}
