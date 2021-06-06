
document.getElementById("enter").addEventListener('click', entersite);

console.log(enter);

function entersite(e){
    
    window.location.href='/index'

}

let checkbox = document.querySelector('input[name=theme]');
checkbox.addEventListener('change',function(){
    if(this.checked){
        document.documentElement.setAttribute('data-theme','dark');
    }else{
        document.documentElement.setAttribute('data-theme','light');
    }
})