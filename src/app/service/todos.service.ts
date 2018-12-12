import { Injectable } from '@angular/core';

@Injectable()
export class Todoservice{

  findAll(): string[]{
    if localStorage.getItem('todolist') != null {
      return JSON.parse(localStorage.getItem('todolist'));
    }
    return null;
  }

  add(task: string): void {
    if(localStorage.getItem('todolist') == null){
      console.log('empty')
      let list: string[] = [];
      list.push(task);
      localStorage.setItem('todolist', JSON.stringify(list));
    }else{
      let list: string[] = JSON.parse(localStorage.getItem('todolist'));
      list.push(task);
      localStorage.setItem('todolist', JSON.stringify(list));
    }
  }

  addnew(task: string): void {
    if(localStorage.getItem('todolist') == null){
      console.log('empty')
      let list: string[] = [];
      list.push(task);
      localStorage.setItem('todolist', JSON.stringify(list));
    }else{
      let list: string[] = JSON.parse(localStorage.getItem('todolist'));
      list.push(task);
      localStorage.setItem('todolist', JSON.stringify(list));
    }

    this.showEdit = false;
  }

  delete(index:number): void{
    let list: string[] = JSON.parse(localStorage.getItem('todolist'));
    list.splice(index,1);
    localStorage.setItem('todolist', JSON.stringify(list));
  }

  update(task: string): void{

    if(localStorage.getItem('todolist') == null){
      console.log('empty')
      let list: string[] = [];
      list.push(task);
      localStorage.setItem('todolist', JSON.stringify(list));
    }else{
      console.log('not empty')
      let list: string[] = JSON.parse(localStorage.getItem('todolist'));
      list.push(task);
      localStorage.setItem('todolist', JSON.stringify(list));
    }

    this.showEdit = false;
  }
}
