/*
 *
 **
 ***
 ****
 *****
 */

function pattern(row) {
  for (let i = 1; i <= row; i++) {
    let num = "";
    for (let j = 1; j <= i; j++) {
      num += "*";
    }
    console.log(num);
  }
}
pattern(5);
