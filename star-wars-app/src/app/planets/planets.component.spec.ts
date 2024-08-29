import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PlanetsComponent } from './planets.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StarWarsService } from '../services/star-wars.service';
import { PlanetsDialogComponent } from '../planets-dialog/planets-dialog.component';
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

describe('PlanetsComponent', () => {
  let starWarsService: StarWarsService;
  let httpMock: HttpTestingController;
  let matDialog: MatDialog;
  let component: PlanetsComponent;
  let fixture: ComponentFixture<PlanetsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PlanetsComponent, PlanetsDialogComponent, SwapiImagePipe,
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
    fixture = TestBed.createComponent(PlanetsComponent);
    component = fixture.componentInstance;
    starWarsService = TestBed.inject(StarWarsService);
    httpMock = TestBed.inject(HttpTestingController);
    matDialog = TestBed.inject(MatDialog);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load data on init', () => {
    const mockResponse = {
      results: [
        { name: 'Tatooine', climate: 'arid', gravity: '1 standard' },
        { name: 'Alderaan', climate: 'temperate', gravity: '10 standard' }
      ]
    };

    spyOn(starWarsService, 'getPlanets').and.returnValue(of(mockResponse));
    component.loadData();
    fixture.detectChanges();

    const tableElement = fixture.nativeElement.querySelector('.planets-table');
    expect(tableElement.textContent).toContain('Tatooine');
    expect(tableElement.textContent).toContain('arid');
    expect(tableElement.textContent).toContain('1 standard');
    expect(tableElement.textContent).toContain('Alderaan');
    expect(tableElement.textContent).toContain('temperate');
    expect(tableElement.textContent).toContain('10 standard');
    expect(tableElement.textContent).not.toContain('Hoth');
  });

  it('should apply filter', () => {
    // Configurar los datos iniciales
    component.dataSource.data = [
      { name: 'Tatooine', climate: 'arid', gravity: '1 standard' },
      { name: 'Alderaan', climate: 'temperate', gravity: '10 standard' }
    ];
    fixture.detectChanges();

    let tableElement = fixture.nativeElement.querySelector('.planets-table');
    expect(tableElement.textContent).toContain('Tatooine');
    expect(tableElement.textContent).toContain('arid');
    expect(tableElement.textContent).toContain('1 standard');
    expect(tableElement.textContent).toContain('Alderaan');
    expect(tableElement.textContent).toContain('temperate');
    expect(tableElement.textContent).toContain('10 standard');

    component.applyFilter({ target: { value: 'Tatooine' } } as unknown as Event);
    fixture.detectChanges();

    tableElement = fixture.nativeElement.querySelector('.planets-table');
    expect(tableElement.textContent).toContain('Tatooine');
    expect(tableElement.textContent).toContain('arid');
    expect(tableElement.textContent).toContain('1 standard');
    expect(tableElement.textContent).not.toContain('Alderaan');
    expect(tableElement.textContent).not.toContain('temperate');
    expect(tableElement.textContent).not.toContain('10 standard');
  });

  it('should open dialog on row click', () => {
    spyOn(matDialog, 'open').and.callThrough();

    const mockPlanet = { name: 'Tatooine' };
    component.openDialog(mockPlanet);

    expect(matDialog.open).toHaveBeenCalledWith(PlanetsDialogComponent, {
      width: '800px',
      height: '800px',
      maxHeight: '800px',
      maxWidth: '800px',
      data: mockPlanet
    });
  });
});
