import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ReadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-read',
  templateUrl: 'read.html',
})
export class ReadPage {

  subject: string;
  author: string;
  content: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.subject = navParams.get('subject');
    this.author = navParams.get('author');
    this.content = navParams.get('content');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReadPage');
  }

}
