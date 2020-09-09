## CodeDecode in JavaScript

---

### Approach - 1

```javascript
var codeDecode = (n) => {
  let result = [];

  let mappings = {
    3 : 'Code',
    5 : 'Decode',
  }

  for (let i = 1; i <= n; i++){
    let string = '';

    for (let key in mappings){
      if (i % parseInt(key, 10) === 0){
        string += mappings[key];
      }
    }

      if (string.length === 0){
        string += i;
      }

      result.push(string);

  }
  return result;
}

```

---

### Approach - 2

```javascript
var codeDecode = (n) => {
  let result = [];

  for (let i = 1; i <=n; i++){
    let string = '';

    if (i % 3 === 0){
      string += "Code";
    }

    if (i % 5 === 0){
      string += "Decode";
    }

    if (string.length === 0){
      string += i;
    }

    result.push(string);
  }

  return result;
}
```

---

### Approach - 3

```javascript
var codeDecode = (n) => {
  let result = [];

  for (let i = 1; i <=n; i++){
    let string = '';

    if (i % 3 === 0){
      string += "Code";
    }

    if (i % 5 === 0){
      string += "Decode";
    }

    if (string.length === 0){
      string += i;
    }

    result.push(string);
  }

  return result;
}
```

---

```javascript
var codeDecode = (n) => {
  let result = [];

  for (let i = 1; i <= n; i++){
    if (i % 15 === 0){
      result.push("CodeDecode");
    } else if (i % 3 === 0){
      result.push("Code");
    } else if (i % 5 === 0){
      result.push("Decode");
    } else {
      result.push(i.toString())
    }
  }
  return result;  
}

console.log(codeDecode(15))

```

---

