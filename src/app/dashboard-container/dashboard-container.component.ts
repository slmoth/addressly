import { Component } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { AddressListComponent } from "./address-list/address-list.component";
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddFriendModalComponent } from '../modals/add-friend-modal/add-friend-modal.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatDivider, AddressListComponent, MatButtonModule, MatDialogModule],
  templateUrl: './dashboard-container.component.html',
  styleUrl: './dashboard-container.component.scss'
})
export class DashboardContainerComponent {

  constructor(public dialog: MatDialog) {}

  addFriend(): void {
    const dialogRef = this.dialog.open(AddFriendModalComponent, {
      width: '400px',
    });
  }
}
