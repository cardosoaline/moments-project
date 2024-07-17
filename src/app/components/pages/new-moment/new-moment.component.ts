import { Component } from '@angular/core';
import { Moments } from 'src/app/moments';
import { MomentService } from 'src/app/services/moment.service';


@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent {
btnText =  'Compartilhar!'

constructor(private momentService: MomentService){}

ngOnInit(): void {}

async createHandler(moment:Moments){
  const formData = new FormData()

  formData.append("title",moment.title)
  formData.append("description",moment.description)
  if(moment.image){
    formData.append('image',moment.image)
  }

  //TODO: 1 -Enviar para service 2 - exibir msg 3 -redirect

  await this.momentService.createMoment(formData).subscribe();

}

}
