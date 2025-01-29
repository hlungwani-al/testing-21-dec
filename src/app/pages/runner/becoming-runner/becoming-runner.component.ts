import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-becoming-runner',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './becoming-runner.component.html',
  styleUrl: './becoming-runner.component.css'
})
export class BecomingRunnerComponent {
  runnerDetails = {
    idNumber: '',
    certifiedID: null as File | null,
    profilePicture: null as File | null,
    subscriptionType: 'Monthly',
    amount: 'R49,00'
  };
  applyAsRunner() {
    console.log('Runner Details:', this.runnerDetails);
    alert('Runner Application Submitted Successfully!');
  }
  handleFileInput(event: any, type: 'id' | 'profile') {
    if (event.target.files.length > 0) {
      if (type === 'id') {
        this.runnerDetails.certifiedID = event.target.files[0];
      } else {
        this.runnerDetails.profilePicture = event.target.files[0];
      }
    }
  }

}
