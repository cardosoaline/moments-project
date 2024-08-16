import { Component } from '@angular/core';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-menssages',
  templateUrl: './menssages.component.html',
  styleUrls: ['./menssages.component.css']
})
export class MenssagesComponent {

  faTimes = faTimes;
//private sem acesso ao template e public com acesso ao template

  constructor(public messageService: MessagesService){

  }

  ngOnInit(): void{}


}
