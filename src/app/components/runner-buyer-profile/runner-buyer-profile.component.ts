import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';



import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-runner-buyer-profile',
  standalone: true,
  imports: [FormsModule,CommonModule, RouterLink],
  templateUrl: './runner-buyer-profile.component.html',
  styleUrl: './runner-buyer-profile.component.css'
})
export class RunnerBuyerProfileComponent {
saveProfile() {
throw new Error('Method not implemented.');
}

  constructor(private router: Router) {}

  navigateToRunnerApplication() {
    this.router.navigate(['/runner-application']);
  }



 

}
