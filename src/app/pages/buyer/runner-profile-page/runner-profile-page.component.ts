import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-runner-profile-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './runner-profile-page.component.html',
  styleUrl: './runner-profile-page.component.css'
})
export class RunnerProfilePageComponent {
runner = "images/profile.jpeg";
shirt ="images/shopping.webp"
blender ="images/blender.webp";
decorative ="images/Decorative.webp";
bread ="images/bread.jpeg";
onlineIcon ="images/online.png"
categories =["categories/clothes1.png","categories/woman-s-hair0.png","categories/kitchenwares0.png",
  "categories/wparty-balloons0.png","categories/baby-mobile0.png"]
}
