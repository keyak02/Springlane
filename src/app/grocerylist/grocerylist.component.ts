import { Component, OnInit } from '@angular/core';
import { Groceryservice } from 'src/app/service/grocerylist.service.ts';
import { Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms'


@Component({
  selector: 'app-grocerylist',
  templateUrl: './grocerylist.component.html',
  styleUrls: ['./grocerylist.component.css']
})
export class GrocerylistComponent implements OnInit {
  groceryForm: FormGroup;
  itemlists: string[];
  showEditpanel = false;
  showGroceryListManager = true;
  showGroceryPanel = false;
  grocerytheme = false;
  index: number;


  constructor(
    private groceryservice : Groceryservice;
    private groceryformBuilder : FormBuilder;
  ) {}

  ngOnInit() {
    showEditpanel: false;

    this.groceryForm = this.groceryformBuilder.group({
       name: ['']
    });

    this.itemlists = this.groceryservice.findAll();
  }

  additem():void {
    this.groceryservice.additem(this.groceryForm.value.name);
    this.itemlists = this.groceryservice.findAll();
  }

  updateitem (item : string): void{
    this.groceryservice.delete(this.index);
    this.groceryservice.update(this.groceryForm.value.name);
    this.itemlists = this.groceryservice.findAll();
    this.showEditpanel = false;
  }

  saveasgrocerythemed(){
    this.grocerytheme = true;
  }

  defaultgrocerytheme(){
    this.grocerytheme = false;
  }

  hide(i){
    this.showEditpanel = true;
    this.index = i;
    console.log(i)
  }

  delete(index : number): void {
      this.groceryservice.delete(index);
      this.itemlists = this.groceryservice.findAll();

  }

}
