let notificationIcon = document.querySelector('.notification__icon');
let notificationContainer = document.querySelector('.notification-container');

notificationIcon.addEventListener('click', ()=> {
    notificationContainer.classList.toggle('hide');
})
