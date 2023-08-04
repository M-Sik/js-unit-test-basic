const check = require("../check");

describe("check", () => {
  let onSuccess;
  let onFail;
  // 테스트가 시작되기 전에 실행
  beforeEach(() => {
    // jest에서 제공하는 mock함수 선언
    onSuccess = jest.fn();
    onFail = jest.fn();
  });
  // predicate가 true라면 onSuccess를 불러야함
  it("should call onSuccess when predicate is true", () => {
    check(() => true, onSuccess, onFail);
    // onSuccess라는 함수가 한번 호출 되어야한다.
    expect(onSuccess).toHaveBeenCalledTimes(1);
    // onSuccess mock이 실행되면 yes가 실행되야한다.
    expect(onSuccess).toHaveBeenCalledWith("yes");
    // onFail이라는 mock 함수가 한번이라도 호출되면 안된다.
    expect(onFail).toHaveBeenCalledTimes(0);
  });

  // predicate가 false라면 onFail를 불러야함
  it("should call onFail when predicate is true", () => {
    check(() => false, onSuccess, onFail);
    // onFail라는 함수가 한번 호출 되어야한다.
    expect(onFail).toHaveBeenCalledTimes(1);
    // onFail mock이 실행되면 yes가 실행되야한다.
    expect(onFail).toHaveBeenCalledWith("no");
    // onSuccess 이라는 mock 함수가 한번이라도 호출되면 안된다.
    expect(onSuccess).toHaveBeenCalledTimes(0);
  });
});
