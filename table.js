
var Fail = "Fail";
var Pass = "Pass";
var studentData = [



    { firstName: "Olivia", lastName: "Smith", rollNo: 1, marks: 35, grade: Fail },
    { firstName: "Liam", lastName: "Johnson", rollNo: 2, marks: 50, grade: Fail },
    { firstName: "Emma", lastName: "Williams", rollNo: 3, marks: 32, grade: Fail },

    // { firstName: "Chloe", lastName: "Rogers", rollNo: 39, marks: 38, grade: Fail },
    // { firstName: "Matthew", lastName: "Adams", rollNo: 40, marks: 66, grade: Pass },
    // { firstName: "Victoria", lastName: "Diaz", rollNo: 41, marks: 71, grade: Pass },
    // { firstName: "Samuel", lastName: "Stewart", rollNo: 42, marks: 52, grade: Fail },
    // { firstName: "Riley", lastName: "Morris", rollNo: 43, marks: 88, grade: Pass },
    // { firstName: "Joseph", lastName: "Bailey", rollNo: 44, marks: 84, grade: Pass },
    // { firstName: "Penelope", lastName: "Reed", rollNo: 45, marks: 75, grade: Pass },
    // { firstName: "Carter", lastName: "Torres", rollNo: 46, marks: 74, grade: Pass },
    // { firstName: "Layla", lastName: "Gray", rollNo: 47, marks: 73, grade: Pass },
    // { firstName: "Owen", lastName: "James", rollNo: 48, marks: 72, grade: Pass },
    // { firstName: "Zoey", lastName: "Watson", rollNo: 49, marks: 66, grade: Pass },
    // { firstName: "Wyatt", lastName: "Brooks", rollNo: 50, marks: 57, grade: Fail },
    // { firstName: "Nora", lastName: "Brooks", rollNo: 51, marks: 58, grade: Fail },
    // { firstName: "Dylan", lastName: "Sanders", rollNo: 52, marks: 52, grade: Fail },
    // { firstName: "Lily", lastName: "Cooper", rollNo: 53, marks: 51, grade: Fail },
    // { firstName: "Grayson", lastName: "Peterson", rollNo: 54, marks: 64, grade: Pass },
    // { firstName: "Eleanor", lastName: "Cox", rollNo: 55, marks: 62, grade: Pass },
    // { firstName: "Levi", lastName: "Young", rollNo: 56, marks: 60, grade: Pass },
    // { firstName: "Hannah", lastName: "Howard", rollNo: 57, marks: 80, grade: Pass },
    // { firstName: "David", lastName: "Wood", rollNo: 58, marks: 30, grade: Fail },
    // { firstName: "Lillian", lastName: "Russell", rollNo: 59, marks: 70, grade: Pass },
    // { firstName: "Isaac", lastName: "Spencer", rollNo: 60, marks: 80, grade: Pass },
    // { firstName: "Aubrey", lastName: "Kim", rollNo: 61, marks: 40, grade: Fail },
    // { firstName: "Luke", lastName: "Simpson", rollNo: 62, marks: 51, grade: Fail },
    // { firstName: "Addison", lastName: "Wright", rollNo: 63, marks: 36, grade: Fail },
    // { firstName: "Gabriel", lastName: "Ortiz", rollNo: 64, marks: 99, grade: Pass },
    // { firstName: "Natalie", lastName: "Perez", rollNo: 65, marks: 71, grade: Pass },
    // { firstName: "Anthony", lastName: "Sanders", rollNo: 66, marks: 75, grade: Pass },
    // { firstName: "Brooklyn", lastName: "Hill", rollNo: 67, marks: 45, grade: Fail },
    // { firstName: "Jaxon", lastName: "Martinez", rollNo: 68, marks: 48, grade: Fail },
    // { firstName: "Savannah", lastName: "Freeman", rollNo: 69, marks: 44, grade: Fail },
    // { firstName: "Julian", lastName: "Palmer", rollNo: 70, marks: 39, grade: Fail },
    // { firstName: "Alexa", lastName: "Campbell", rollNo: 71, marks: 38, grade: Fail },
    // { firstName: "Christopher", lastName: "Nguyen", rollNo: 72, marks: 75, grade: Pass },
    // { firstName: "Audrey", lastName: "Edwards", rollNo: 73, marks: 36, grade: Fail },
    // { firstName: "Joshua", lastName: "Bryant", rollNo: 74, marks: 47, grade: Fail },
    // { firstName: "Arianna", lastName: "Flores", rollNo: 75, marks: 99, grade: Pass },
    // { firstName: "Andrew", lastName: "Richards", rollNo: 76, marks: 64, grade: Pass },
    // { firstName: "Ellie", lastName: "Foster", rollNo: 77, marks: 62, grade: Pass },
    // { firstName: "Samuel", lastName: "Parker", rollNo: 78, marks: 53, grade: Fail },
    // { firstName: "Skylar", lastName: "Cook", rollNo: 79, marks: 50, grade: Fail },
    // { firstName: "Brandon", lastName: "Gonzales", rollNo: 80, marks: 30, grade: Fail },
    // { firstName: "Violet", lastName: "Carter", rollNo: 81, marks: 78, grade: Pass },
    // { firstName: "Tyler", lastName: "Mitchell", rollNo: 82, marks: 96, grade: Pass },
    // { firstName: "Caroline", lastName: "Perez", rollNo: 83, marks: 95, grade: Pass },
    // { firstName: "John", lastName: "Turner", rollNo: 84, marks: 36, grade: Fail },
    // { firstName: "Samantha", lastName: "Powell", rollNo: 85, marks: 95, grade: Pass },
    // { firstName: "Lincoln", lastName: "Matthews", rollNo: 86, marks: 75, grade: Pass },
    // { firstName: "Scarlett", lastName: "Fisher", rollNo: 87, marks: 84, grade: Pass },
    // { firstName: "Evan", lastName: "Armstrong", rollNo: 88, marks: 82, grade: Pass },
    // { firstName: "Paisley", lastName: "Price", rollNo: 89, marks: 75, grade: Pass },
    // { firstName: "Nicholas", lastName: "Gray", rollNo: 90, marks: 71, grade: Pass },
    // { firstName: "Emilia", lastName: "Kim", rollNo: 91, marks: 76, grade: Pass },
    // { firstName: "Adam", lastName: "Gibson", rollNo: 92, marks: 91, grade: Pass },
    // { firstName: "Clara", lastName: "Simpson", rollNo: 93, marks: 90, grade: Pass },
    // { firstName: "Ryan", lastName: "Ellis", rollNo: 94, marks: 36, grade: Fail },
    // { firstName: "Adalyn", lastName: "Richardson", rollNo: 95, marks: 52, grade: Fail },
    // { firstName: "Charles", lastName: "Bates", rollNo: 96, marks: 80, grade: Pass },
    // { firstName: "Maya", lastName: "Thomas", rollNo: 97, marks: 81, grade: Pass },
    // { firstName: "Christian", lastName: "Patel", rollNo: 98, marks: 77, grade: Pass },
    // { firstName: "Camila", lastName: "Hines", rollNo: 99, marks: 49, grade: Fail },
    // { firstName: "Jose", lastName: "Wood", rollNo: 100, marks: 100, grade: Pass }

];


let table = document.querySelector("#myTable");

let tablebody = document.querySelector(".table-body");

studentData.forEach(function row(valve) {
    let tr = tablebody.insertRow();

    Object.values(valve).forEach(function objPush(Val) {
        tr.insertCell().textContent = Val;
    });
});


////POPPING UP


function openPopUp() {

    document.querySelector(".modal").style.display = "block";
    console.log("PopUp");

}



////FETCHING DATA    

function fetchingData() {

    var fn = document.querySelector(".first-name");
    var ln = document.querySelector(".last-name");
    var rno = document.querySelector(".roll-no");
    var mrks = document.querySelector(".marks");
    var elementArray = [fn, ln, rno, mrks];

    for (let i = 0; i < elementArray.length; i++) {
        if (elementArray[i].value == "") {
            elementArray[i].setAttribute("required", "required");
        }
    }

    var obj = {
        firstName: fn.value,
        lastName: ln.value,
        rollNo: Number(rno.value),
        marks: Number(mrks.value),
    };

    console.log("Fetching Data");
    return obj;


}


////VALIDATION FUNCTION    


function validateData(obj) {



    var num = obj.marks;

    if (!(Number.isNaN(num))) {
        if (num >= 60) {
            obj["grade"] = "Pass";
        }
        else {
            obj["grade"] = "Fail";
        }

    }

    console.log("Validating Data");

}


////SAVING DATA FUNCTION


function saveData(e) {

    e.preventDefault();

    var obj = fetchingData();
    document.querySelector(".first-name").value="";
    document.querySelector(".last-name").value="";
    document.querySelector(".roll-no").value="";
    document.querySelector(".marks").value="";
    validateData(obj);


    console.log("Saving Data");

    console.log(obj);
    studentData.unshift(obj);

    let tr = table.insertRow(1);
    let valve = studentData[0];
    console.log(valve);
    var i = 0;
    Object.values(valve).forEach(function objPush(Val) {
        tr.insertCell(i).innerHTML = Val;
        i++;
        // console.log(Val);
    });
    document.querySelector(".modal").style.display = "none";
    

}



////DELETING FUNCTION


function deleteData() {

    // display.removeChild(table);
    // studentData.pop();
    // tr.remove();
    // display.removeChild(table);
    // console.table(studentData);
    let del = studentData.length;
    studentData.pop();
    if (del > 0) {
        document.querySelector("#myTable").deleteRow(del);
    }



}


////CLOSING FUNCTION

function close() {

    // e.preventDefault();

    console.log("close");
    document.querySelector(".modal").style.display = "none";

}


