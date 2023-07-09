import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { User } from '../user/user.model';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent {
  faUserPlus = faUserPlus;
  faCircleXmark =faCircleXmark;
  userForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      phones: this.formBuilder.array([this.createPhone()]), 
      gender: ['', Validators.required],
    });
  }

  createPhone(): FormGroup {
    return this.formBuilder.group({
      phone: ['', Validators.required],
    });
  }

  get phoneNumbers(): FormArray {
    return this.userForm.get('phones') as FormArray;
  }

  addPhone(): void {
    this.phoneNumbers.push(this.createPhone());
  }


  removePhone(index: number): void {
    const removedValue = this.phoneNumbers.at(index); // Get the value before removing
    console.log('Removed value:', removedValue); 
    this.phoneNumbers.removeAt(index);
  
    if (this.phoneNumbers.length === 0) {
      this.addPhone(); 
    }
  }

  addUser() {
    if (this.userForm.valid) {
      const newUser: User = {
        id: this.userForm.value.id,
        name: this.userForm.value.name,
        email: this.userForm.value.email,
        address: this.userForm.value.address,
        phones: this.userForm.value.phones.map(
          (phoneGroup: { phone: string }) => phoneGroup.phone
        ),
        gender: this.userForm.value.gender,
      };

      console.log('New User:', newUser);

      this.userService.addUser(newUser);

      this.router.navigate(['/user'], { state: { user: newUser } });
    }
  }

  backtoUsers() {
    this.router.navigate(['/user']);
  }
}
