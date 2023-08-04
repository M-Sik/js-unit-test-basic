const ProductService = require("../product_service_no_di.js");
const ProductClient = require("../product_client.js");
jest.mock("../product_client");

describe("ProductService", () => {
  // 제품정보를 가져오는 mock함수 작성
  const fetchItems = jest.fn(async () => [
    { item: "🥛", available: true },
    { item: "🍌", available: false },
  ]);
  ProductClient.mockImplementation(() => {
    return {
      fetchItems: fetchItems,
    };
  });
  let productService;

  beforeEach(() => {
    productService = new ProductService();
    // mockClear는 jest.config.js파일에 clearMocks이 false로 설정되어있다면 아래와같이 clear 시켜줘야함
    fetchItems.mockClear();
    ProductClient.mockClear();
  });

  it("should filter out only available items", async () => {
    const items = await productService.fetchAvailableItems();
    // 아이템은 available이 true인 아이템 1개만 나와야한다.
    expect(items.length).toBe(1);
    // 아이템은 available이 true인 우유 1개만 나와야한다.
    expect(items).toEqual([{ item: "🥛", available: true }]);
  });

  it("test", async () => {
    const items = await productService.fetchAvailableItems();
    expect(fetchItems).toHaveBeenCalledTimes(1);
  });
});
