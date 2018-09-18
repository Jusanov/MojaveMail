import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlatformService } from '../../services/platform.service';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  isWidescreenDevice: Boolean;

  addresses = [
    {
      name: "Email",
      address: "justin@email.email",
      service: "Email"
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: PlatformService) {

    this.isWidescreenDevice = platform.isWidescreenDevice;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}
