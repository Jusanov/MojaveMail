import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';

/**
 * Generated class for the CreateAccountTypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-account-type',
  templateUrl: 'create-account-type.html',
})
export class CreateAccountTypePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateAccountTypePage');
  }

  createAccount(service: String) {
    
    let modal = this.modalCtrl.create('CreateAccountPage', {service: service});
    modal.present();
    modal.onDidDismiss(data => {
      if (data) {
        this.viewCtrl.dismiss(data);
      }
    });

  }

}
