import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FileUploadService } from '../../file-upload.service.service';
import { AuthService } from '../../auth.service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  rollNo: string = '';
  selectedFile: File | null = null;
  selectedFileName: string = '';
  uploadError: string = '';

  constructor(
    private router: Router,
    private fileUploadService: FileUploadService,
    private authService: AuthService
  ) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      if (file.type !== 'application/pdf') {
        this.uploadError = 'Only PDF files are allowed';
        this.selectedFile = null;
        this.selectedFileName = '';
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        this.uploadError = 'File size should not exceed 5MB';
        this.selectedFile = null;
        this.selectedFileName = '';
        return;
      }

      this.selectedFile = file;
      this.selectedFileName = file.name;
      this.uploadError = '';
    }
  }

  onSubmit() {
    if (!this.selectedFile) {
      this.uploadError = 'Please select a PDF file';
      return;
    }

    // Create FormData and append rollNo and selectedFile
    const formData = new FormData();
    formData.append('rollNo', this.rollNo);
    formData.append('file', this.selectedFile);

    this.fileUploadService.uploadFile(formData).subscribe({
      next: (response: any) => {
        alert('File uploaded successfully');
        this.rollNo = '';
        this.selectedFile = null;
        this.selectedFileName = '';
      },
      error: (err) => {
        this.uploadError = err.error?.error || 'Upload failed. Please try again.';
      }
    });
  }
}
