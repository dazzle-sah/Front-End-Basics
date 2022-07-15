let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button)=> {
   
    button.addEventListener('click' , (e)=>{

        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'C'){
            string="";
            document.querySelector('input').value = string;
        }

        else if (e.target.innerHTML == 'x'){
            string = string.substring(0,string.length-1);
            document.querySelector('input').value = string;
        }

        else if(e.target.innerHTML == undefined){
            throw new console.error('ERROR');
            document.querySelector('input').value = 'error';

        }


    })
   
})