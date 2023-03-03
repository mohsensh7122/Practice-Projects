// 1: Set the text of the <h1> element

document.querySelector('h1').textContent = 'Practice Project';

// 2: Set the color of the <h1> to a different color

document.querySelector('h1').style.color = 'red';

// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag

document.querySelector('.desc').innerHTML = '<span>The description</span>';

// 4: Set the class of the <ul> to 'list'

document.querySelector('ul').className = 'list';

// 5: Create a new list item and add it to the <ul>

const list = document.createElement('li');

document.querySelector('ul').append(list);

// 6: Change all <input> elements from text fields to checkboxes

const inputs = document.querySelectorAll('input');

for (let i = 0; i < inputs.length; i++){
    inputs[i].type = 'checkbox';
}

// 7: Create a <button> element, and set its text to 'Delete'
// Add the <button> inside the '.extra' <div>

const button = document.createElement('button');
button.textContent = 'Delete';
document.querySelector('.extra').append(button);

// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button

button.addEventListener('click', function(){
    document.querySelector('.extra').remove();
})