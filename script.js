const scriptURL = 'https://script.google.com/macros/s/AKfycbw0NJorOFF5RzHx72hcH0Poam70r02Ax3JyJEbzUlU8ewhsyruKosYZQ8JJa31qpTPu/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            console.log('Success!', response)
            msg.innerHTML = "Thank You For Subscribing!"
            setTimeout(function() {
                msg.innerHTML = "";
            }, 5000)
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
})