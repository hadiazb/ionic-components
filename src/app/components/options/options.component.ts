import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss'],
})
export class OptionsComponent {
  public options: Option[] = [
    {
      title: 'Alert',
      path: '/alert',
    },
    {
      title: 'Action Sheet',
      path: '/action-sheet',
    },
  ];
}

export interface Option {
  title: string;
  path: string;
}
