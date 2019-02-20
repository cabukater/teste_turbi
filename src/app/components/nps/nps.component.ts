import { Component, OnInit } from "@angular/core";
import { map } from "rxjs/operators";
import { Breakpoints, BreakpointObserver } from "@angular/cdk/layout";
import { NpsService } from "../../services/nps.service";
import { Nps } from "../../models/nps/nps.model";
import { Observable } from "rxjs/internal/Observable";

@Component({
  selector: "app-nps",
  templateUrl: './nps.component.html',
  styleUrls: ['./nps.component.scss']
})
export class NpsComponent implements OnInit {
  displayedColumns: string[] = [
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

  nps: Nps;
  dataSource = this.nps;

  /** Based on the screen size, switch from standard to one column per row */

  constructor(private npsService: NpsService) {
    this.getNps();
    console.log(this.nps);
  }

  ngOnInit(): void {
    this.getNps();
  }
  getNps() {
    this.npsService.listNps().subscribe(data => {
      this.nps = data;
    });
  }
}
