import { Component } from '@angular/core';
import { TranslatePipe } from './pipes/translate.pipe';
import { TranslationService } from './services/translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'star-wars-app';

  currentLanguage = localStorage.getItem('language');
  constructor(private translationService: TranslationService) { }

  ngOnInit() {

  }

  switchLanguage(event: any) {
    const selectElement = event.target as HTMLSelectElement;
    const language = selectElement.value;
    this.translationService.setLanguage(language);
  }
}
