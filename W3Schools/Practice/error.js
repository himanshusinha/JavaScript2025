try {
  let x = y;
} catch (error) {
  console.log("Error occured", error);
}

try {
  console.log("Try block");
} catch (error) {
  console.log(error, "error block");
} finally {
  console.log("Execute these code");
}

function checkAge(age) {
  if (age < 18) {
    throw new Error("Age must be 18 or above");
  }
  console.log("Access granted");
}

try {
  checkAge(16);
} catch (error) {
  console.log(error.message);
}

// try → used to write code that may cause an error
// catch → used to handle the error if it occurs
// finally → always executes whether an error occurs or not
