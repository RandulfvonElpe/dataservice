import { Injectable } from '@angular/core';
import { CONNECTIONS } from './connection-list';
import { Connection } from './connection';
import { Observable, of} from 'rxjs';     // hierzu nochmal lesen  Kap.4
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor(private messageService: MessageService) { 

  }

  getConnections(): Observable<Connection[]> {      // hierzu nochmal lesen Kap.4
    const connections = of(CONNECTIONS);   
    this.messageService.add('ConnectionService: fetched connections');
    return connections;
  }
}
