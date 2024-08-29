import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PeopleComponent } from './people.component';
import { StarWarsService } from '../services/star-wars.service';
import { PeopleDialogComponent } from '../people-dialog/people-dialog.component';
import { of } from 'rxjs';
import { SwapiImagePipe } from '../pipes/swapi-image.pipe';
import { TranslatePipe } from '../pipes/translate.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, By } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TranslationService } from '../services/translation.service';

describe('PeopleComponent', () => {
  let component: PeopleComponent;
  let fixture: ComponentFixture<PeopleComponent>;
  let starWarsService: StarWarsService;
  let httpMock: HttpTestingController;
  let matDialog: MatDialog;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PeopleComponent, PeopleDialogComponent, SwapiImagePipe,
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
    fixture = TestBed.createComponent(PeopleComponent);
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
        { name: 'Luke Skywalker', created: '2020-01-01', birth_year: '19BBY', mass: '77', gender: 'male' },
        { name: 'Darth Vader', created: '2020-01-02', birth_year: '41.9BBY', mass: '136', gender: 'male' }
      ]
    };

    spyOn(starWarsService, 'getPeople').and.returnValue(of(mockResponse));
    component.loadData();
    fixture.detectChanges();

    const tableElement = fixture.nativeElement.querySelector('.people-table');
    expect(tableElement.textContent).toContain('Darth Vader');
    expect(tableElement.textContent).toContain('Luke Skywalker');
  });

  it('should apply filter', () => {
    // Configurar los datos iniciales
    component.dataSource.data = [
      { name: 'Luke Skywalker', created: '2020-01-01', birth_year: '19BBY', mass: '77', gender: 'male' },
      { name: 'Darth Vader', created: '2020-01-02', birth_year: '41.9BBY', mass: '136', gender: 'male' }
    ];
    fixture.detectChanges();

    let tableElement = fixture.nativeElement.querySelector('.people-table');
    expect(tableElement.textContent).toContain('Darth Vader');
    expect(tableElement.textContent).toContain('Luke Skywalker');

    component.applyFilter({ target: { value: 'Darth' } } as unknown as Event);
    fixture.detectChanges();

    tableElement = fixture.nativeElement.querySelector('.people-table');
    expect(tableElement.textContent).toContain('Darth Vader');
    expect(tableElement.textContent).not.toContain('Luke Skywalker');
  });

  it('should open dialog on row click', () => {
    spyOn(matDialog, 'open').and.callThrough();

    const mockPerson = { name: 'Luke Skywalker' };
    component.openDialog(mockPerson);

    expect(matDialog.open).toHaveBeenCalledWith(PeopleDialogComponent, {
      width: '800px',
      height: '800px',
      maxHeight: '800px',
      maxWidth: '800px',
      data: mockPerson
    });
  });
});
