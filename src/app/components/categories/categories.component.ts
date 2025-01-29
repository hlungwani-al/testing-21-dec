import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent {
  categories = [
    'categories/clothes1.png',
    'categories/woman-s-hair0.png',
    'categories/kitchenwares0.png',
    'categories/party-balloons0.png',
    'categories/baby-mobile0.png',
  ];
}
