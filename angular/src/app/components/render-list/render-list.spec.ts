import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderList } from './render-list';

describe('RenderList', () => {
  let component: RenderList;
  let fixture: ComponentFixture<RenderList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RenderList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenderList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
