import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactListPageRoutingModule } from './contact-list-routing.module';

import { ContactListPage } from './contact-list.page';
import { ContactDetailsPage } from '../contact-details/contact-details.page';
import { ContactDetailsPageModule } from '../contact-details/contact-details.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactListPageRoutingModule,
    ContactDetailsPageModule
  ],
  declarations: [ContactListPage],
})
export class ContactListPageModule {}
