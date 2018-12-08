import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlatformService } from '../../services/platform.service';
import { DataProvider } from '../../providers/data/data';
import { Events } from 'ionic-angular';

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

  dark: boolean;
  widescreen: boolean;

  addresses = [
    {
      name: "Main Email",
      address: "justin@example.com",
      service: "Example Email"
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: PlatformService, public data: DataProvider, private events: Events) {

    this.widescreen = platform.isWidescreenDevice;
    this.dark = this.data.settings.dark;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  private stringToBoolean(string: String) {
    if (string == "true") return true;
    return false;
  }

  changeTheme() {
    console.log("Changing the theme! " + this.dark);
    this.data.settings.dark = this.dark;
    this.data.saveSettings;
    this.events.publish('settings:updateTheme');
  }

}
