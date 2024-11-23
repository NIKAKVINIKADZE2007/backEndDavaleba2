//1
// class Car {
//   constructor(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }
// }

// class ElectricCar extends Car {
//   constructor(make, model, year, battery) {
//     super(make, model, year);
//     this.battery = battery;
//   }
// }

// const electrictCar = new ElectricCar('tesla', 'idk', '2019', '63');

//2

// class Library {
//   #bookList = [];
//   addBook(author, book, year) {
//     this.#bookList.push({ author, book, year });
//   }

//   removeBook(bookName) {
//     this.#bookList.filter((element, index) =>
//       element.book === bookName ? this.#bookList.splice(index, 1) : element
//     );
//   }

//   listBooks() {
//     console.log(this.#bookList);
//   }
// }

// const Books = new Library();

// Books.addBook('vinme', 'idk', '2000');
// Books.addBook('jiul verni', '15 wlis kapitani', '1980');
// Books.removeBook('15 wlis kapitani');
// Books.addBook('jiul verni', '80 kilometri wyal qvesh', '1970');
// Books.removeBook('80 kilometri wyal qvesh');
// Books.addBook('Tomas mainrid', 'utavo mxedari', '1950');

// Books.listBooks();

// 3
// class Employ {
//   calculateSalary(hoursWorked, hourlyRate) {
//     console.log(hoursWorked * hourlyRate);
//   }
// }

// let employ1 = new Employ();

// employ1.calculateSalary(40, 12);

//4

// class ShoppingCart {
//   #cart = [];

//   addItem(itemName, itemPrice, itemAmount) {
//     const alreadyExist = this.#cart.find((el) => el.itemName === itemName);

//     if (alreadyExist) {
//       alreadyExist.itemAmount += itemAmount;
//     } else {
//       this.#cart.push({ itemName, itemPrice, itemAmount });
//     }
//   }

//   deleteItem(name) {
//     this.#cart.filter((el, index) =>
//       el.itemName === name ? this.#cart.splice(index, 1) : el
//     );
//   }

//   updateItem(name, newAmount) {
//     this.#cart.filter((el) =>
//       el.itemName === name ? (el.itemAmount = newAmount) : el
//     );
//   }

//   calculateTotal() {
//     let totalPrice = 0;
//     this.#cart.forEach((el) => (totalPrice += el.itemAmount * el.itemPrice));
//     console.log(totalPrice);
//   }
// }

// const cart = new ShoppingCart();

// cart.addItem('idk', 1.99, 2);
// cart.addItem('idk', 1.99, 2);
// cart.addItem('rame', 1.99, 6);
// cart.deleteItem('rame');
// cart.updateItem('idk', 3);
// cart.calculateTotal();

class CarFactory {
  #allCars = [];

  addCar(model, price) {
    this.#allCars.push({
      year: Math.floor(Math.random() * 14) + 2010,
      model,
      price,
    });
  }

  deleteCar(model) {
    this.#allCars.filter((el, index) =>
      el.model === model ? this.#allCars.splice(index, 1) : el
    );
  }
  updateCar(model, newPrice) {
    let car = this.#allCars.find((el) => el.model === model);

    car.newPrice = newPrice;
  }

  getAllCars() {
    console.log(this.#allCars);
  }
}

let factory = new CarFactory();

factory.addCar('ferari', 350000);
factory.addCar('mercedes', 45000);
factory.updateCar('mercedes', 25000);
factory.getAllCars();
