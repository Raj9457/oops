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

BankAccount.prototype.deposit = function (amount) {
  //method
  this.balance += amount;
};

let RajatAccount = new BankAccount("Rajat");

RajatAccount.deposit(100);
