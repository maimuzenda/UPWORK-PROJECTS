import { Component, OnInit } from "@angular/core";
import { NavController, ToastController } from "@ionic/angular";

import { SMS } from "@ionic-native/sms/ngx";

declare let window: any;
@Component({
  selector: "app-panic-button",
  templateUrl: "./panic-button.page.html",
  styleUrls: ["./panic-button.page.scss"],
})
export class PanicButtonPage implements OnInit {
  ngOnInit() {}
  constructor(
    public sms: SMS,
    private toastCtrl: ToastController,
    public navCtrl: NavController
  ) {}

  sendTextMessage() {
    this.sms.send("+264814454935", "Hello world!");
  }
}
