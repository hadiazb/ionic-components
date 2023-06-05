import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  public page: string = 'Alert';

  constructor(private alertController: AlertController) {}

  ngOnInit() {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['Cancel'],
    });

    await alert.present();
  }

  async presentAlertMultiButtons() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('hola');
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log('hola');
          },
        },
      ],
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Prompt',
      inputs: [
        {
          name: 'name 1',
          type: 'text',
          placeholder: 'Placeholder 1',
        },
        {
          name: 'name 2',
          type: 'text',
          placeholder: 'Placeholder 2',
          id: 'name-2-id',
          value: 'hello',
        },
        {
          name: 'name 3',
          type: 'text',
          placeholder: 'Placeholder 3',
        },
        {
          name: 'paragraph',
          id: 'paragraph',
          type: 'textarea',
          placeholder: 'Placeholder 3',
        },
        {
          name: 'date',
          id: 'date',
          type: 'date',
          min: '2017-03-01',
          max: '2018-01-12',
        },
        {
          name: 'date2',
          type: 'date',
        },
        {
          name: 'number',
          type: 'number',
          min: -5,
          max: 10,
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (data) => {
            console.log('cancel', data);
          },
        },
        {
          text: 'OK',
          handler: (data) => {
            console.log('Ok', data);
          },
        },
      ],
    });

    await alert.present();
  }
}
