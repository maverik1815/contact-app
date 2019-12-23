import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonDataService } from '../service/common-data.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.page.html',
  styleUrls: ['./contact-details.page.scss'],
})
export class ContactDetailsPage implements OnInit {

  contactForm: FormGroup;
  isSubmit = false;
  isEdit = false;
  constructor(
    private fb: FormBuilder,
    private commonData: CommonDataService,
    private Modal: ModalController) { }

  ngOnInit() {
    this.isEdit = this.commonData.action === 0;
    this.createForm();
    if( this.isEdit ) {
      this.setValue();
    }
  }
  setValue() {
    const current = this.commonData.currentContact;
    this.contactForm.setValue({
      firstName: current.firstName,
      lastName: current.lastName,
      mobileNumber: current.mobileNumber,
      notes: current.notes
    } );
  }
  createForm() {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^[7-9]{1}[0-9]{9}/)]],
      notes:['', Validators.required]
    });
  }
  get control() {
    return this.contactForm.controls;
  }
  saveContact() {
    this.isSubmit = true;
    if (this.contactForm.invalid) {
      return;
    }
    const contactList = this.commonData.contactListSub$.getValue();
    const contact = this.contactForm.value;
    contact['id'] = contactList.length + 1;
    contactList.push(contact);
    this.commonData.contactListSub$.next(contactList);
    alert('contact added successfully !');
    this.Modal.dismiss();
  }
  updateContact() {
    this.isSubmit = true;
    if (this.contactForm.invalid) {
      return;
    }
    const contactList = this.commonData.contactListSub$.getValue();
    const contact = this.contactForm.value;
    for (const i of contactList) {
      if ( i.id === this.commonData.currentContact.id ) {
        i.firstName = contact.firstName;
        i.lastName = contact.lastName;
        i.mobileNumber = contact.mobileNumber;
      }
    }
    this.commonData.contactListSub$.next(contactList);
    alert('contact Updated successfully !');
    this.Modal.dismiss();
  }

}
