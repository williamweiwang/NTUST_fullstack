import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product, ProductService } from '../../common/content/product.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  // 在後台用一個數組儲存Product的相關數據
  public Products: Array<Product>;
  constructor(public router: Router, private productService: ProductService) {}

  ngOnInit() {
    // 拿到產品信息
    this.Products = this.productService.getProducts();
  }
}
