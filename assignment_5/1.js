class Validation {
  constructor(name) {
    this.name = name;
    this.error = [];
  }

  required() {
    if (this.name === "" || this.name === undefined || this.name === null) {
      this.error.push("Name required");
    }
    return this;
  }
  min() {
    if (this.name.length < 3) {
      this.error.push("Name should not be less than 3 character");
    }
    return this;
  }

  max() {
    if (this.name.length > 10) {
      this.error.push("Name should not be more than 10 character");
    }
    return this;
  }

  isValid() {
    return this.error.length === 0;
  }
}

function check(name) {
  const validationObject = new Validation(name);

  validationObject.required().min().max();

  if (validationObject.isValid()) {
    console.log("Name is valid");
  } else {
    console.log(validationObject.error);
  }
}

check("");
check("bhushannagpure");
check("bhushan");
