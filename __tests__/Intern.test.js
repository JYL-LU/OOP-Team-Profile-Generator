const Intern = require("../lib/Intern");

test("testing to see if we can create an object from the Intern class", () => {
  const e = new Intern();
  expect(typeof e).toBe("object");
});

test("testing to see if we can put school into the Intern class", () => {
  const name = "Foo";
  const id = 1769;
  const email = "intern@gmail.com";
  const school = "UC Berkeley";
  const e = new Intern(name, id, email, school);
  expect(e.school).toBe(school);
});

test("testing to see if we can call the getRole function", () => {
  const name = "Foo";
  const id = 1769;
  const email = "intern@gmail.com";
  const school = "UC Berkeley";
  const e = new Intern(name, id, email, school);
  expect(e.getRole()).toBe("Intern");
});
