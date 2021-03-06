import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { NpsService } from '../../services/nps.service';
import { Nps } from '../../core/nps.model';
import { Observable } from 'rxjs/internal/Observable';
import { ExcelService } from '../../services/excel.service';

@Component({
  selector: 'app-nps',
  templateUrl: './nps.component.html',
  styleUrls: ['./nps.component.scss']
})
export class NpsComponent implements OnInit {
  displayedColumns: string[] = [
    'data',
    'rate1',
    'rate2',
    'rate3',
    'rate4',
    'rate5',

    'nps',
    'promoter',
    'detractor',
    'reserva',
    'abertura',
    'finalizar',
    'veiculo',
    'abastecimento',
    'cheiro',
    'vaga',
    'outro'
  ];

  nps: Nps ;
  dataSource = this.nps;

  /** Based on the screen size, switch from standard to one column per row */

  constructor(
    private excelService: ExcelService,
    private npsService: NpsService) {
    this.getNps();

  }

  ngOnInit(): void {
    this.getNps();
  }
  getNps() {
    this.npsService.listNps().subscribe(data => {
      return this.nps = data;
    });

  }

  exportAsXLSX(nps): void {
    nps = this.nps;
    this.excelService.exportAsExcelFile (
    nps, 'sample');
 }
}
