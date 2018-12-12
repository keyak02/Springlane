import { Component } from '@angular/core';
import { TodosComponent } from './todos/todos.component';
import { GrocerylistComponent } from './grocerylist/grocerylist.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listbook';
  showGroceryPanel = false;

  paint = true;
  dark = false;
  theme : string;

  todolistpanel = false;
  showGroceryListManager = false;

  home = true;

  task: string;
  tasks = [];

themepaint(){
  this.paint = true;
  this.dark = false;
}

themedark(){
  this.paint = false;
  this.dark = true;
}

gotohome(){
  this.todolistpanel = false;
  this.showGroceryListManager = false;
  this.showAddressListManager = false;
  this.showPhoneBookManager = false;
  this.home = true;
}

todolistmanager(){
  this.todolistpanel = true;
  this.showGroceryListManager = false;
  this.showAddressListManager = false;
  this.showPhoneBookManager = false;
  this.home = false;
}

groceryListManager(){
  this.showGroceryListManager = true;
  this.showAddressListManager = false;
  this.showPhoneBookManager = false;
  this.todolistpanel = false;
  this.home = false;
}

}
