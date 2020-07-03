import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module'
import { BookmarkListComponent } from './bookmark-list/bookmark-list.component';



@NgModule({
  declarations: [BookmarkListComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [BookmarkListComponent]
})
export class ManageBookmarkModule { }
