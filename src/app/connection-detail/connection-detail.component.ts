import { Component ,Input} from '@angular/core';
import {Connection} from '../connection';

@Component({
  selector: 'app-connection-detail',
  templateUrl: './connection-detail.component.html',
  styleUrl: './connection-detail.component.css'
})

export class ConnectionDetailComponent {
    @Input() connection? : Connection;
}
