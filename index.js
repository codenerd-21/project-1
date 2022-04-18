const contacts = [
    {
        name: 'Braxton',
        email: 'braxton.toomer1@gmail.com',
        phone: 7075834446
    },
    {
        name: 'Kevin',
        email: 'kw1017@gmail.com',
        phone: 8582055523
    },
];

document.getElementById('display-contacts').innerHTML = JSON.stringify(contacts);



// window.onload = function() {
// 	document.getElementById('display-contacts').innerHTML = Object.values(contacts);
// }
// document.getElementById("display-contacts").innerHTML = contacts.name;

// Display all existing contacts
// function displayContacts() {
// 	let book = document.getElementById('display.contacts');
// 	book.textContent = contacts;
// }

// Display/Render the existing contacts
// How to use the input values and create that contact object
// How to push that object into the contacts array