function logger() {
    const name = "Timesheet";
    console.log("Clock In");
    console.log("Clock Out");
    console.log("Clock In");
    console.log("Clock Out");

}

logger(name);


const title = "Leave Balance";

function balance(num1, num2) {
    console.log(num1 + num2);
    console.log(num1 - num2);
}

balance(20, 5);

const assignment = "Functions and Parameters";
const course = "Digital Media Programming";

function toUpper(text) {
    const upperCased = text.toUpperCase();
    console.log(upperCased);

}

toUpper(assignment);
toUpper(course);

const house = {
    companyName: "Lennar",
    neighborhoodName: "Silos",
    titleId: 12345,
    houseProperties: ["color", "floors", "rooms"]
  };


console.log(house.houseProperties);


