import { Component, OnInit } from '@angular/core';
import { MenuItem } from './MenuItem';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menuItem: MenuItem[] = [
    { id: 1, name: "House" },
    { id: 2, name: "Land" },
    { id: 3, name: "Shop" },
 
  ]

}
