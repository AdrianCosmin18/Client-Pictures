import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-download-image',
  templateUrl: './download-image.component.html',
  styleUrls: ['./download-image.component.css']
})
export class DownloadImageComponent {
  constructor(private http: HttpClient) {}

  download() {
    this.http.get('http://localhost:8080/api/images/1', { responseType: 'blob' }).subscribe(
      (response) => {
        const blob = new Blob([response], { type: 'image/jpeg' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'image.jpg';
        a.click();
      },
      (error) => {
        console.error('Error downloading image:', error);
      }
    );
  }
}
