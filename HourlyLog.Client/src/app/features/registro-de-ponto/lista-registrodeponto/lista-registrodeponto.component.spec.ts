import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRegistrodepontoComponent } from './lista-registrodeponto.component';

describe('ListaRegistrodepontoComponent', () => {
  let component: ListaRegistrodepontoComponent;
  let fixture: ComponentFixture<ListaRegistrodepontoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaRegistrodepontoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaRegistrodepontoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
