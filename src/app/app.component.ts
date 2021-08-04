import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  @Input() pageTitle = 'Acme Product Management Portal';
  // @ViewChild(ProductListComponent) pchild: ProductListComponent;

  constructor() {}

  ngOnInit() {
    this.click();
  }

  click() {
    localStorage.setItem('dataSource', '1');
  }
}
