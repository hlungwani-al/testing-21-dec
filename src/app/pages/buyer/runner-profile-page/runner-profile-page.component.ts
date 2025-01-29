import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CategoriesComponent } from '../../../components/categories/categories.component';

@Component({
  selector: 'app-runner-profile-page',
  standalone: true,
  imports: [RouterLink, CommonModule, NgFor,CategoriesComponent,RouterOutlet],
  templateUrl: './runner-profile-page.component.html',
  styleUrls: ['./runner-profile-page.component.css']
})
export class RunnerProfilePageComponent {
  runner = "images/profile.jpg";
  shirt = "images/shopping.webp";
  blender = "images/blender.webp";
  decorative = "images/Decorative.webp";
  bread = "images/bread.jpeg";
  onlineIcon = "images/online.png";
  chatButton ="images/chat.png"
  


  products = [
    { title: 'T-shirt', price: 120, image: 'products/shirt.webp' },
    { title: 'Blender', price: 180, image: 'products/blender.webp' },
    { title: 'Decorative Vase', price: 300, image: 'products/vase.webp' },
    { title: 'Balloon Valentine', price: 100, image: 'products/baloons.webp' },
    { title: 'Summer dress', price: 180, image: 'products/summer dress.webp' },
    { title: 'Bread bin', price: 300, image: 'products/storage.webp' }
  ];
}
