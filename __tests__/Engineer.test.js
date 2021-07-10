const Engineer = require("../lib/Engineer");

test("testing to see if we can create an object from the Engineer class", () => {
  const e = new Engineer();
  expect(typeof e).toBe("object");
});

test("testing to see if we can set github account into the Engineer class", () => {
  const name = "Foo";
  const id = 2068;
  const email = "engineer@gmail.com";
  const github = "JYL-LU";
  const e = new Engineer(name, id, email, github);
  expect(e.github).toBe(github);
});

test("testing to see if we can call the getRole function", () => {
  const name = "Foo";
  const id = 2068;
  const email = "engineer@gmail.com";
  const github = "JYL-LU";
  const e = new Engineer(name, id, email, github);
  expect(e.getRole()).toBe("Engineer");
});
