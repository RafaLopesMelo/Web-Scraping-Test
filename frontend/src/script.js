document.querySelector('.btn')
.addEventListener('click', 
    async () => await fetch('http://localhost:3333', {mode: 'no-cors'}))
