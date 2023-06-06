import { Component,Input } from '@angular/core';


interface MyData {
  [key: string]: any;
}


@Component({
  selector: 'app-credit-note',
  templateUrl: './credit-note.component.html',
  styleUrls: ['./credit-note.component.scss']
})

export class CreditNoteComponent {

  @Input()
  value?: any;


  data: any;
  editable = false;



  constructor(){
    
  }
}
