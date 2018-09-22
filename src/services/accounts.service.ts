import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage';

@Injectable()
export class AccountServiceService {

    constructor(private storage: NativeStorage) {
    }

    public getAccounts() {

        this.storage.getItem('accounts').then(

            accounts => {
                return accounts;
            },

            error => {

                console.error('Error fetching accounts! :: ', error)
                return;

            }

        )

    }

    public addAccount(service: String, username: String, password: String, name: String, imap: String, imapPort, smtp: String, smtpPort) {

        this.storage.getItem('accounts').then(

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

                    error => console.error('Error storing an account! :: ', error)

                );

            },

            error => {

                console.error('Error adding account! :: ', error)

            }

        );

    }

}
