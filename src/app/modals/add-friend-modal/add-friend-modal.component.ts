import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatDivider } from '@angular/material/divider';
import { MatFormField, MatLabel } from '@angular/material/form-field';

@Component({
  selector: 'add-friend-modal',
  standalone: true,
  imports: [MatDialogModule, MatFormField, MatLabel, MatDivider],
  templateUrl: './add-friend-modal.component.html',
  styleUrl: './add-friend-modal.component.scss'
})
export class AddFriendModalComponent {


  constructor(public dialogRef: MatDialogRef<AddFriendModalComponent>) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    // Handle saving logic here, possibly passing back the friend data
    this.dialogRef.close({ saved: true });
  }
  
}
