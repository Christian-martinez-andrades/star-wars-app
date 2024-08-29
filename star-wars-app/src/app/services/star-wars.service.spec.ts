import { HttpClientModule } from '@angular/common/http';
import { TestBed, waitForAsync } from '@angular/core/testing';

import { StarWarsService } from './star-wars.service';

describe('StarWarsService', () => {
  let service: StarWarsService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(StarWarsService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
