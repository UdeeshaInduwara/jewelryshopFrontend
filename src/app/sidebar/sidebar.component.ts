import {Component, OnInit} from '@angular/core';

declare const $: any;

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  {path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: ''},
  {path: '/makingOrder', title: 'Jewelry Making Order', icon: 'create_new_folder', class: ''},
  {path: '/gem', title: 'Gem', icon: 'star', class: ''},
  {path: '/metal', title: 'Metal', icon: 'kitchen', class: ''},
  {path: '/makers', title: 'Jewelry Makers', icon: 'person', class: ''}
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
}
