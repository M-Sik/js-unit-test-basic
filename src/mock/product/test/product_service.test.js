const ProductService = require("../product_service");
const StubProductClient = require("./stub_product_client.js");

describe("ProductService - Stub", () => {
  let productService;

  beforeEach(() => {
    productService = new ProductService(new StubProductClient());
  });

  it("should filter out only available items", async () => {
    const items = await productService.fetchAvailableItems();
    // 아이템은 available이 true인 아이템 1개만 나와야한다.
    expect(items.length).toBe(1);
    // 아이템은 available이 true인 우유 1개만 나와야한다.
    expect(items).toEqual([{ item: "🥛", available: true }]);
  });
});
