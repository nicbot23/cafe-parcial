import { Component } from '@angular/core';
import { Cafe } from '../../Models/cafe';
import { CafeService } from '../../Services/service.service';

@Component({
  selector: 'app-listar-cafes',
  templateUrl: './listar-cafes.component.html',
  styleUrl: './listar-cafes.component.css'
})
export class ListarCafesComponent {

  cafes: Array<Cafe> = [];

  constructor(private cafeService: CafeService) { }

  getCafes(): void {
    this.cafeService.getCafes().subscribe((data) => {
      this.cafes = data;
    });
  }

  calcularCafesOrigen(): number {
    return this.cafes.filter(cafe => cafe.tipo === 'Café de Origen').length;
  }

  calcularCafesBlend(): number {
    return this.cafes.filter(cafe => cafe.tipo === 'Blend').length;
  }

  ngOnInit(): void {
    this.getCafes();
  }

}
