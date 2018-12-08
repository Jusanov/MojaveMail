import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { PinetreeMail } from './app.component';
import { HomePage } from '../pages/home/home';
import { InboxPage } from '../pages/inbox/inbox';
import { ReadPage } from '../pages/read/read';
import { SettingsPage } from '../pages/settings/settings';

import { PlatformService } from '../services/platform.service';
import { DataProvider } from '../providers/data/data';

@NgModule({
  declarations: [
    PinetreeMail,
    HomePage,
    InboxPage,
    ReadPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(PinetreeMail, {
      mode: "md"
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    PinetreeMail,
    HomePage,
    InboxPage,
    ReadPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PlatformService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}
