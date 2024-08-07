import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Moments } from 'src/app/moments';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.css']
})
export class MomentFormComponent implements OnInit {
@Output() onSubmit = new EventEmitter<Moments>()
@Input() btnText!: string;

momentForm!: FormGroup

ngOnInit(): void {
  this.momentForm = new FormGroup({
    id:new FormControl(''),
    title:new FormControl('',[Validators.required]),
    description:new FormControl('',[Validators.required]),
    image:new FormControl('')
  })
}

get title(){
  return this.momentForm.get('title')!;
}
get description(){
  return this.momentForm.get('description')!;
}

onFileSelected(event: any){

  const file: File = event.target.files[0]
  this.momentForm.patchValue({image: file});
}



submit(){
  console.log(this.momentForm.invalid)
  if(this.momentForm.invalid){
    return;
  }
  this.onSubmit.emit(this.momentForm.value)
}


}
