import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboradoresListaComponent } from './colaboradores-lista.component';

describe('ColaboradoresListaComponent', () => {
  let component: ColaboradoresListaComponent;
  let fixture: ComponentFixture<ColaboradoresListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColaboradoresListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColaboradoresListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
