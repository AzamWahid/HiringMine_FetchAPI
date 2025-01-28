# HiringMine_FetchAPI

## Overview:
This is a basic JavaScript project demonstrating how to use the Fetch API with Promises. The goal is to help beginners understand asynchronous operations in JavaScript by fetching data from a public API and handling the response using Promises.

## Live Demo:
You can see a live demo of the project here: [HiringMine_FetchAPI Live Demo](https://azamwahid.github.io/HiringMine_FetchAPI/)

## How It Works:
1. A button triggers the `fetchData` function.
2. The `fetch()` method is used to retrieve data from a public API.
3. The data is displayed in the HTML when the promise resolves.
4. Errors are caught and displayed if the fetch operation fails.

## Technologies:
- HTML
- JavaScript (ES6+)
- Fetch API
- Promises

## How to Run:
1. Clone this repository.
2. Open the `index.html` file in your browser.
3. Click the "Fetch Data" button to see the Fetch API in action.

## Example of How the Data Will Be Displayed:
The data will be fetched from a public API and shown in the browser in a formatted JSON view. Here's an example of how it looks:
```json
[
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit...etc."
  },
  ...
]
