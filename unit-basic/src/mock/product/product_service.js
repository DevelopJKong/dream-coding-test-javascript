class ProductService {
  constructor(productClient) {
    // 클래스 내부에서 스스로를 의존하고 정의하면 안된다 => 의존성 원칙 위반
    this.productClient = productClient;
  }

  fetchAvailableItems() {
    return this.productClient
      .fetchItems()
      .then((items) => items.filter((item) => item.available));
  }
}

module.exports = ProductService;
