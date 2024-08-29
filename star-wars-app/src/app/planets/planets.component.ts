import { Component, OnInit, ViewChild } from '@angular/core';
import { StarWarsService } from '../services/star-wars.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { PlanetsDialogComponent } from '../planets-dialog/planets-dialog.component';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  displayedColumns: string[] = ['name', 'created', 'climate', 'terrain', 'gravity', 'view'];
  dataSource = new MatTableDataSource<any>([]);
  isLoading = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(private starWarsService: StarWarsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.starWarsService.getPlanets().subscribe(data => {
      this.dataSource.data = data.results;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.isLoading = false;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(planet: any): void {
    this.dialog.open(PlanetsDialogComponent, {
      width: '800px',
      height: '800px',
      maxHeight: '800px',
      maxWidth: '800px',
      data: planet
    });
  }
}