const studentForm = document.getElementById("studentForm");
const studentContainer = document.querySelector(".students");
const nameInput = studentForm['name'];
const ageInput = studentForm['age'];
const rollInput = studentForm['roll'];

const students = JSON.parse(localStorage.getItem("students")) || [];

const addStudents = (name, age, roll) =>{
    students.push({
        name,
        age,
        roll,
    });

    localStorage.setItem("students", JSON.stringify(students));


    return {name, age, roll};
};

const createSudentElement = ({name, age, roll}) =>{
    // create elements
    const studentDiv = document.createElement("div");
    const studentName = document.createElement("h2");
    const studentAge = document.createElement("p");
    const studentRoll = document.createElement("p");
// fill the content
    studentName.innerText ="student name:" + name;
    studentAge.innerText ="student age:" + age;
    studentRoll.innerText ="student roll:" + roll;
// add to the dom
    studentDiv.append(studentName,studentAge,studentRoll)
    studentContainer.appendChild(studentDiv);

    studentContainer.style.display = students.length === 0 ? "none" : "flex"


};

studentContainer.style.display = students.length === 0 ? "none" : "flex"

students.forEach(createSudentElement)

studentForm.onsubmit = (e) => {
    e.preventDefault();

    const newStudent = addStudents(
        nameInput.value,
        ageInput.value,
        rollInput.value
    )

    createSudentElement(newStudent)
    nameInput.value = ""
    ageInput.value = ""
    rollInput.value = ""
};