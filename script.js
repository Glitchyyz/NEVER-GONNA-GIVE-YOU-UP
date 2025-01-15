function changeColor() {
    const headers = document.querySelectorAll('.HEADDER');
    const label1 = document.querySelectorAll('.Imagedescription');
    const line = document.querySelectorAll('.vertical-line');
    const smallline = document.querySelectorAll('.small-vertical-line');
   if (document.body.style.backgroundColor == 'black')
   {
    document.body.style.backgroundColor = 'white';
    button.textContent = 'Dark Mode';
    button.style.color = 'black';
    document.getElementById("DARKMODEBUTTON").style.borderColor = 'black';
    headers.forEach(header => header.style.color = '#000000');
    label1.forEach(label => label.style.color = '#000000');
    line.forEach(div => div.style.backgroundColor = '#000000');
    smallline.forEach(div => div.style.backgroundColor = '#000000');
    button.style.backgroundColor = '#ffffff';
    
   }else 
   {
    document.getElementById("DARKMODEBUTTON").style.borderColor = 'white';
    line.forEach(div => div.style.backgroundColor = '#FFFFFF');
    document.body.style.backgroundColor = 'black';
    headers.forEach(header => header.style.color = '#ffffff');
    button.style.color = 'white';
    button.textContent = 'Light Mode';
    button.style.backgroundColor = '#000000';
    label1.forEach(label => label.style.color = '#ffffff');
    smallline.forEach(div => div.style.backgroundColor = '#ffffff');
   }
}

const button = document.querySelector('.circular-button');
button.addEventListener('mouseover', () => {
    button.style.cursor = 'pointer';
    button.style.transition = 'all 0.3s ease';
});
function MAGICBUTTONPRESSED(){
const gloweffect = document.querySelectorAll('.glow');

gloweffect.forEach(div => div.classList.add('glowBlue') ) ;
gloweffect.forEach(div => div.classList.remove('glow') ) ;

    
}
function MAGICBUTTONRELEASED(){
const gloweffect1 = document.querySelectorAll('.glowBlue');

gloweffect1.forEach(div => div.classList.add('glow') ) ;
gloweffect1.forEach(div => div.classList.remove('glowBlue') ) ;
}
/* script.js */
/* script.js */
const buttons = document.querySelectorAll('.Magic-Box');

buttons.forEach(button => {
    let glow = null;

    button.addEventListener('mouseenter', () => {
        if (!glow) {
            glow = document.createElement('div');
            glow.classList.add('glow');
            button.appendChild(glow);
        }
    });

    button.addEventListener('mousemove', (event) => {
        if (glow) {
            const rect = button.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            glow.style.left = `${x}px`;
            glow.style.top = `${y}px`;
        }
    });

    button.addEventListener('mouseleave', () => {
        if (glow) {
            glow.remove();
            glow = null;
        }
    });
});
function GAMESPAGE()
{
    window.location.href = "GamePage1.html";
}

