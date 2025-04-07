function BankAccount(customerName, balance = 0) {
  this.customerName = customerName; //properties
  this.accountNumber = Date.now();
  this.balance = balance;

  this.deposit = function (amount) {
    //method
    this.balance += amount;
  };
  this.withdraw = (amount) => {
    this.balance -= amount;
  };
}

let accounts = [];
const accountdetails = new BankAccount("Rajat", 100);
accountdetails.deposit(500);
accountdetails.withdraw(200);

const accountForm = document.querySelector("#accountForm");
const customerName = document.querySelector("#customerName");
const balance = document.querySelector("#balance");

accountForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let account = new BankAccount(customerName.value, +balance.value);
  accounts.push(account);
  console.log(account);
});

const depositForm = document.querySelector("#depositForm");
const accountNumber = document.querySelector("#accountNumber");
const amount = document.querySelector("#amount");

depositForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let account = accounts.find(
    (account) => account.accountNumber == accountNumber.value
  );

  account.deposit(amount.value);

  console.log(accounts);
});
