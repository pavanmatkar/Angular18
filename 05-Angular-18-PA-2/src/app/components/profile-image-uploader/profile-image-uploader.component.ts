import { Component } from '@angular/core';
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-profile-image-uploader',
  standalone: true,
  imports: [NgIf],
  templateUrl: './profile-image-uploader.component.html',
  styleUrl: './profile-image-uploader.component.css'
})
export class ProfileImageUploaderComponent {
  selectedFile: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;

  // Triggered when user selects an image
  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files[0]) {
      this.selectedFile = fileInput.files[0];

      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  // Optional: Stimulate upload or clear selection
  onUpload(): void {
    if (this.selectedFile){
      console.log('Uploading:', this.selectedFile.name);
      alert('Image uploaded successfully (simulation).');
    }
  }

  onRemove(): void {
    this.selectedFile = null;
    this.imagePreview = null;
  }
}
