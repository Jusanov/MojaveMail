import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
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

  addresses = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: PlatformService, public dataCtrl: DataProvider, private events: Events, private modalCtrl: ModalController) {

    this.widescreen = platform.isWidescreenDevice;
    this.dark = this.dataCtrl.settings.dark;
    this.addresses = this.dataCtrl.settings.accounts;

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
    this.dataCtrl.settings.dark = this.dark;
    this.dataCtrl.saveSettings;
    this.events.publish('updateSettings');
  }

  addAccount() {
    let modal = this.modalCtrl.create('CreateAccountTypePage');
    modal.present();
    modal.onDidDismiss(data => {
      if (data) {
        this.dataCtrl.addAccount(data);
        this.addresses = this.dataCtrl.settings.accounts;
      }
    });
  }

}
