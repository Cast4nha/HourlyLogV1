import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarRegistrodepontoComponent } from './adicionar-registrodeponto.component';

describe('AdicionarRegistrodepontoComponent', () => {
  let component: AdicionarRegistrodepontoComponent;
  let fixture: ComponentFixture<AdicionarRegistrodepontoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdicionarRegistrodepontoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdicionarRegistrodepontoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
