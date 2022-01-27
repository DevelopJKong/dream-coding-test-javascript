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
