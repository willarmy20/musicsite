//tells feedback.ejs to request feedback.json data from feedback.js then displays on page
fetch('/api')
.then(response => response.json())
.then(data=>{
    dispFeedback(data);
})

let form = document.querySelector('#feedbackForm');
form.addEventListener('submit',(e) => {
    e.preventDefault();
    fetch('/api',{
        method:'POST',
        headers:{
            'Content-type': 'application/json; charset=UTF-8'
        },
        body:JSON.stringify({
            name:document.getElementById('feedbackName').value,
            title:document.getElementById('feedbackTitle').value,
            message:document.getElementById('feedbackMessage').value
        })
    })
    .then(response => response.json())
    .then(data=>{
        dispFeedback(data);

    })
    form.reset();
})//eo event listener






const dispFeedback = (data)=>{
    let message = "";
    data.forEach((element,index)=>{
        message+= `
        <div class="comment">
        <p>Name: ${element.name}</p>
        <p>Title: ${element.title}</p>
        <p class="commentMessage">Message:<br>${element.message}</p>
        </div>
        
        `;
    })

    let feedbackMessages = document.querySelector('#messageDisp');
    feedbackMessages.innerHTML = message;
}

