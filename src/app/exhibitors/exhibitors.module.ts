import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExhibitorsPage } from './exhibitors.page';

const routes: Routes = [
  {
    path: '',
    component: ExhibitorsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ExhibitorsPage]
})
export class ExhibitorsPageModule {}
