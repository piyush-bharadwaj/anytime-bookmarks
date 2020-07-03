import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Bookmark } from './bookmark-model';
import { BOOKMARKS } from './mock-bookmarks';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {
  constructor() {
  }
  getBookmarks(): Observable<Bookmark[]> {
    return of(BOOKMARKS);
  }
}
