import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() {}
  //原本是this.Products改成Private Products:Product
  private Products: Product[] = [
    new Product(
      1,
      '夜鶯',
      2451,
      3231,
      10,
      4,
      '★《紐約時報》暢銷書NO.1 ',
      ['Solids', 'Liquids'],
      'book_1.jpg'
    ),
    new Product(
      2,
      '巴黎',
      345,
      6122,
      9,
      3,
      '一則關於尚在衝突與分裂國度的政治寓言',
      ['Spray', 'Liquids'],
      'book_2.jpg'
    ),
    new Product(
      3,
      '要求特別多的餐廳：尋回失落初心的澄淨原野，宮澤賢治經典短篇集',
      123,
      5411,
      15,
      2,
      '我們即使不能盡情擁有冰糖，',
      ['Electric', 'Liquids'],
      'book_3.jpg'
    ),
    new Product(
      4,
      '人間滅亡：日本文豪的厭世人生指南',
      256,
      6465,
      20,
      1,
      '以《楢山節考》震撼文壇的天才小說家與新世代交鋒的厭世人生指南',
      ['Solids', 'Other'],
      'book_4.jpg'
    ),
    new Product(
      5,
      '小安娜：正能量少女《波麗安娜》鼓舞千萬人的開心遊戲物語【真善美文學系2】',
      2416,
      2414,
      30,
      1,
      '全世界公認的「快樂聖經」、「樂觀守則」，全美上市一個月創造百萬銷量，為千百萬讀者指引人生方向的幸福讀本！',
      ['For Cars', 'Liquids'],
      'book_5.jpg'
    ),
    new Product(
      6,
      '天帝妖狐(經典回歸版)',
      464,
      9415,
      40,
      5,
      '★喚起各世代台日讀者共鳴：「明明是那麽簡單的文字，看到最後一頁，我竟哭了。」',
      ['Solids', 'Electric'],
      'book_6.jpg'
    ),
    new Product(
      7,
      '大腦裡的珍‧奧斯汀：從文學讀懂情緒科學，破譯你我大腦中的高敏感社交誤區',
      464,
      9415,
      40,
      5,
      '原來用我們的大腦理解別人，真是一件不單純的事！',
      ['Solids', 'Electric'],
      'book_7.jpg'
    )
  ];
  // 第一個方法 獲取所有產品的數組
  getProducts(): Product[] {
    return this.Products;
  }
  // 根據一個產品的id拿到產品的 全部信息，返回一個Product
  //getProduct(id: number): Product {
  //return this.Products.find(Product => Product.id == id);
  //}
}

export class Product {
  // 聲明Product裏面的屬性

  constructor(
    public id: number,
    public name: string,
    public price_new: number,
    public price_old: number,
    public review: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>,
    public route: string
  ) {}
}
