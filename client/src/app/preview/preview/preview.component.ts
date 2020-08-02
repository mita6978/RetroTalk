import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements AfterViewInit {

  @ViewChild('video') private video: ElementRef;

  constructor(private router: Router) { }

  ngAfterViewInit(): void {
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true  })
        .then((stream) => {
          if ('srcObject' in this.video.nativeElement) {
            this.video.nativeElement.srcObject = stream;
          } else {
            this.video.nativeElement.src = window.URL.createObjectURL(stream);
          }
          this.video.nativeElement.play();
        })
        .catch(() => {
          console.log('Camera Failed To Load');
        });
    }
  }

  startChatting(): void {
    this.router.navigate(['/home']);
  }

}
