import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PlanetsDialogComponent } from './planets-dialog.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StarWarsService } from '../services/star-wars.service';
import { PeopleDialogComponent } from '../people-dialog/people-dialog.component';
import { of } from 'rxjs';
import { SwapiImagePipe } from '../pipes/swapi-image.pipe';
import { TranslatePipe } from '../pipes/translate.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TranslationService } from '../services/translation.service';


describe('PlanetsDialogComponent', () => {
  let component: PlanetsDialogComponent;
  let fixture: ComponentFixture<PlanetsDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PlanetsDialogComponent, PeopleDialogComponent, SwapiImagePipe,
        TranslatePipe],
      imports: [
        HttpClientTestingModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatDialogModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatTableModule,
        MatPaginatorModule,
        MatButtonModule,
        MatIconModule,
        MatSortModule,
        MatDialogModule,
        MatCardModule,
        MatTooltipModule
      ],
      providers: [
        StarWarsService,
        MatDialog,
        TranslationService,
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    })
      .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
