import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SinginPage } from './singin.page';

describe('SinginPage', () => {
  let component: SinginPage;
  let fixture: ComponentFixture<SinginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SinginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
