const Manager = require("../lib/Manager");

test("testing to see if we can create an object from the Manager class", () => {
  const e = new Manager();
  expect(typeof e).toBe("object");
});

test("testing to see if we can put number into the Manager class", () => {
  const name = "Foo";
  const id = 2222;
  const email = "manager@gmail.com";
  const number = "01";
  const e = new Manager(name, id, email, number);
  expect(e.number).toBe(number);
});

test("testing to see if we can call the getRole function", () => {
  const name = "Foo";
  const id = 2222;
  const email = "manager@gmail.com";
  const number = "01";
  const e = new Manager(name, id, email, number);
  expect(e.getRole()).toBe("Manager");
});
