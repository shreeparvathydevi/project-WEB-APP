import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavRecomndComponent } from './fav-recomnd.component';

describe('FavRecomndComponent', () => {
  let component: FavRecomndComponent;
  let fixture: ComponentFixture<FavRecomndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavRecomndComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavRecomndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
