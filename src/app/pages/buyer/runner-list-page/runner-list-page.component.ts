import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-runner-list-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './runner-list-page.component.html',
  styleUrl: './runner-list-page.component.css'
})
export class RunnerListPageComponent {
  runnerImage = "/images/images.jpeg";
}
