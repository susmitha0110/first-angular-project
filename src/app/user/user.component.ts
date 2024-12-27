import { Component, computed, EventEmitter, Input, input, output, Output} from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  standalone:false
})

export class UserComponent {
  
@Input ({required:true}) user!:User;
@Input({required:true}) selected!:boolean;
@Output() select = new EventEmitter<string>();

//avatar = input.required<string>(); // setting inputs using signals
//name = input.required<string>();
//select=output<string>() // another way of using output without using decorators

//imagePath = computed(() =>{
// return "/images/users/" + this.avatar();
//})

 get imagePath(){
   return "/images/users/" + this.user.avatar;
  }

 onSelectUser(){
  this.select.emit(this.user.id);
}
}