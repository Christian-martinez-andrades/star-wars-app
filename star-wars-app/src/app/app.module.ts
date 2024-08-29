import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PeopleComponent } from './people/people.component';
import { PlanetsComponent } from './planets/planets.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { PeopleDialogComponent } from './people-dialog/people-dialog.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { GenderIconDirective } from './directives/gender-icon.directive';
import { TranslatePipe } from './pipes/translate.pipe';
import { TranslationService } from './services/translation.service';
import { PlanetsDialogComponent } from './planets-dialog/planets-dialog.component';
import { SwapiImagePipe } from './pipes/swapi-image.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    PlanetsComponent,
    HomeComponent,
    LoadingSpinnerComponent,
    PeopleDialogComponent,
    GenderIconDirective,
    TranslatePipe,
    PlanetsDialogComponent,
    SwapiImagePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
  providers: [TranslationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
