import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-planets-dialog',
  templateUrl: './planets-dialog.component.html',
  styleUrls: ['./planets-dialog.component.scss']
})
export class PlanetsDialogComponent {
  constructor(public dialogRef: MatDialogRef<PlanetsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onClose(): void {
    this.dialogRef.close();
  }
}
