import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class Groceryservice{

  findAll(): string[]{
    if localStorage.getItem('grocerylist') != null {
      return JSON.parse(localStorage.getItem('grocerylist'));
    }
    return null;
  }

  additem(item: string, quantity:number): void {

    if(localStorage.getItem('grocerylist') == null){
      console.log('empty')
      let list: string[] = [];
      list.push(item);
      localStorage.setItem('grocerylist', JSON.stringify(list));
    }else{
      console.log('not empty')
      let list: string[] = JSON.parse(localStorage.getItem('grocerylist'));
      list.push(item);
      localStorage.setItem('grocerylist', JSON.stringify(list));
      console.log(list)
    }
  }

  delete(index:number): void{
    let list: string[] = JSON.parse(localStorage.getItem('grocerylist'));
    list.splice(index,1);
    localStorage.setItem('grocerylist', JSON.stringify(list));
  }

  update(index:number): void{

    if(localStorage.getItem('grocerylist') == null){
      console.log('empty')
      let list: string[] = [];
      list.push(index);
      localStorage.setItem('grocerylist', JSON.stringify(list));
    }else{
      let list: string[] = JSON.parse(localStorage.getItem('grocerylist'));
      list.push(index);
      localStorage.setItem('grocerylist', JSON.stringify(list));
    }

    this.showEdit = false;
  }
}
