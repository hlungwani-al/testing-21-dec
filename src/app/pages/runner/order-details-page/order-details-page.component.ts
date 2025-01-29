import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from "../../../components/navbar/navbar.component";
import { LandingPageComponent } from "../../../components/landing-page/landing-page.component";

@Component({
  selector: 'app-order-details-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent, LandingPageComponent],
  templateUrl: './order-details-page.component.html',
  styleUrl: './order-details-page.component.css'
})
export class OrderDetailsPageComponent {

  
  selectedTab: number = 0;

  selectTab(index: number): void {
    this.selectedTab = index;
  }
}
