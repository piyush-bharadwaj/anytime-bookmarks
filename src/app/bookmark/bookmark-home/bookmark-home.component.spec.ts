import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkHomeComponent } from './bookmark-home.component';

describe('BookmarkHomeComponent', () => {
  let component: BookmarkHomeComponent;
  let fixture: ComponentFixture<BookmarkHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarkHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
