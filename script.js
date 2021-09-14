const autoyear = document.querySelector('#autoyear');

const date = new Date();
const getyear = date.getUTCFullYear();
autoyear.textContent=getyear; 