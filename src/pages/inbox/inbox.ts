import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReadPage } from '../read/read';
import { PlatformService } from '../../services/platform.service';

/**
 * Generated class for the InboxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html',
})
export class InboxPage {

  isWidescreenDevice: Boolean;

  // Testing Emails
  inbox = [
    {
      subject: "Testing Purposes", 
      senderName: "Justin Schaaf", 
      senderAddress: "justin@example.com",
      content: "This is a test message"
    },
    {
      subject: "Test #2", 
      senderName: "Braydon", 
      senderAddress: "cheezy@example.com",
      content: "This is a test message again"
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: PlatformService) {

    this.isWidescreenDevice = platform.isWidescreenDevice;

  }

  ionViewDidLoad() {

    if (this.isWidescreenDevice) document.getElementById("message").style.display = "block";

    console.log('ionViewDidLoad InboxPage');
  }

  displayMessage(email) {

    var subject = email.subject;
    var senderName = email.senderName;
    var senderAddress = email.senderAddress;
    var content = email.content;

    if (this.isWidescreenDevice) {

      document.getElementById("subject").style.display = "block";
      document.getElementById("subject").innerText = subject;

      document.getElementById("sender").style.display = "block";
      document.getElementById("sender").innerText = senderName + " (" + senderAddress + ")";

      document.getElementById("divider").style.display = "block";

      document.getElementById("content").style.display = "block";
      document.getElementById("content").innerHTML = content;

    } else {
      this.navCtrl.push(ReadPage, {

        subject: subject,
        senderName: senderName,
        senderAddress: senderAddress,
        content: content

      })
    }

  }

}
