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
    accounts: []
  };

  constructor(private storage: Storage) {
    this.getSettings();
    console.log('DataProvider ready to provide data!');
  }

  public saveSettings() {

    this.storage.set("settings.dark", this.settings.dark);
    this.storage.set("settings.accounts", this.settings.accounts);

  }

  public getSettings() {

    this.settings.dark = this.getSetting("settings.dark");
    this.settings.accounts = this.getSetting("settings.accounts");

  }

  private getSetting(name: String) {

    var value;

    this.storage.get("settings." + name).then((val) => {
      value = val
    });

    return value;

  }

  public addAccount(account: {}) {

    var accounts = this.settings.accounts;

    if (accounts == undefined) accounts = [];

    accounts[accounts.length] = account;

    this.settings.accounts = accounts;

    this.saveSettings();
    
  }

  public removeAccount(nick: String) {

    var accounts = this.settings.accounts;

    for (var i = 0; i < accounts.length; i++) {

      var account = accounts[i];

      if (account.name == nick) {

        accounts[i] = null;

      }

    }

    this.settings.accounts = accounts;

    this.saveSettings();

  }

}
