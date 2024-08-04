document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById('typetext');
    const text = "user?bat";
    const span = document.createElement('span');
    
    // span.textContent='|'
    span.classList.add('span');
    textElement.parentElement.appendChild(span);
    let time = 0;
    let index = 0;
    let isAdding = true;

    function typeWriter() {
        textElement.innerHTML = text.slice(0, index);
        
        if (isAdding) {
            if (index < text.length) {
                index++;
            } else {
                isAdding = true;
                time--;
                if(time < index){
                    setTimeout(typeWriter, 500);
                }
                // setTimeout(typeWriter, 120); 
                return;
            }
        } else {
            if (index > time) {
                index++;
            } else {
                isAdding = true;
                // time++;
                // if(time < 2){
                //     setTimeout(typeWriter, 1000);
                // }
                setTimeout(typeWriter, 50); 
                return;
                // break;
            }

        }
        setTimeout(typeWriter, 135); 
        // break;
    }

    typeWriter();
});
