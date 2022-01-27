//mock 과 stub의 차이점을 명확하게 알아두자
/**
 * mock
 * 구현 사항이 없고 내가 원하는것만 부분적으로 가짜의 흉내를 낸다
 */

/**
 * stub
 * 기존에 쓰이는 인터페이스를 다 충족하는 실제로 구현된 코드인데
 * 진짜와 대체 가능한것이다
 */

const ProductService = require("../product_service_no_di");
const ProductClient = require("../product_client");

jest.mock("../product_client");


describe("ProductService", () => {
  const fetchItems = jest.fn(async () => {
    return [
      { item: "Milk", available: true },
      { item: "🔑", available: false },
    ];
  });

  ProductClient.mockImplementation(() => {
    return {
      fetchItems,
    };
  });

  let productService;

  beforeEach(() => {
    productService = new ProductService();
    //jest.config.js 에서 clearMock를 false로 지정하면 각각의 mock을 clear 해 주어야 한다
    //fetchItems.mockClear();
    //ProductClient.mockClear();
  });

  it("should filter out only available items", async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: "Milk", available: true }]);
  });

  it('test', async () => {
    const items = await productService.fetchAvailableItems();
    expect(fetchItems).toHaveBeenCalledTimes(1);
  });


});
