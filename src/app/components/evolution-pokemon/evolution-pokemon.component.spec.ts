import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolutionPokemonComponent } from './evolution-pokemon.component';

describe('EvolutionPokemonComponent', () => {
  let component: EvolutionPokemonComponent;
  let fixture: ComponentFixture<EvolutionPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EvolutionPokemonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolutionPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
