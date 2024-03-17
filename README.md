# Mocking with Jest

Start in index.js. `getQuote` is a simple function that calla `fetchData` to get a quote from an API. `getQuote` then returns the quote as a formatted string.

There's a simple test for it in index.test.js. Run it with `npm test` to confirm it passes. 

We want to test `getQuote` without it making a real call to the API each time. We can use Jest's mocking feature to mock the `fetchData` function.

