import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { StarWarsService } from '../services/star-wars.service'; // Asegúrate de ajustar la ruta según corresponda
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { PeopleDialogComponent } from '../people-dialog/people-dialog.component';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  displayedColumns: string[] = ['name', 'created', 'birth_year', 'mass', 'gender', 'view'];
  dataSource = new MatTableDataSource<any>([]);
  isLoading = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(private starWarsService: StarWarsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.starWarsService.getPeople().subscribe(data => {
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

  openDialog(person: any): void {
    this.dialog.open(PeopleDialogComponent, {
      width: '800px',
      height: '800px',
      maxHeight: '800px',
      maxWidth: '800px',
      data: person
    });
  }
}

