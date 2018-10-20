import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlatformService } from '../../services/platform.service';
import { DataProvider } from '../../providers/data/data';

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

  dark: Boolean;
  widescreen: Boolean;

  addresses = [
    {
      name: "Main Email",
      address: "justin@example.com",
      service: "Example Email"
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: PlatformService, public data: DataProvider) {

    this.widescreen = platform.isWidescreenDevice;
    this.dark = this.data.getSetting("dark");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  private stringToBoolean(string: String) {
    if (string == "true") return true;
    return false;
  }

  changeTheme() {
    this.data.saveSetting("dark", this.dark);
  }

}
