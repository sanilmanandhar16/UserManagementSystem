import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { User } from '../user/user.model';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  userForm: FormGroup;
  userId!: number;
  user!: User;
  faEdit = faEdit;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      // + converts id string into number
      this.userId = +params['id'];
      // const user = this.userService.getUsers().find((user) => user.id === this.userId);
      const user = this.userService
        .getUsers()
        .find((user) => user.id === this.userId);
      if (user) {
        //if user found then it is assigned to ::
        //this.user
        this.user = user;
        this.userForm.patchValue({
          name: this.user.name,
          email: this.user.email,
          address: this.user.address,
          phones: this.user.phones,
          gender: this.user.gender,
        });
      } else {
        // if user not found then go back to user page
        this.router.navigate(['/user']);
      }
    });
  }

  updateUser() {
    if (this.userForm.valid) {
      const updatedUser: User = {
        // id: this.userForm.value.id,
        id: this.userId,
        name: this.userForm.value.name,
        email: this.userForm.value.email,
        address: this.userForm.value.address,
        phones: this.userForm.value.phones,
        gender: this.userForm.value.gender,
      };

      this.userService.updateUser(updatedUser);
      this.router.navigate(['/user']);
    }
  }

  cancel() {
    this.router.navigate(['/user']);
  }
}
