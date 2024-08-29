import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import es from '../../assets/locale/es';
import en from '../../assets/locale/en';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLanguage = new BehaviorSubject<string>(this.getStoredLanguage());

  translations: any = { es, en };

  constructor() { }

  public getStoredLanguage(): string {
    const storedLanguage = localStorage.getItem('language');
    return storedLanguage ? storedLanguage : 'en';
  }

  getTranslation(key: string) {
    if (!key) {
      return;
    }

    const keys = key.split('.');
    let language = this.currentLanguage.getValue();

    if (!language) {
      language = 'es';
    }

    let text = this.translations[language];
    try {
      keys.forEach(k => {
        text = text[k];
      });

      return text.toString();

    } catch (e) {
      return key;
    }
  }

  setLanguage(language: string) {
    if (language != localStorage.getItem('language')) {
      localStorage.setItem('language', language);
      window.location.reload();
      this.currentLanguage.next(language);
    }
  }
}
