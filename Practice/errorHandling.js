/*  
// Try Catch Finally and throw
try {
  // try block contains code that may cause an error
  const a = 10;
  console.log(a + b);
} catch (e) {
  // catch block handles the error if it occurs
  console.log("Error occurred:", e.message);
}

// Example 2
try {
  const user = {
    name: "John",
    age: 33,
  };
  console.log(user.name);
} catch (e) {
  console.log("Error occured", e.message);
}

// Example 3
try {
  x = a;
  console.log(x);
} catch (e) {
  console.log("Error occurred", e);
} finally {
  // always run error
  console.log("Finally");
}

// Example 4
try {
  let age = 15;
  if (age < 18) {
    throw new Error("Age must be 18");
  }
} catch (e) {
  console.log("Error occured", e.message);
}

// ========== Practice
try {
  let a = 10;
  let b = 0;

  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  let result = a / b;
  console.log(result);
} catch (error) {}
*/
function addNum(a, b) {
  try {
    if (a === undefined || b === undefined) {
      throw new Error("Both numbers are compulsory");
    }
    const sum = a + b;
    console.log("Sum of two number a & b is ", sum);
    return sum;
  } catch (error) {
    console.log("Error occured", error.message);
  }
}
addNum(2, 3);

function divide(a, b) {
  if (b === 0) {
    throw new Error("0 se divide nahi kar sakte");
  }
  return a / b;
}

try {
  console.log(divide(2, 3));
  console.log(divide(2, 0));
} catch (error) {
  console.log("Error:", error.message);
}

function print() {
  try {
    let a = 10;
    console.log(a);
    console.log(b);
  } catch (error) {
    console.log("Error occured", error.message);
  }
}

print();

function checkAge(age) {
  try {
    if (age < 18) {
      throw new Error("Age should not be less than 18");
    }
    console.log("Allowed");
  } catch (error) {
    console.log("Error", error.message);
  }
}
checkAge(19);

function conversion(str) {
  try {
    let num = Number(str);
    console.log("Conversion of string is", num);

    if (isNaN(num)) {
      throw new Error("Conversion failed: string is not a number");
    }
  } catch (error) {
    console.log("Error occurred", error.message);
  }
}
conversion("123");

const userInfo = {
  name: "Himanshu",
  // email: "himanshusinha011@gmail.com",
};

try {
  if (!userInfo.email) {
    throw new Error("email missing");
  }
} catch (error) {
  console.log("Error occured", error.message);
}

function loginValidation(username, password) {
  try {
    if (!username || !password) {
      throw new Error("Please fill all fields");
    }
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("Login attempt finished");
  }
}
loginValidation("himanshu", "123456");

function checkStatus(status) {
  try {
    if (status !== 200) {
      throw new Error("Not found");
    }
  } catch (error) {
    console.log("Error", error.message);
  }
}
checkStatus(200);
checkStatus(400);


function checkArray(arr){

  const num = [1,2,3,4,5]

  
}