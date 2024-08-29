import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild(MatSort) matSort!: MatSort;

  constructor(private starWarsService: StarWarsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(active: string = '', direction: string = '') {
    this.isLoading = true;
    this.starWarsService.getPeople(active, direction).subscribe(data => {
      this.dataSource.data = data.results ? data.results : data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matSort;

      this.dataSource.filterPredicate = (data: any, filter: string) => {
        return data.name.toLowerCase().includes(filter);
      }
      this.isLoading = false;
    });
  }

  onSortChange(sort: any) {
    const active = sort.direction == '' ? '' : sort.active;
    const direction = sort.direction;
    this.loadData(active, direction);
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

