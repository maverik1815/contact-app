import { Component, OnInit } from '@angular/core';
import { CommonDataService } from '../service/common-data.service';
import { Observable } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { ContactDetailsPage } from '../contact-details/contact-details.page';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.page.html',
  styleUrls: ['./contact-list.page.scss'],
})
export class ContactListPage implements OnInit {

  contactList: Observable<any>;
  constructor(
    private commonData: CommonDataService,
    private modal: ModalController
  ) { }

  ngOnInit() {
    this.contactList = this.commonData.getContactObs$;
  }
  addNewContact() {
    this.commonData.action = 1;
    this.openModal();
  }
  async openModal() {
    const modal = await this.modal.create({
      component: ContactDetailsPage
    });
    return await modal.present();
  }
  updateContact(contact) {

    this.commonData.action = 0;
    this.commonData.currentContact = contact;
    this.openModal();
  }
  delete(contact) {
    const contactList = this.commonData.contactListSub$.getValue();
    contactList.splice(contactList.indexOf(contact), 1);
    this.commonData.contactListSub$.next(contactList);
    alert('deleted successfully !');
  }

}
