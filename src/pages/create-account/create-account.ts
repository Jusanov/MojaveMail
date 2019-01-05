import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the CreateAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-account',
  templateUrl: 'create-account.html',
})
export class CreateAccountPage {

  service: String;
  public imap = false;

  private account = {
    service: "",
    username: "",
    password: "",
    name: "",
    imap: "",
    imapPort: "",
    smtp: "",
    smtpPort: ""
  };


  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.account.service = this.navParams.get('service');
    if (this.account.service == "imap") this.imap = true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateAccountPage');
  }

  submit() {

    /*if (this.imap) { // Special stuff for IMAP, but nothing is necessary currently

    }*/

    this.viewCtrl.dismiss(this.account);

  }

}
