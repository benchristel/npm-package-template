import {greeting} from "."

test("test discovery via import.meta.glob", {
  works() {
    expect(true, is, true)
  },
})

test("greeting", {
  "greets 'world' by default"() {
    expect(greeting(), is, "Hello, world!")
  },

  "greets someone else"() {
    expect(greeting("stranger"), is, "Hello, stranger!")
  },
})
