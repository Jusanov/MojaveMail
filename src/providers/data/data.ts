import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage';
import { ValueTransformer } from '@angular/compiler/src/util';

/*
  Generated class for the DataProvider.

  Used for getting data from local storage.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  constructor(public storage: NativeStorage) {
    console.log('DataProvider ready to provide data!');
  }

  throwFetchingError(error, origin: String) {
    this.storage.setItem(origin + "", {});
    console.error('Error fetching value! :: ', error)
  }

  throwSavingError(error) {
    console.error('Error saving value! :: ', error)
  }

  /*getFirstTime() {

    this.storage.getItem("general").then(

      general => {

      },

      error => {
        return true;
      }

    );

  }

  saveFirstTime() {
    this.storage.setItem("settings", {});
    this.storage.setItem("accounts", {});
  }*/

  saveSetting(setting: String, value) {

    this.storage.getItem("settings").then(

      settings => {

        settings[setting + ""] = value;

        this.storage.setItem("settings", settings).then(

          () => console.debug('Successfully saved settings!'),

          error => this.throwSavingError(error)

        );

      },

      error => {
        this.throwFetchingError(error, "settings");
      }

    );
    this.storage.setItem("setting-" + setting.toLowerCase, value);

  }

  getSetting(setting: String) {

    var object;

    this.storage.getItem("settings").then(

      settings => {
        object = settings[setting + ""];
      },

      error => {
        this.throwFetchingError(error, "settings");
      }

    );

    return object;

  }

  getAccounts() {

    this.storage.getItem("accounts").then(

      accounts => {
        return accounts;
      },

      error => {
        this.throwFetchingError(error, "accounts");
        return;
      }

    )

  }

  addAccount(service: String, username: String, password: String, name: String, imap: String, imapPort, smtp: String, smtpPort) {

    this.storage.getItem("accounts").then(

      accounts => {

        var account = {
          service: service,
          username: username,
          password: password,
          name: name,
          imap: imap,
          imapPort: imapPort,
          smtp: smtp,
          smtpPort: smtpPort
        };

        accounts.add(account);
        this.storage.setItem('accounts', accounts).then(

          () => console.debug('Successfully saved new account data!'),

          error => this.throwSavingError(error)

        );

      }, 

      error => {
        this.throwFetchingError(error, "accounts");
        return;
      }

    );

  }

}
