import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AttendeebookmarksPage } from './attendeebookmarks.page';

const routes: Routes = [
  {
    path: '',
    component: AttendeebookmarksPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AttendeebookmarksPage]
})
export class AttendeebookmarksPageModule {}
