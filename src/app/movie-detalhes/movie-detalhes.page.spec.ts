import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MovieDetalhesPage } from './movie-detalhes.page';

describe('MovieDetalhesPage', () => {
  let component: MovieDetalhesPage;
  let fixture: ComponentFixture<MovieDetalhesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetalhesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MovieDetalhesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
