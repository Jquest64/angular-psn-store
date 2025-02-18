import { Component } from '@angular/core';
import { MenuBarItemComponent } from "./menu-bar-item/menu-bar-item.component";
import { MenuBarLogoComponent } from "./menu-bar-logo/menu-bar-logo.component";

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
  imports: [MenuBarItemComponent, MenuBarLogoComponent]
})
export class MenuBarComponent { }
