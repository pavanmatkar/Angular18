import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { finalize, interval, scan, Subscription, takeWhile } from 'rxjs';

@Component({
  selector: 'app-mock-upload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mock-upload.component.html',
  styleUrl: './mock-upload.component.css',
})
export class MockUploadComponent implements OnDestroy {
  file?: File;
  progress = 0; // 0..100
  uploading = false;
  private sub?: Subscription;

  // when true: show the progress area (after first selection)
  get showProgress() {
    return this.file !== undefined;
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;
    this.file = input.files[0];
    this.startMockUpload();
  }

  // programmatic trigger (optional ui convenience)
  triggerFileInput() {
    const el = document.createElement('input');
    el.type = 'file';
    el.onchange = (e) => this.onFileSelected(e as unknown as Event);
    el.click();
  }

  startMockUpload() {
    if (!this.file) return;
    // reset
    this.progress = 0;
    this.uploading = true;
    this.sub?.unsubscribe();

    // Simulate upload progress with small, random steps until 100.
    // interval runs every 250ms; each tick increases progress by 5..19%
    this.sub = interval(250)
      .pipe(
        scan((acc) => {
          // step = random integer between 5 and 19 inclusive
          const step = Math.floor(Math.random() * 15) + 5;
          const next = acc + step;
          return next > 100 ? 100 : next;
        }, 0),
        takeWhile((val) => val < 100, true),
        finalize(() => {
          // finalize called when observable completes or unsubscribed
          this.uploading = false;
        })
      )
      .subscribe((val) => {
        // update visual progress
        this.progress = val;

        // if we reached 100, leave it visible as "complete" for a short moment
        if (val === 100) {
          // keep uploading=false already set by finalize; we could show a tiny delay if desired
        }
      });
  }

  cancelUpload() {
    this.sub?.unsubscribe();
    this.uploading = false;
    this.progress = 0;
    // keep file set so user can retry or choose another file
  }

  reset() {
    this.file = undefined;
    this.progress = 0;
    this.uploading = false;
    this.sub?.unsubscribe();
  }

  formatBytes(bytes: number) {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    const n = bytes / Math.pow(k, i);
    // one decimal for > KB
    return i === 0 ? `${bytes} ${sizes[i]}` : `${n.toFixed(1)} ${sizes[i]}`;
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
