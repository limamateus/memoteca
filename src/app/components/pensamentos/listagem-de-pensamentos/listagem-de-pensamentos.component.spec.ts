import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemDePensamentosComponent } from './listagem-de-pensamentos.component';

describe('ListagemDePensamentosComponent', () => {
  let component: ListagemDePensamentosComponent;
  let fixture: ComponentFixture<ListagemDePensamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemDePensamentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemDePensamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
