import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the DataProvider.

  Used for getting data from local storage.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  public settings = {
    dark: false,
  };

  constructor(private storage: Storage) {
    this.getSettings();
    console.log('DataProvider ready to provide data!');
  }

  saveSettings() {

    this.storage.set("settings.dark", this.settings.dark);

  }

  getSettings() {

    this.settings.dark = this.getSetting("settings.dark");

  }

  private getSetting(name: String) {

    var value;

    this.storage.get("settings." + name).then((val) => {
      value = val
    });

    return value;

  }

  // Old Code - use as reference until deleted

/*  throwFetchingError(error) {
    console.error('Error fetching value! :: ', error)
  }

  throwSavingError(error) {
    console.error('Error saving value! :: ', error)
  }

  saveSetting(setting: String, value) {

    this.storage.set("settings-" + setting, value);

  }

  getSetting(setting: String) {

    var object;

    this.storage.get("settings-" + setting).then(

      (val) => {
        object = val;
      },

      error => {
        this.throwFetchingError(error);
      }

    );

    return object;

  }

  getAccounts() {

    this.storage.get("accounts").then(

      accounts => {
        return accounts;
      },

      error => {
        this.throwFetchingError(error);
        return;
      }

    )

  }

  addAccount(service: String, username: String, password: String, name: String, imap: String, imapPort, smtp: String, smtpPort) {

    this.storage.get("accounts").then(

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
        this.storage.set('accounts', accounts).then(

          () => console.debug('Successfully saved new account data!'),

          error => this.throwSavingError(error)

        );

      }, 

      error => {
        this.throwFetchingError(error);
        return;
      }

    );

  }*/

}
