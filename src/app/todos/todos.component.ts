import { Component, OnInit } from '@angular/core';
import { Todoservice } from 'src/app/service/todos.service';
import { Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todoForm: FormGroup;
  worklists: string[];

  showEdit = false;
  index: number;
  todotheme = false;

  constructor(
    private todoservice : Todoservice;
    private formBuilder : FormBuilder;
  ) {}

  ngOnInit() {
    this.home = false;
    showEdit: false;
    this.todoForm = this.formBuilder.group({
      task: ['']
    });
    this.worklists = this.todoservice.findAll();
  }

  add():void {
    this.todoservice.add(this.todoForm.value.task);
    this.worklists = this.todoservice.findAll();
  }

  update(task: string): void{
    this.todoservice.delete(this.index);
    this.todoservice.update(this.todoForm.value.task);
    this.worklists = this.todoservice.findAll();
    this.showEdit = false;
  }

  delete(index : number): void {
    var result = confirm('Are you sure?');
    if(result){
      this.todoservice.delete(index);
      this.worklists = this.todoservice.findAll();
    }
  }

  hide(i){
    this.showEdit = true;
    this.index = i;
  }

  saveastodothemed(){
    this.todotheme = true;
  }

  defaulttheme(){
    this.todotheme = false;
  }
}
