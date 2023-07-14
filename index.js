function increment(n) {
    if(typeof n !== typeof 0) throw new TypeError("passed parameter is not of type number")
    if(n < 0 || 10 < n) throw new RangeError("passed number is out of range (0, 10)")
    return n++
}

try {
    increment(2)
} catch(err) {
    console.log(err)
}

try {
    increment("str")
} catch(err) {
    console.log(err)
}

try {
    increment(-22)
} catch(err) {
    console.log(err)
}

function incrementPromise(n) {
    return new Promise((resolve, reject) => {
        if(typeof n !== typeof 0) reject(new TypeError("promise: passed parameter is not of type number"))
        else if(n < 0 || 10 < n) reject(new TypeError("promise: passed number is out of range (0, 10)"))
        else resolve(n++)
        console.log("Promise finished")
    })
}

function timeoutPromise(n) {
    setTimeout(() => {
        try {
            incrementPromise(n)
        } catch(err) {
            console.log(err)
        }
    }, 1000)
}

timeoutPromise(2)
timeoutPromise("str")
timeoutPromise(-22)

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
}).then(resp => resp.json()).then(json => console.log("Created post's id: " + json.id))

const Alex = {
    name: "Alex",
    passport: {
        number: "11111111111",
        date: new Date(),
    }
}

function deepCopy(obj) {
    const result = {};
  
    if (typeof obj !== "object" || 
        typeof obj === undefined || 
        obj === null || 
        Array.isArray(obj) || 
        typeof obj == "function") {
        return obj;
    }

    const keys = Object.keys(obj);

    for (let key in keys) {
        result[keys[key]] = deepCopy(obj[keys[key]])
    }
    return result;
}

const deepCopiedObj = deepCopy(Alex)
console.log(deepCopiedObj)