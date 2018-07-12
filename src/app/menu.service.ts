import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {  

  private menu = 
    [{ name: "Soup", 
        items:[
          {name: "Wonton Soup (chicken)", price: 2.25},
          {name: "Egg Drop Soup", price: 1.95},
          {name: "Chicken Corn Soup", price: 2.25},
          {name: "Vegetable Corn Soup", price: 1.95},
        ]
      },
    { name: "Appetizer", 
       items:[
         {name: "Egg Rolls (2)", price: 1.95},
         {name: "Vegetable Roll", price: 1.25},
         {name: "Shrim Toaps", price: 2.25},
         {name: "Chicken Satay", price: 6.50},
       ]
    },
    { name: "Main Course", 
      items:[
        {name: "Filet Mignon 8 ounce", price: 30.95},
        {name: "Stuffed Lobster Tail", price: 29.50},
      ]
    }
  ]
  ;

  constructor() { }

    getMenu(): Observable<any> {
    return of(this.menu);
  }

}
