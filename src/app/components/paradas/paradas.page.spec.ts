import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParadasPage } from './paradas.page';

describe('ParadasPage', () => {
  let component: ParadasPage;
  let fixture: ComponentFixture<ParadasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParadasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParadasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
