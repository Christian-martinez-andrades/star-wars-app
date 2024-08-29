import { TestBed } from '@angular/core/testing';
import { TranslatePipe } from './translate.pipe';
import { TranslationService } from '../services/translation.service';

class MockTranslationService {
  getTranslation(key: string): string {
    return key;
  }
}

describe('TranslatePipe', () => {
  let pipe: TranslatePipe;
  let translationService: TranslationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TranslatePipe,
        { provide: TranslationService, useClass: MockTranslationService }
      ]
    });

    pipe = TestBed.inject(TranslatePipe);
    translationService = TestBed.inject(TranslationService);
  });

  it('should return translated value', () => {
    const key = 'hello';
    const translatedValue = 'hola';
    spyOn(translationService, 'getTranslation').and.returnValue(translatedValue);

    const result = pipe.transform(key);

    expect(result).toBe(translatedValue);
    expect(translationService.getTranslation).toHaveBeenCalledWith(key);
  });
});
