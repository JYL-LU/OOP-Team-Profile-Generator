const Employee = require("../lib/Employee");
test("testing to see if we can create an object from the Employee class", () => {
  const e = new Employee();
  expect(typeof e).toBe("object");
});

test("testing to see if we can put any names into the Empolyee class", () => {
  const name = "Jane";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("testing to see if we can put any IDs into the Empolyee class", () => {
  const name = "Jane";
  const id = 3045;
  const e = new Employee(name, id);
  expect(e.id).toBe(id);
});

test("testing to see if we can put any email into the Empolyee class", () => {
  const name = "Jane";
  const id = 3045;
  const email = "jyl.janelu@gmail.com";
  const e = new Employee(name, id, email);
  expect(e.email).toBe(email);
});

test("testing to see if we can call the getName function", () => {
  const name = "Jane";
  const id = 3045;
  const email = "jyl.janelu@gmail.com";
  const e = new Employee(name, id, email);
  expect(e.getName()).toBe(name);
});

test("testing to see if we can call the getID function", () => {
  const name = "Jane";
  const id = 3045;
  const email = "jyl.janelu@gmail.com";
  const e = new Employee(name, id, email);
  expect(e.getId()).toBe(id);
});

test("testing to see if we can call the getEmail function", () => {
  const name = "Jane";
  const id = 3045;
  const email = "jyl.janelu@gmail.com";
  const e = new Employee(name, id, email);
  expect(e.getEmail()).toBe(email);
});

test("testing to see if we can call the getRole function", () => {
  const name = "Jane";
  const id = 3045;
  const email = "jyl.janelu@gmail.com";
  const e = new Employee(name, id, email);
  expect(e.getRole()).toBe("Employee");
});
