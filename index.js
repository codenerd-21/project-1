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

const addContact = (e)=> {
	let contact = {
		name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value
	}
	contacts.push(contact);
	document.getElementById('display-contacts').innerHTML = JSON.stringify(contacts, null, 2);
	const inputs = document.querySelectorAll('#name, #email, #phone');
	inputs.forEach(input => {
		input.value = '';
	});
};   

document.addEventListener('DOMContentLoaded', ()=> {
	document.getElementById('submit-reset-btn').addEventListener('click', addContact);
});

document.getElementById('display-contacts').innerHTML = JSON.stringify(contacts, null, 2);



// Display/Render the existing contacts
// How to use the input values and create that contact object
// How to push that object into the contacts array