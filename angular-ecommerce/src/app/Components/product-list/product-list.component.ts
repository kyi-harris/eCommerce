import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = []
  currentCategoryId: number = 1;
  currentCategoryName: String = "";

  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(() => {
      this.listProducts();
    })
  }

  listProducts() {
    // cheik if "id" parameter is available
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has("id");

    if (hasCategoryId) {
      // get the "id" param string. convert string to a number using the "+"" symbol
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;
      this.currentCategoryName = this.route.snapshot.paramMap.get('name')!;
    }
    else {
      // not category id available, default to category id
      this.currentCategoryId = 1;
      this.currentCategoryName = 'Books';
    }
    // now het the products for the given category id
    this.productService.getProductList(this.currentCategoryId).subscribe(
      data => {
        this.products = data
      }
    )
  }

}
