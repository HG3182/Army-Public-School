import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private apiUrl = 'http://localhost:8000/api/uploads';

  constructor(private http: HttpClient) {}

  uploadFile(formData: FormData): Observable<any> {
    return this.http.post<any>(this.apiUrl, formData, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
  }

  getUploadedFiles(rollNo: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${rollNo}`);
  }
}
