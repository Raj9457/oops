// DRY - Do Not Repeat Yourself

class BanckAccount {
  constructor(customerName, balance) {
    this.customerName = customerName;
    this.balance = balance;
    this.accountNumber = Date.now();
  }
}

BankAccount.prototype.deposit = function (amount) {
  //method
  this.balance += amount;
};
BankAccount.prototype.withdraw = function (amount) {
  //method
  this.balance -= amount;
};
class CurrentAccount {
  constructor(customerName, balance) {
    this.customerName = customerName;
    this.balance = balance;
    this.accountNumber = Date.now();
  }
}

CurrentAccount.prototype.deposit = function (amount) {
  //method
  this.balance += amount;
};
CurrentAccount.prototype.withdraw = function (amount) {
  //method
  this.balance -= amount;
};
