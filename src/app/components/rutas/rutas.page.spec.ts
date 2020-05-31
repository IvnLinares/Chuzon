import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RutasPage } from './rutas.page';

describe('RutasPage', () => {
  let component: RutasPage;
  let fixture: ComponentFixture<RutasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RutasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
