import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHistoryListItemComponent } from './search-history-list-item.component';

describe('SearchHistoryListItemComponent', () => {
  let component: SearchHistoryListItemComponent;
  let fixture: ComponentFixture<SearchHistoryListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchHistoryListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchHistoryListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
