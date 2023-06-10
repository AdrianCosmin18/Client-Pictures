import { Component, OnInit } from '@angular/core';
import {ImageService} from "../../image.service";

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  images: any[] = [];

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.getImages();
  }

  getImages() {
    this.imageService.getAllImages().subscribe(
      response => {
        this.images = response;
      },
      error => {
        console.error('Error retrieving images:', error);
      }
    );
  }
  getImageUrl(imageId: number): string {
    return `http://localhost:8080/api/images/${imageId}`;
  }


}
