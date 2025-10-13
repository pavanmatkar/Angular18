import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { of, delay } from 'rxjs';

// mock user data
const mockUser = {
  id: 101,
  name: 'John Doe',
  email: 'john.doe@example.com',
  bio: 'Angular developer passionate about UI and performance.'
};

//Functional Resolver (Angular 18+ style)
export const userResolver: ResolveFn<any> = () => {
  console.log('Loading user data...');
  // Simulate an API delay (2 seconds)
  return of(mockUser).pipe(delay(2000));
};
