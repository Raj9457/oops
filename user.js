class User {
  constructor(name, email) {
    (this.name = name), (this.email = email);
  }
  viewData() {
    console.log("this is the details of the students", this.name, this.email);
  }
}

let newuser = new User("Rajat", "abc@gmail.com");

class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }
  editData(newname, newemail) {
    this.name = newname;
    this.email = newemail;
    console.log("change the data");
  }
  newData() {
    console.log(this.name, this.email);
  }
}

let newadmin = new Admin("admin", "admin@gmail.com");
