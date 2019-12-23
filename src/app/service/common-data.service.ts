import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonDataService {

  currentContact: {
    id: number, firstName: '', lastName: '', mobileNumber: '', notes:''
  };
  action = 0;
  contactList = [
    { id: 1, firstName: 'abc', lastName: 'pqr', mobileNumber: '9876512345', notes:'lorem' },
    { id: 2, firstName: 'abc', lastName: 'pqr', mobileNumber: '9999912345', notes:'lorem'},
    { id: 3, firstName: 'abc', lastName: 'pqr', mobileNumber: '7777712345', notes:'lorem'},
    { id: 4, firstName: 'abc', lastName: 'pqr', mobileNumber: '8888812345', notes:'lorem' },
    { id: 5, firstName: 'abc', lastName: 'pqr', mobileNumber: '8787812345', notes:'lorem' }
  ];

  contactListSub$ = new BehaviorSubject<any>(this.contactList);
  getContactObs$ = this.contactListSub$.asObservable();
  constructor() { }
}
