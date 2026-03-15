const person = {
    fname: "ajay",
    lname: "bisht",
    age: 34
};

let x;
for (x in person) {
    console.log("person details: " + x + ":" + person[x]);  //we can use person.x
}