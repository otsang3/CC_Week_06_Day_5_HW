document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const newItemFormSubmit = document.querySelector('#new-item-form');
  newItemFormSubmit.addEventListener('submit', handleNewItemFormSubmit);

  const deleteButton = document.querySelector('#delete-all');
  deleteButton.addEventListener('click', handleDeleteButton);

})

  const handleDeleteButton = function (event) {
    const petList = document.querySelector('#pet-list');
    petList.innerHTML = '';
  }


  const handleNewItemFormSubmit = function() {
    event.preventDefault();

    const petListItem = createPetList(event.target);
    const petList = document.querySelector('#pet-list')
    petList.appendChild(petListItem);

    event.target.reset();
  }

  const createPetList = function (event) {
    const newPetList = document.createElement('ul');
    newPetList.classList.add('pet-list-item')

    const name = document.createElement('p');
    name.textContent = event.name.value;
    newPetList.appendChild(name);

    const age = document.createElement('p');
    age.textContent = event.age.value;
    newPetList.appendChild(age);

    const type = document.createElement('p');
    type.textContent = event.type.value;
    newPetList.appendChild(type);

    return newPetList;
  }
