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

    ["Testing Purposes", "Justin <myemail@email.email>", "This is a test message"],
    ["Test #2", "Cheezy <thecheez@email.com>", "This is a test message again"]

  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: PlatformService) {

    this.isWidescreenDevice = platform.isWidescreenDevice;

  }

  ionViewDidLoad() {

    if (this.isWidescreenDevice) document.getElementById("message").style.display = "block";

    console.log('ionViewDidLoad InboxPage');
  }

  displayMessage(email) {

    var subject = email[0];
    var author = email[1];
    var content = email[2];

    if (this.isWidescreenDevice) {

      document.getElementById("subject").style.display = "block";
      document.getElementById("subject").innerText = subject;

      document.getElementById("author").style.display = "block";
      document.getElementById("author").innerText = author;

      document.getElementById("divider").style.display = "block";

      document.getElementById("content").style.display = "block";
      document.getElementById("content").innerText = content;

    } else {
      this.navCtrl.push(ReadPage, {

        subject: subject,
        author: author,
        content: content

      })
    }

  }

}
