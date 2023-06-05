import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public showAvatar: boolean = false;
  public showButtonEnd: boolean = false;
  public favorite: boolean = false;

  @Input() page: string = '';

  constructor(private router: Router) {
    this.onSetAvatarImg();
    this.onSetButtonEnd();
  }

  ngOnInit() {}

  public onSetAvatarImg(): boolean {
    if (this.router.url === '/avatar') {
      return (this.showAvatar = true);
    }

    return (this.showAvatar = false);
  }

  public onSetButtonEnd(): boolean {
    if (this.router.url === '/button') {
      return (this.showButtonEnd = true);
    }

    return (this.showButtonEnd = false);
  }

  public onClickButton(): void {
    this.favorite = !this.favorite;
  }
}
