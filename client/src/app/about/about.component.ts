import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit {

  @ViewChild('video') private video: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    this.video.nativeElement.play();
  }

}
