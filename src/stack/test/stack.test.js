const Stack = require("../stack.js");

describe("Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });
  // 스택이 처음 만들어지면 비어있어야한다.
  it("is created empty", () => {
    expect(stack.size()).toBe(0);
  });
  // 스택에 원하는 아이템을 하나씩 넣을 수 있다.
  it("allows to push item", () => {
    stack.push("zz");
    expect(stack.size()).toBe(1);
  });

  describe("pop", () => {
    // 스택이 비어있을때 pop을하면 에러를 반환한다.
    it("throws an error if stack is empty", () => {
      expect(() => {
        stack.pop();
      }).toThrow("Stack is empty");
    });
    // pop은 배열의 마지막원소를 리턴해주면서 마지막 요소를 배열에서 제외시켜준다.
    it("returns the last pushed item and removes it from the stack", () => {
      stack.push("1");
      stack.push("2");

      expect(stack.pop()).toBe("2");
      expect(stack.size()).toBe(1);
    });
  });

  describe("peek", () => {
    it("throws an error if stack is empty", () => {
      expect(() => {
        stack.peek();
      }).toThrow("Stack is empty");
    });
    // 배열의 마지막요소를 리턴받음, 제거되지는 않음
    it("returns the last pushed item but keeps it in the stack", () => {
      stack.push("1");
      stack.push("2");

      expect(stack.peek()).toBe("2");
      expect(stack.size()).toBe(2);
    });
  });
});
