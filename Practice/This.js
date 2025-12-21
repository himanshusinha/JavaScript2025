// this keyword
const user = {
  userName: "Himanshu",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.userName} ,welcome to the website`);
    // console.log(this);
  },
};
// console.log(user.welcomeMessage());
// user.userName = "sam";
// user.welcomeMessage();
console.log(this);

function message() {
  const userName = "John";
  console.log(this.userName);
}
message();
