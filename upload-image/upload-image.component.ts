import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent {
  selectedFile: File | undefined;

  constructor(private http: HttpClient) {}

  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFile = inputElement.files[0];
    }
  }

  upload() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      this.http.post<number>('http://localhost:8080/api/images/upload', formData).subscribe(
        (response) => {
          console.log('Image uploaded successfully. Image ID: ' + response);
        },
        (error) => {
          console.error('Error uploading image:', error);
        }
      );
    }
  }

}
