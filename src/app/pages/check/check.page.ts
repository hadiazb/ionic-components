import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {
  public page: string = 'Checkbox';
  public types = [
    {
      name: 'primary',
      selected: false,
    },
    {
      name: 'secondary',
      selected: false,
    },
    {
      name: 'tertiary',
      selected: true,
    },
    {
      name: 'success',
      selected: false,
    },
    {
      name: 'danger',
      selected: true,
    },
  ];

  constructor() {}

  ngOnInit() {}

  public onClick(item: any) {
    console.log(item);
  }

  public onViewData() {
    console.log(this.types);
  }
}
