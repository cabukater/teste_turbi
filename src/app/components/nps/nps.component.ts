import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-nps',
  templateUrl: './nps.component.html',
  styleUrls: ['./nps.component.css']
})
export class NpsComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: '10/10/2018', cols: 1, rows: 1 },
          { title: '10/10/2018', cols: 1, rows: 1 },
          { title: '10/10/2018', cols: 1, rows: 1 },
          { title: '10/10/2018', cols: 1, rows: 1 },
          { title: '10/10/2018', cols: 1, rows: 1 },
          { title: '10/10/2018', cols: 1, rows: 1 },
        ];
      }

      return [
        { title: '10/10/2018', cols: 1, rows: 1 },
        { title: '10/10/2018', cols: 1, rows: 1 },
        { title: '10/10/2018', cols: 1, rows: 1 },
        { title: '10/10/2018', cols: 1, rows: 1 },
        { title: '10/10/2018', cols: 1, rows: 1 },
        { title: '10/10/2018', cols: 1, rows: 1 },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
