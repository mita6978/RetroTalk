import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ECharacters } from '../shared/services/models/characters.enum';
import { ESetCharacterState, AppStateService } from '../shared/services/app-state.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit {

  @ViewChild('video') private video: ElementRef;

  constructor(private appStateService: AppStateService) { }

  ngAfterViewInit(): void {
    this.video.nativeElement.play();

    const character = sessionStorage.getItem('character');
    if (character === ECharacters.ARTHUR) {
      this.appStateService.setSelectedCharacter(ECharacters.ARTHUR);
      this.appStateService.toggleCharacterTaken(ESetCharacterState.ARTHUR_TAKEN);
    }

    if (character === ECharacters.STARMAN) {
      this.appStateService.setSelectedCharacter(ECharacters.STARMAN);
      this.appStateService.toggleCharacterTaken(ESetCharacterState.STARMAN_TAKEN);
    }
  }

}
