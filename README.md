# Simplifying fetch requests for less codes to type

## Get request example below:
```javascript
import {get} from "sodon-http/API";

const myFunction = async () => {
    try {
        const response = await get("https://jsonplaceholder.typicode.com/todos");
        if (response.success) {
            console.log("SUCCESS!", response.payload)
        } else {
            console.warn("WARNING!", response.message, response.status);
        }
    } catch (e) {
        console.error(e);
    }
}
```

## Post JSON data as below

```javascript
import {postJson} from "sodon-http/API"

const myFunction = async () => {
    try {
        const form = {
            title: "Foo",
            body: "bar",
            userId: 2,
        }
        const response = await postJson('https://jsonplaceholder.typicode.com/posts', form);
        if (response.success) {
            console.log("SUCCESS", response.payload);
        } else {
            console.warn("RESPONSE", response);
        }
    } catch (e) {
        console.error(e)
    }
}
```
