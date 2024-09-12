import { Component } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { AddressListComponent } from "./address-list/address-list.component";
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatDivider, AddressListComponent, MatButtonModule],
  templateUrl: './dashboard-container.component.html',
  styleUrl: './dashboard-container.component.scss'
})
export class DashboardContainerComponent {

  addFriend(): void {
    alert('add friend');
  }
}
