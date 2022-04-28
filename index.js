const contacts = [
    {
        name: 'sample_contact_1',
        email: 'sample_email_1',
        phone: 1234567890
    },
    {
        name: 'sample_contact_2',
        email: 'sample_email_2',
        phone: 9876543210
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