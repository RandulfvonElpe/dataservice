import { Component ,OnInit } from '@angular/core';           // onInit Über??
import { Connection } from '../connection';
import { ConnectionService } from '../connection.service';
import { MessageService } from '../message.service';        // über??

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrl: './connections.component.css',
 })

export class ConnectionsComponent implements OnInit{        // onInit über??

  selectedConnection?: Connection;
  connections: Connection[] = [] ;          // hierzu nochmal lesen Kap4

  constructor(private connectionService: ConnectionService,
    private messageService: MessageService) {           // über??
  }

  ngOnInit(): void {          // hierzu nochmal lesen  Kap4
    this.getConnections();
  }

  onSelect(connection: Connection): void {
    this.selectedConnection = connection;
    this.messageService.add('ConnectionComponent: selected connection');   // über??
//    this.connectToBle(this.selectedConnection.connString);
  }
 
  getConnections(): void {          // hierzu nochmal lesen Kap4
    this.connectionService.getConnections()
        .subscribe( connections => this.connections = connections);
  }

//  connectToBle(connectionString: String) {
  //  alert(connectionString);
//  }
  
}
