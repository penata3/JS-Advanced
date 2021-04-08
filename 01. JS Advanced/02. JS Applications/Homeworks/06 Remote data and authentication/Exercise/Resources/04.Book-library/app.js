function solve() {
    document.getElementById('loadBooks').addEventListener('click', loadAllBooks);
    document.querySelector('form').addEventListener('submit', createBook);
    document.querySelector('table').addEventListener('click', deleteBook);
}

solve();



async function loadAllBooks() {

    const response = await fetch('http://localhost:3030/jsonstore/collections/books');
    const data = await response.json();

    const tableBody = document.querySelector('tbody');

    const tableContent = Object.values(data).map(createTableRow).join('\n');

    tableBody.innerHTML = tableContent;

}


async function createBook(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const title = formData.get('title');
    const author = formData.get('author');

    if (title.length < 1 || title == undefined || author.length < 1 || author == undefined) {
        return alert('All fields are required');
    }

    const response = await fetch('http://localhost:3030/jsonstore/collections/books', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, author })
    });



    if (!response.ok) {
        const error = await response.json();
        return alert(error.message);
    }

    event.target.reset();
    await loadAllBooks();

}

async function deleteBook(event) {
    const deleteButton = event.target;

    const bookId = deleteButton.parentElement.parentElement.getAttribute('id');

    const response = await fetch('http://localhost:3030/jsonstore/collections/books/' + bookId.toString(), {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' },
    });


    const data = await response.json();

    //bookIdconsole.log(response);
    console.log(bookId.toString());

    loadAllBooks();


}


function createTableRow(book) {

    const result =
        `<tr id='${book._id}'>
            <td>${book.title}</td>      
            <td>${book.author}</td>
            <td>
                <button>Edit</button>
                <button>Delete</button>
            </td>
        </tr>`
    return result;
}