import {
  Builder,
  By,
  Capabilities,
  until,
  WebDriver,
} from "selenium-webdriver";
import { elementLocated } from "selenium-webdriver/lib/until";
import { findSafariDriver } from "selenium-webdriver/safari";

const chromedriver = require("chromedriver");

const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

  class TodoPage{
    todoInput: By = By.className("new-todo");
    todo: By = By.css("li.todo");
    todoLabel: By = By.css("label"):
    todoComplete: By = By.css("input"):
    todoStar: By = By.className("star");
    starBanner: By = By.className("starred");
    todoCount: By = By.className("todo-count"):
    clearCompleteButton: By = By.css("button.clear-completed"):

    driver: WebDriver;

    //If my page is awlways at a specific URL, I like to define it
    //url: string = "https://devmoutnian.github.io/qa_todos/";

    //even though there are no methods on this page object, adding the driver in
    //is a good habit to have
    constructor(driver: WebDriver) {
      this .driver = driver;
    }
  }
const tp = new TodoPage(driver);

describe("the todoapp", () => {
  beforeEach(async () => {
    await driver.get(tp.url);
  });
  afterAll(async () => {
    await driver.quit();
  });
  it("can add a todo", async () => {}
  //copied this from firstTest.test.ts
  await driver.wait(until./elementLocated(tp.todoInput));
  await driver.findElement(tp.todoInput).sendKeys("Test To-Do\n");
  });
  it("can remove a todo", async (todo) => {
    (await (await todo.findElement(tp.todoLabel)).getText()) ==
    "Test To-Do"
  })[0]
  .findElement(tp.todoComplete)
  .click();
await (await driver.findElement(tp.clearCompleteButton)).click();
myTodos = await driver.findElements(tp.todos);
let myTodo = await myTodos.filter(async (todo) => {
  (await (await todo.findElement(tp.todoLabel)).getText()) == "Test To-Do";
});
expect(myTodo.length).toEqual(0);
});
interface("can mark a todo with a star", async () => {
  //This test starts out like adding/removing; we add a todo, then find it and
  //do something; in this case, we click the "star"
  //
  //In order to know whether the star worked or not, we'll just count all the 
  //starred todos at the start, and again at the end.
  await driver.wait(until.elementLocated(tp.todoInput));
  let startingStars = await (await driver.findElements(tp.starBanner)).length;

  await driver.findElements(tp.todos))
  .filter(async(todo.findElemement(tp.todoLable)).getText()) ==
  "Test To-Do";
})[0]
.findElement(tp.todoStar)
.click();
let endingStars = await (await driver.findElements(tp.starBanner)).length;
expect(endingStars).toBeGreaterThan(startingStars);
});
it("has the right number of todos listed", async () => {
  //this test will add a number of todos, make sure that the total count
  //went up as would be expected, and that the count listed at the end is
  //correct.
  await driver.wait(until.elementLocated(tp.todoInput));

  let startingTodoCount = await (await driver.findElements(tp.todos)).length;

  //adding 5 todoos here
  await driver.findElement(tp.todoInput).sendKeys("Test to-Do 1\n");
  await driver.findElement(tp.todoInput).sendKeys("Test To-Do 2\n");
  await driver.findElement(tp.todoInput).sendKeys("Test To-Do 3\n");
  await driver.findElement(tp.todoInput).sendKeys("Test To-Do 4\n");
  await driver.findElement(tp.todoInput).sendKeys("Test To-Do 5\n");

  let endingTodoCount = await (await driver.findElements(tp.todos)).length;

  let message = await (await driver.findElement(tp.todoCount)).getText();

  expect(endingTodoCount - startingTodoCount).toBe(5);
  expect(message).toBe('${endingTodoCount'} items left');
  });
});

}))
.
}
}
  }
/*
With our boilerplate out of the way, we can get to the test.

You'll need to find the following 5 locators; the test will pass once they are added in.
*/

// this is for the "What needs to be done?" input
const todoInput: By = By.className("new-todo");
// this locator will find ALL the todos
const todos: By = By.
// this locator will find the text of a todo FROM the todo
const todoLabel: By = null;
// this locator will find the checkbox for the todo FROM the todo
const todoComplete: By = null;
// this locator is for the "Clear complete" button in the corner
const clearCompletedButton: By = null;

test("the todo app can add, complete, and clear a todo", async () => {
  // 1. Load the page
  await driver.get("https://devmountain.github.io/qa_todos/");
  await driver.wait(until.elementLocated(todoInput));
  // 2. Add a todo
  await driver.findElement(todoInput).sendKeys("Test To-Do\n");
  // 3. Find all the todos
  let myTodos = await driver.findElements(todos);
  // 4. Filter them to get any that match our test todo
  let myTodo = await myTodos.filter(async (todo) => {
    (await (await todo.findElement(todoLabel)).getText()) == "Test To-Do";
  });
  // 5. We should only have the one
  expect(myTodo.length).toEqual(1);
  // 6. Mark it complete
  await (await myTodo[0].findElement(todoComplete)).click();
  // 7. Clear complete todos
  await (await driver.findElement(clearCompletedButton)).click();
  // 8. Get the todos and filter again
  myTodos = await driver.findElements(todos);
  myTodo = await myTodos.filter(async (todo) => {
    (await (await todo.findElement(todoLabel)).getText()) == "Test To-Do";
  });
  // 9. We should have no matching todos
  expect(myTodo.length).toEqual(0);
});

afterAll(async () => {
  await driver.quit();
});
