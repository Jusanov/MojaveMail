import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import { NodeMailer } from 'nodemailer';
import { DataProvider } from '../data/data';

/*
  Generated class for the MailProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MailProvider {

  smtp: {};

  constructor(public http: HttpClient, private nodemailer: NodeMailer, public dataCtrl: DataProvider, public events: Events) {
    console.log('Hello MailProvider Provider');
    this.loadMailService();

    events.subscribe('updateSettings', () => {
      this.smtp = {};
      this.loadMailService();
    });

  }

  loadMailService() {

    let accounts = this.dataCtrl.settings.accounts;

    for (var i = 0; i < accounts.length; i++) {

      var account = accounts[i];

      // TODO IMAP recievers

      // SMTP
      var secure = false;

      if (account.smtpPort == 465) secure = true;

      if (account.service != 'imap') {

        this.smtp[account.name] = this.nodemailer.createTransport({
          service: account.service,
          auth: {
            user: account.username,
            pass: account.password
          }
        });

      } else {

        this.smtp[account.name] = this.nodemailer.createTransport({
          port: account.smtpPort,
          host: account.smtp,
          secure: secure,
          auth: {
            user: account.username,
            pass: account.password
          }
        });

      }

    }

  }

}
