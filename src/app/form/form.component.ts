import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formName!: string;
  formPublisher!: string;
  formQuote!: string;
  published!: Date;
  newQuote: any;

  submitQuote(){

  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
