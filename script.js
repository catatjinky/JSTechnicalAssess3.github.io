 console.log("connected");

//1. Write a Javascript program wherein you add rows to an existing table in HTML every time you click a button 1

// addTableRow = () => {
//       const getTable = document.getElementById('personal-table');
    
//       const newRow = getTable.insertRow(-1);
//       const cell1 = newRow.insertCell(0);
//       const cell2 = newRow.insertCell(1);
    
//       cell1.innerHTML = 'Cell 1';
//       cell2.innerHTML = 'Cell 2';
//     }

//2. Coding Exam Assessment 3 Exercise 1

class Car {
    constructor(brand, model, year, color, mileage, price)
    {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.mileage = mileage;
        this.price = price;
    }
}

const car1 = new Car("Toyota", "Camry", 2019, "Blue", 5000, 22000);
const car2 = new Car("THonda", "Accord", 2020, "Black", 8000, 25000);
const car3 = new Car("Nissan", "Altima", 2018, "Red", 10000, 19000);
const cars = [car1, car2, car3];

function calculateAveragePrice (carsArray) {
    const total = carsArray.reduce((accumulator, current) => 
    {
        return accumulator + current.price;
    }, 0);

    const average = total / carsArray.length;
    return average;
}

const averagePrice = calculateAveragePrice(cars);
console.log("The average of all the prices is:" + averagePrice);

//3. Coding Exam Assessment 3 Exercise 2

class Book {
constructor(title, author, pages, year, genre) 
    {

        this.title = title;
        this.author = author;
        this.pages = pages;
        this.year = year;
        this.genre = genre
    }
}

const book1 = new Book("The Catcher in the Rye", "J.D. Salinger", 224, 1951, "Fiction");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 324, 1960, "Fiction");
const book3 = new Book("The Hobbit", "J.R.R. Tolkien", 304, 1937, "Fantasy");

function getBookTitlesByGenre(books, genre) {
    const titles = [];
    for (let i = 0; i < books.length; i++) {
      if (books[i].genre === genre) {
        titles.push(books[i].title);
      }
    }
    return titles;
  }
  
const fictionBooks = getBookTitlesByGenre([book1, book2, book3], "Fiction");
console.log(fictionBooks); // Output: ["The Catcher in the Rye", "To Kill a Mockingbird"]

//4. Coding Exam Assessment 3 Exercise 3

//Instructions:
//1.Write a function that takes the shopping cart array as a argument/parameter and returns the total cost of all the items in the cart.


const cart = [
    {name: "Shirt", price:20, quantity:2},
    {name: "Pants", price:30, quantity:5},
    {name: "Socks", price:5, quantity:7},
    {name: "Hat", price:40, quantity:8},
    {name: "Shoes", price:70, quantity:10}
]

function calculateTotalCost(cart){
    let totalCost = 0;

    for (let i = 0; i < cart.length; i++)
    {
        const itemCost = cart[i].price * cart[i].quantity;
        totalCost += itemCost;
    }
    return `Total cost: ${totalCost}`;
}
console.log(calculateTotalCost(cart));

//2.Write a function that takes the shopping cart array as a argument/parameter and returns an array of all items that has more than five stocks and its price is greater than or equal to 20.

function filterCart(cart) {
    const filteredCart = cart.filter(item => item.quantity > 5 && item.price >= 20);
    return filteredCart;
}

  console.log(filterCart(cart));

  function filterCartByPrice(cart, amount) {
    const filteredCart = cart.filter(item => item.price > amount);
    return filteredCart;
}
  console.log(filterCartByPrice(cart, 15));

//5. Coding Exam Assessment 3 Exercise 3

const students = [
    { name: "Khelly", grades: [78, 92, 85, 88] },
    { name: "Jared", grades: [90, 86, 94, 89] },
    { name: "Aloi", grades: [72, 84, 80, 76] },
    { name: "Alvin", grades: [68, 72, 65, 70] },
]

const averageGrades = calculateAverageGrades(students);

function calculateAverageGrades(students) {
    return students.map((student) => {
      const totalGrades = student.grades.reduce((sum, grade) => sum + grade, 0);
      const averageGrade = totalGrades / student.grades.length;
      return {
        name: student.name,
        averageGrade: Number(averageGrade.toFixed(2)),
      };
    });
  }


console.log(averageGrades);
