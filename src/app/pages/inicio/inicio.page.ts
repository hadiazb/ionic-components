import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  public page: string = 'Components';
  public components: ComponentList[] = [
    {
      icon: 'american-football',
      name: 'Action Sheet',
      redirectTo: '/action-sheet',
    },
    {
      icon: 'alert-circle-outline',
      name: 'Alert',
      redirectTo: '/alert',
    },
    {
      icon: 'beaker-outline',
      name: 'Avatar',
      redirectTo: '/avatar',
    },
    {
      icon: 'radio-button-off-outline',
      name: 'Buttons',
      redirectTo: '/button',
    },
    {
      icon: 'card-outline',
      name: 'Cards',
      redirectTo: '/card',
    },
    {
      icon: 'checkmark-outline',
      name: 'Checkbox',
      redirectTo: '/check',
    },
    {
      icon: 'calendar-outline',
      name: 'DateTime',
      redirectTo: '/date-time',
    },
  ];

  constructor() {}

  ngOnInit() {}
}

export interface ComponentList {
  icon: string;
  name: string;
  redirectTo: string;
}
