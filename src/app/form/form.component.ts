import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public formName: string = "";
  public formPublisher: string = "";
  public formQuote: string = "";
  published!: Date;
  newQuote: any;

  submitQuote(){

  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
