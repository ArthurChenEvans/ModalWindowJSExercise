"use strict";

const modalContainer = document.querySelector(".modal-container");
const modals = document.querySelectorAll(".modal");

for (let modal = 0; modal < modals.length; modal++)
{
    modals[modal].addEventListener('click', () => modalContainer.classList.remove('hidden'))
}

document.addEventListener('keydown', (e) =>
{
    if (e.key == "Escape")
    {
        modalContainer.classList.add('hidden');
    }
});
