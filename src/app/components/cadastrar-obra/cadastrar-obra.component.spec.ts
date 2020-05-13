import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarObraComponent } from './cadastrar-obra.component';

describe('CadastrarObraComponent', () => {
  let component: CadastrarObraComponent;
  let fixture: ComponentFixture<CadastrarObraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarObraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarObraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
