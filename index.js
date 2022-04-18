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

document.getElementById('display-contacts').innerHTML = JSON.stringify(contacts, null, 2);

// function addContact() {



// }




// let display = document.getElementById("display-contacts");
// window.onload = function() {
// 	let entry = "";
// 	for (const contact in contacts) {
// 		console.log(entry += contacts[contact]);
// 	};
// }
	// document.getElementById('display-contacts').innerHTML = Object.values(contacts);


// Display all existing contacts
// function displayContacts() {
// 	let book = document.getElementById('display.contacts');
// 	book.textContent = contacts;
// }

// Display/Render the existing contacts
// How to use the input values and create that contact object
// How to push that object into the contacts array