import { Component } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [HomeComponent, MenuBarComponent, RouterModule]
})
export class AppComponent { }