import { describe, it, expect } from "vitest"

describe("for loop sample", () => {
  it("concatenates i as 0, 2, 4 into a string", () => {
    let i
    let x = ""
    for (i = 0; i < 5; i = i + 2) {
      x += i
    }
    expect(x).toBe("024")
  })
})
