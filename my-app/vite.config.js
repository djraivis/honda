import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    // Use happy-dom or jsdom when tests touch document/window
    environment: "happy-dom",
    include: ["**/*.{test,spec}.{js,mjs}"],
  },
})
