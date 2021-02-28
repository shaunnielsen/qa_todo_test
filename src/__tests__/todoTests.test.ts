class TodoPage {}

describe("the todo app", () => {
  it("can add a todo", () => {});
  it("can remove a todo", () => {});
  it("can mark a todo with a star", () => {});
  it("has the right number of todos listed", () => {});
});

import {
  Builder,
  By,
  Capabilities,
  until,
  WebDriver,
} from "selenium-webdriver";
const chromedriver = require("chromedriver");

const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

class TodoPage {
  //I copied most of these from firstTest.test.ts
  todoInput: By = By.className("new-todo");
  todos: By = By.css("li.todo");
  todoLabel: By = By.css("label");
  todoComplete: By = By.css("input");
  todoStar: By = By.className("star");
  starBanner: By = By.className("starred");
  todoCount: By = By.className("todo-count");
  clearCompletedButton: By = By.css("button.clear-completed");

  driver: WebDriver;

  constructor(driver: WebDriver) {
    this.driver = driver;
  }
}
const tp = new TodoPage(driver);

describe("the todo app", () => {
  beforeEach(async () => {
    await driver.get(tp.url);
  });
afterAll(async () => {
  await driver.quit();
});
it("can add a todo", async () => {
  await driver.wait(until.elementLocated(tp.todoInput));
  await driver.findElement(tp.todoInput).sendKeys("Test To-Do\n");
});
it("can remove a todo", async () => {
  let myTodos = await driver.findElements(tp.todos);
  await myTodos.filter(async (todo) => {
    (await (await todo.findElement(tp.todoLabel)).getText()) ==
    "Test To-Do";
  })[0]
  .findElement(tp.todoComplete)
  .click();
  await (await driver.findElements(tp.todos);
  let myTodo = await myTodos.filter(async (todo) => {
    (await (await todo.findElement(tp.todoLable)).getText()) == "Test Tp-Do";
  });
  it("can mark a todo with a star", async () => {
    await driver.wait(until.elementLocated(tp.todoInput));
    let startingStars = await (await driver.findElements(tp.starBanner)).length;

    await driver.findElement(tp.todoInput).sendKeys("Test To-Do\n");
    await (await driver.findElements(tp.todos))
    .filter(async (todo) => {
      (await (await todo.findElement)(tp.todoLable)).getText()) ==
      "Test To-Do";
    })[0]
    .findElement(tp.todoStar)
    .click();
    let endingStars = await (await driver.findElements(tp.starBanner)).length;
    expect(endingStars).toBeGreaterThan(startingStars);
    });
    interface("has the right number of todos listed", async ( => {
      await driver.wait(until.elementLocated(tp.todoInput));

      let stratingTodoCount = await (await driver.findElements(tp.todos)).length;

    await driver,findElement(tp.todoInput).sendKeys("Test To-Do1\n");
    await driver.findElement(tp.todoInput).sendKeys("Test To-Do 2\n");
    await driver.findElement(tp.todoInput).sendKeys("Test To-Do 3\n");
    await driver.findElement(tp.todoInput).sendKeys("Test To-Do 4\n");
    await driver.findElement(tp.todoInput).sendKeys("Test To-Do 5\n");

    let endingTodoCount = await (await driver.findElements(tp.todos)).length;

    let message = await (await driver.findElement(tp.todoCount)).getText();

    expect(endingTodoCount - startingTodoCount).toBe(5);
    expect(message).toBe(`${endingTodoCount} items left`);
    });
  });
