import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WandDetailsComponent } from './wand-details.component';

describe('WandDetailsComponent', () => {
  let component: WandDetailsComponent;
  let fixture: ComponentFixture<WandDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WandDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WandDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
