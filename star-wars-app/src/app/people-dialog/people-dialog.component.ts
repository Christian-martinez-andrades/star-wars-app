import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-people-dialog',
  templateUrl: './people-dialog.component.html',
  styleUrls: ['./people-dialog.component.scss']
})
export class PeopleDialogComponent {

  constructor(public dialogRef: MatDialogRef<PeopleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onClose(): void {
    this.dialogRef.close();
  }
}
