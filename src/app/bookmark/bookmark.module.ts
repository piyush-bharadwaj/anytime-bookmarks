import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarkHomeComponent } from './bookmark-home/bookmark-home.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { ManageBookmarkModule } from './manage-bookmark/manage-bookmark.module';

@NgModule({
  declarations: [BookmarkHomeComponent, HeaderComponent],
  imports: [
    CommonModule,
    SharedModule,
    ManageBookmarkModule
  ], exports: [BookmarkHomeComponent]
})
export class BookmarkModule { }
