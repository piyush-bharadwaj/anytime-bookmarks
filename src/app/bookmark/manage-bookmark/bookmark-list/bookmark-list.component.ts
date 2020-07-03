import { Component, OnInit } from '@angular/core';
import { BookmarkService } from './../bookmark-service';
import { Bookmark } from '../bookmark-model';

@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.css']
})
export class BookmarkListComponent implements OnInit {
  bookmarkColumnTitles: string[] = ['title', 'url'];
  bookmarkList: Bookmark[] | null;

  constructor(private bookmarkService: BookmarkService) { }

  ngOnInit() {
    if (!this.bookmarkList) {
      this.bookmarkService.getBookmarks().subscribe(bookmarks => {
        this.bookmarkList = bookmarks;
      })
    }
  }
}
