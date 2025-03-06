import { Component, OnInit } from '@angular/core';
import { TramService } from '../../services/tram.service';
import { Tram } from '../../models/tram.model';

@Component({
  selector: 'app-tram-list',
  templateUrl: './tram-list.component.html',
  styleUrls: ['./tram-list.component.scss'],
})
export class TramListComponent implements OnInit {
  trams: Tram[] = [];

  constructor(private tramService: TramService) {}

  ngOnInit() {
    this.tramService.getTramsToLinde().subscribe(data => {
      this.trams = data;
    });
  }

  refreshTrams() {
    setTimeout(() =>{
      this.tramService.getTramsToLinde().subscribe(data => {
        this.trams = data;
      });
    },10000)
  }
  
}
