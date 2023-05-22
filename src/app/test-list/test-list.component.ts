import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css'],
})
export class TestListComponent {
  products = [...products];

  share(name: any, price: GLfloat) {
    window.alert('Das ' + name + ' wurde für ' + price + ' € gekauft');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
