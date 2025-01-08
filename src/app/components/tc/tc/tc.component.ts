import { Component } from '@angular/core';
import { FileUploadService } from '../../../file-upload.service.service';

@Component({
  selector: 'app-tc',
  templateUrl: './tc.component.html',
  styleUrls: ['./tc.component.css']
})
export class TcComponent {
  rollNo: string = '';
  uploadedFiles: any[] = [];
  error: string = '';

  constructor(
    private fileUploadService: FileUploadService
  ) {}

  onSubmit() {
    this.error = '';
    
    if (!this.rollNo) {
      this.error = 'Please enter a roll number';
      return;
    }

    this.fileUploadService.getUploadedFiles(this.rollNo).subscribe({
      next: (response: any) => {
        if (response && response.files) {
          this.uploadedFiles = response.files;
        } else {
          this.error = 'No files found for this roll number';
        }
      },
      error: (err) => {
        console.error('Error fetching files:', err);
        this.error = 'Failed to fetch files. Please try again later.';
      }
    });
  }
}