import { Component, OnInit, HostListener } from '@angular/core';
import { AppStateService, ESetCharacterState } from './shared/services/app-state.service';
import { ECharacters } from './shared/services/models/characters.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.shiftKey === true && event.code === 'Enter') {
      this.appStateService.resetAppState();
      this.router.navigate(['/']);
    }
  }

  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event): void {
    if (this.appStateService.selectedCharacter === ECharacters.ARTHUR) {
      this.appStateService.toggleCharacterTaken(ESetCharacterState.ARTHUR_AVAILABLE);
    }

    if (this.appStateService.selectedCharacter === ECharacters.STARMAN) {
      this.appStateService.toggleCharacterTaken(ESetCharacterState.STARMAN_AVAILABLE);
    }
  }

  constructor(private appStateService: AppStateService, private router: Router) {
    const refresh = sessionStorage.getItem('refresh');
    if (refresh) {
      this.router.navigate(['/home/about']);
      sessionStorage.removeItem('refresh');
    }
  }

  ngOnInit(): void {
    this.appStateService.initAppState();
    this.appStateService.state$.subscribe((state) => {
    });
  }
}
