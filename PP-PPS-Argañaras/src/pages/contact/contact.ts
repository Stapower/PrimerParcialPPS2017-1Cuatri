import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Global} from '../global/global';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {
  }
    
    user=Global.Usuario.user;

}
