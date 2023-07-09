import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { User } from '../user/user.model';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

import {
  faSearch,
  faUserPlus,
  faUserPen,
  faUserSlash,
  faCircleDown,
} from '@fortawesome/free-solid-svg-icons';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  searchText: any;
  faUserPlus = faUserPlus;
  faSearch = faSearch;
  faUserPen = faUserPen;
  faUserSlash = faUserSlash;
  faCircleDown = faCircleDown;

  constructor(
    private router: Router,
    private userService: UserService,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    this.filteredUsers = this.users;
  }

  downloadImage() {
    const tableElement =
      this.elementRef.nativeElement.querySelector('#usersTable');

    html2canvas(tableElement).then((canvas) => {
      const image = canvas.toDataURL('image/png');

      const link = document.createElement('a');
      link.href = image;
      link.download = 'Users_ScreenShot.png';
      link.click();
    });
  }
  downloadImagePdf() {
    const tableElement = document.getElementById(
      'usersTable'
    ) as HTMLTableElement;
    const pdf = new jsPDF('p', 'pt', 'a4');

    pdf.setFontSize(16);
    pdf.text('User Table', 40, 40);
    autoTable(pdf, { html: tableElement });

    pdf.save('UsersTable.pdf');
  }

  createUser() {
    this.router.navigate(['create-user']);
  }

  receiveUser(user: User) {
    this.users.push(user);
    console.log('received users', this.users);
  }

  filterUsers() {
    this.filteredUsers = this.users.filter((user) => {
      return (
        user.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        user.email.toLowerCase().includes(this.searchText.toLowerCase())
      );
    });
  }

  editUser(user: User): void {
    this.router.navigate(['edit-user', user.id]);
  }

  deleteUser(user: User): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(user.id);
      this.users = this.userService.getUsers();
      this.filterUsers();
    }
  }
}
