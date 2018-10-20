import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { InboxPage } from '../pages/inbox/inbox';
import { SettingsPage } from '../pages/settings/settings';

import { DataProvider } from '../providers/data/data';

@Component({
  templateUrl: 'app.html'
})
export class PinetreeMail {
  rootPage:any = InboxPage;
  inboxPage: any = InboxPage;
  settingsPage: any = SettingsPage;
  public theme: string;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public data: DataProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.theme = data.getSetting("dark") ? ".theme-dark" : ".theme-light";

  }
}

