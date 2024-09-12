import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Friend } from '../../models/friend.model';
import { FriendsListService } from '../../friends-list.service';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'address-list',
  standalone: true,
  imports: [MatTableModule, MatPaginator, MatSortModule, MatDivider],
  templateUrl: './address-list.component.html',
  styleUrl: './address-list.component.scss'
})
export class AddressListComponent implements OnInit, AfterViewInit {
friends: Friend[] = [];
friendsListService: FriendsListService;

//Table properties
displayedColumns = ['fullName', 'address', 'city', 'state', 'zip']
dataSource = new MatTableDataSource(this.friends);
@ViewChild(MatSort) sort: MatSort = new MatSort;
@ViewChild(MatPaginator) paginator!: MatPaginator;

constructor(friendsListService: FriendsListService) {
  this.friendsListService = friendsListService;
}

  ngOnInit(): void {
    this.friendsListService.getFriends().subscribe(response => {
      this.friends = response;
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
