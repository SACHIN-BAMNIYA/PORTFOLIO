const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

document.addEventListener('DOMContentLoaded', () => {
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      // Your code for handling card click can go here
    });
  });
});

/* PROJECT */
function openModal(card) {
  const modal = document.querySelector('#modal');
  const modalContent = modal.querySelector('.modal-content');
  const projectTitle = card.querySelector('h3').innerText;
  const projectDescription = card.querySelector('p').innerText;

  modalContent.querySelector('h3').innerText = projectTitle;
  modalContent.querySelector('p').innerText = projectDescription;

  modal.style.display = 'block';
}

function closeModal() {
  const modal = document.querySelector('#modal');
  modal.style.display = 'none';
}

/* SIDEBAR */
function openNav() {
    document.getElementById("mySidenav").style.left = "0";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.left = "-250px";
  }
