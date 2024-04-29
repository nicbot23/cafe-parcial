import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CafeService } from '../../Services/service.service';
import { ListarCafesComponent } from './listar-cafes.component';

describe('ListarCafesComponent', () => {
  let component: ListarCafesComponent;
  let fixture: ComponentFixture<ListarCafesComponent>;
  let cafeServiceSpy: jasmine.SpyObj<CafeService>;

  beforeEach(async () => {

    const spy = jasmine.createSpyObj('CafeService', ['getCafes']);

    await TestBed.configureTestingModule({
      declarations: [ListarCafesComponent],
      providers: [ { provide: CafeService, useValue: spy } ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarCafesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    cafeServiceSpy = TestBed.inject(CafeService) as jasmine.SpyObj<CafeService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate the number of origin cafes', () => {
    const cafes: Array<any> = [
      { id: 1, nombre: 'Café 1', tipo: 'Café de Origen', region: 'Región 1' },
      { id: 2, nombre: 'Café 2', tipo: 'Blend', region: 'Región 2' },
      { id: 3, nombre: 'Café 3', tipo: 'Café de Origen', region: 'Región 3' }
    ];

    cafeServiceSpy.getCafes.and.returnValue(of(cafes));

    fixture.detectChanges();

    const numOriginCafes = component.calcularCafesOrigen();
    expect(numOriginCafes).toBe(2); // Two origin cafes in the test array
  });

  it('should call getCafes on initialization', () => {
    spyOn(component, 'getCafes');
    component.ngOnInit();
    expect(component.getCafes).toHaveBeenCalled();
  });
});
