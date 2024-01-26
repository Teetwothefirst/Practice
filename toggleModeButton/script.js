console.log("Holla Linked")

const toggleButton = document.getElementById("togg");
toggleButton.addEventListener('click', ()=>{
    document.body.classList.toggle('btn-toggle');
    toggleButton.classList.toggle('btn-toggle');

    localStorage.setItem('toggleState', document.body.classList.contains('btn-toggle')? 'true' : 'false');
})

window.addEventListener('load', ()=>{
    // Retrieve the saved state on the local storage true or false
    const stateSaved = localStorage.getItem('toggleState') === 'true';

    const toggleState = document.body.classList.contains('btn-toggle');

    if (stateSaved !== toggleState){
        document.body.classList.toggle('btn-toggle');

        toggleButton.classList.toggle('btn-toggle');
    }
})