window.addEventListener('load', getAllStudents);
document.getElementById('form').addEventListener('submit', creteStudent)




async function getAllStudents() {
    const response = await fetch('http://localhost:3030/jsonstore/collections/students');

    const data = await response.json();

    var innerHtml = Object.values(data).map(creteBodyString).join('');

    document.querySelector('tbody').innerHTML = innerHtml;

    console.log(innerHtml);
}


function creteBodyString(data) {
    const result =
        `<tr>
    <td>${data.firstName} </td>
    <td>${data.lastName} </td>
    <td>${data.facultyNumber} </td>
    <td>${data.grade} </td>
    </tr>`;

    return result;
}


async function creteStudent(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const facultyNumber = formData.get('facultyNumber');
    const grade = formData.get('grade');

    const response = await fetch('http://localhost:3030/jsonstore/collections/students', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, facultyNumber, grade }),
    });

    const data = await response.json();

    if (!response.ok) {
        return alert(data.message);
    }
    getAllStudents();


}