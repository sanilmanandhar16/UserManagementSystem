import { Injectable } from '@angular/core';
import { User } from './components/user/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [
    {
      id: 1,
      name: 'Sanil Manandar',
      email: 'sanil@gmail.com',
      address: 'Kirtipur',
      phones: ['987452475'],
      gender:'male'
    },
    {
      id: 2,
      name: 'Riya Bazgain',
      email: 'riya@gmail.com',
      address: 'Bhaktapur',
      phones: ['987452475'],
      gender:'male'
    },
    {
      id: 3,
      name: 'Pritha Shrestha',
      email: 'prith@gmail.com',
      address: 'Maitidevi',
      phones: ['987452475'],
      gender:'male'
    },
    {
      id: 4,
      name: 'Ram Shrestha',
      email: 'ramu@gmail.com',
      address: 'lalitpur',
      phones: ['987452475'],
           gender:'male'
    },
    {
      id: 1,
      name: 'Sanil Manandar',
      email: 'sanil@gmail.com',
      address: 'Kirtipur',
      phones: ['987452475'],
      gender:'male'
    },
    {
      id: 2,
      name: 'Riya Bazgain',
      email: 'riya@gmail.com',
      address: 'Bhaktapur',
      phones: ['987452475'],
      gender:'male'
    },
    {
      id: 3,
      name: 'Pritha Shrestha',
      email: 'prith@gmail.com',
      address: 'Maitidevi',
      phones: ['987452475'],
      gender:'male'
    },
    {
      id: 4,
      name: 'Ram Shrestha',
      email: 'ramu@gmail.com',
      address: 'lalitpur',
      phones: ['987452475'],
           gender:'male'
    },
    {
      id: 1,
      name: 'Sanil Manandar',
      email: 'sanil@gmail.com',
      address: 'Kirtipur',
      phones: ['987452475'],
      gender:'male'
    },
    {
      id: 3,
      name: 'Pritha Shrestha',
      email: 'prith@gmail.com',
      address: 'Maitidevi',
      phones: ['987452475'],
      gender:'male'
    },
    {
      id: 4,
      name: 'Ram Shrestha',
      email: 'ramu@gmail.com',
      address: 'lalitpur',
      phones: ['987452475'],
           gender:'male'
    },
    {
      id: 1,
      name: 'Sanil Manandar',
      email: 'sanil@gmail.com',
      address: 'Kirtipur',
      phones: ['987452475'],
      gender:'male'
    },
  
    {
      id: 3,
      name: 'Pritha Shrestha',
      email: 'prith@gmail.com',
      address: 'Maitidevi',
      phones: ['987452475'],
      gender:'male'
    },
    {
      id: 4,
      name: 'Ram Shrestha',
      email: 'ramu@gmail.com',
      address: 'lalitpur',
      phones: ['987452475'],
           gender:'male'
    },
    {
      id: 1,
      name: 'Sanil Manandar',
      email: 'sanil@gmail.com',
      address: 'Kirtipur',
      phones: ['987452475'],
      gender:'male'
    },
    {
      id: 3,
      name: 'Pritha Shrestha',
      email: 'prith@gmail.com',
      address: 'Maitidevi',
      phones: ['987452475'],
      gender:'male'
    },
    {
      id: 4,
      name: 'Ram Shrestha',
      email: 'ramu@gmail.com',
      address: 'lalitpur',
      phones: ['987452475'],
           gender:'male'
    },
    {
      id: 1,
      name: 'Sanil Manandar',
      email: 'sanil@gmail.com',
      address: 'Kirtipur',
      phones: ['987452475'],
      gender:'male'
    },
    {
      id: 3,
      name: 'Pritha Shrestha',
      email: 'prith@gmail.com',
      address: 'Maitidevi',
      phones: ['987452475'],
      gender:'male'
    },
    {
      id: 4,
      name: 'Ram Shrestha',
      email: 'ramu@gmail.com',
      address: 'lalitpur',
      phones: ['987452475'],
           gender:'male'
    },
    {
      id: 1,
      name: 'Sanil Manandar',
      email: 'sanil@gmail.com',
      address: 'Kirtipur',
      phones: ['987452475'],
      gender:'male'
    },
    {
      id: 3,
      name: 'Pritha Shrestha',
      email: 'prith@gmail.com',
      address: 'Maitidevi',
      phones: ['987452475'],
      gender:'male'
    },
    {
      id: 4,
      name: 'Ram Shrestha',
      email: 'ramu@gmail.com',
      address: 'lalitpur',
      phones: ['987452475'],
           gender:'male'
    },
    {
      id: 1,
      name: 'Sanil Manandar',
      email: 'sanil@gmail.com',
      address: 'Kirtipur',
      phones: ['987452475'],
      gender:'male'
    },
    {
      id: 3,
      name: 'Pritha Shrestha',
      email: 'prith@gmail.com',
      address: 'Maitidevi',
      phones: ['987452475'],
      gender:'male'
    },
    {
      id: 4,
      name: 'Ram Shrestha',
      email: 'ramu@gmail.com',
      address: 'lalitpur',
      phones: ['987452475'],
           gender:'male'
    },
    {
      id: 1,
      name: 'Sanil Manandar',
      email: 'sanil@gmail.com',
      address: 'Kirtipur',
      phones: ['987452475'],
      gender:'male'
    },
    {
      id: 3,
      name: 'Pritha Shrestha',
      email: 'prith@gmail.com',
      address: 'Maitidevi',
      phones: ['987452475'],
      gender:'male'
    },
    {
      id: 4,
      name: 'Ram Shrestha',
      email: 'ramu@gmail.com',
      address: 'lalitpur',
      phones: ['987452475'],
           gender:'male'
    },
    {
      id: 1,
      name: 'Sanil Manandar',
      email: 'sanil@gmail.com',
      address: 'Kirtipur',
      phones: ['987452475'],
      gender:'male'
    }, {
      id: 3,
      name: 'Pritha Shrestha',
      email: 'prith@gmail.com',
      address: 'Maitidevi',
      phones: ['987452475'],
      gender:'male'
    },
    {
      id: 4,
      name: 'Ram Shrestha',
      email: 'ramu@gmail.com',
      address: 'lalitpur',
      phones: ['987452475'],
           gender:'male'
    },
    {
      id: 1,
      name: 'Sanil Manandar',
      email: 'sanil@gmail.com',
      address: 'Kirtipur',
      phones: ['987452475'],
      gender:'male'
    },
    {
      id: 3,
      name: 'Pritha Shrestha',
      email: 'prith@gmail.com',
      address: 'Maitidevi',
      phones: ['987452475'],
      gender:'male'
    },
    {
      id: 4,
      name: 'Ram Shrestha',
      email: 'ramu@gmail.com',
      address: 'lalitpur',
      phones: ['987452475'],
           gender:'male'
    },
    {
      id: 1,
      name: 'Sanil Manandar',
      email: 'sanil@gmail.com',
      address: 'Kirtipur',
      phones: ['987452475'],
      gender:'male'
    },
    {
      id: 3,
      name: 'Pritha Shrestha',
      email: 'prith@gmail.com',
      address: 'Maitidevi',
      phones: ['987452475'],
      gender:'male'
    },
    {
      id: 4,
      name: 'Ram Shrestha',
      email: 'ramu@gmail.com',
      address: 'lalitpur',
      phones: ['987452475'],
           gender:'male'
    },
    {
      id: 1,
      name: 'Sanil Manandar',
      email: 'sanil@gmail.com',
      address: 'Kirtipur',
      phones: ['987452475'],
      gender:'male'
    },
    {
      id: 3,
      name: 'Pritha Shrestha',
      email: 'prith@gmail.com',
      address: 'Maitidevi',
      phones: ['987452475'],
      gender:'male'
    },
    {
      id: 4,
      name: 'Ram Shrestha',
      email: 'ramu@gmail.com',
      address: 'lalitpur',
      phones: ['987452475'],
           gender:'male'
    },
    {
      id: 1,
      name: 'Sanil Manandar',
      email: 'sanil@gmail.com',
      address: 'Kirtipur',
      phones: ['987452475'],
      gender:'male'
    },
    {
      id: 3,
      name: 'Pritha Shrestha',
      email: 'prith@gmail.com',
      address: 'Maitidevi',
      phones: ['987452475'],
      gender:'male'
    },
    {
      id: 4,
      name: 'Ram Shrestha',
      email: 'ramu@gmail.com',
      address: 'lalitpur',
      phones: ['987452475'],
           gender:'male'
    },
    {
      id: 1,
      name: 'Sanil Manandar',
      email: 'sanil@gmail.com',
      address: 'Kirtipur',
      phones: ['987452475'],
      gender:'male'
    },
    {
      id: 3,
      name: 'Pritha Shrestha',
      email: 'prith@gmail.com',
      address: 'Maitidevi',
      phones: ['987452475'],
      gender:'male'
    },
    {
      id: 4,
      name: 'Ram Shrestha',
      email: 'ramu@gmail.com',
      address: 'lalitpur',
      phones: ['987452475'],
           gender:'male'
    },
    {
      id: 1,
      name: 'Sanil Manandar',
      email: 'sanil@gmail.com',
      address: 'Kirtipur',
      phones: ['987452475'],
      gender:'male'
    },
  
  
  
  ];

  constructor() {}
  getUsers(): User[] {
    return this.users;
  }
  addUser(user: User) {
    user.id = Math.random() + this.users.length + 1;
    this.users.push(user);
  }
  updateUser(updatedUser: User): void {
    const index = this.users.findIndex((user) => user.id === updatedUser.id);
    if (index !== -1) {
      this.users[index] = updatedUser;
    }
  }
  deleteUser(userId: number): void {
    // const index = this.users.findIndex(user => userId === user.id);
    const index = this.users.findIndex((user) => user.id === userId);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
    this.getUsers();
  }
}
