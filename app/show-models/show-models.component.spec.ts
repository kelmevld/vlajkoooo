import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowModelsComponent } from './show-models.component';

describe('ShowModelsComponent', () => {
  let component: ShowModelsComponent;
  let fixture: ComponentFixture<ShowModelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowModelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
