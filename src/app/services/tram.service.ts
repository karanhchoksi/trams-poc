import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tram } from '../models/tram.model';

@Injectable({
  providedIn: 'root',
})
export class TramService {
  private apiUrl = 'assets/server_response.json';  // ✅ Load from assets

  constructor(private http: HttpClient) {}

  getTramsToLinde(): Observable<Tram[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response =>
        response.departures
          .filter((tram:any) =>
          {
            return (
              tram.line.transport_mode === 'TRAM' &&
              tram.direction === 'Solna station' && // Linde is on the way to Solna station
              tram.stop_area.name === 'Luma'
            );
          }
          )
          .map((tram:any) => ({
            destination: tram.destination,
            direction: tram.direction,
            display: tram.display,
            state: tram.state,
            line: tram.line.designation,
            scheduled: tram.scheduled,
            expected: tram.expected,
          }))
      )
    );
  }
}
