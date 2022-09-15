import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPokemonesComponent } from './listar-pokemones.component';

describe('ListarPokemonesComponent', () => {
  let component: ListarPokemonesComponent;
  let fixture: ComponentFixture<ListarPokemonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPokemonesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarPokemonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
