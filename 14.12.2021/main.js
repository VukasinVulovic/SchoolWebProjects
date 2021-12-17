function showDialog(notif_text, notif_title, notif_icon) {
    let icon_src = '';

    switch(notif_icon) { //provera ikonice
        case '1':
            icon_src = './images/clouds.png';
            break;

        case '2':
            icon_src = './images/rain.png';
            break;

        case '3':
            icon_src = './images/sun.png';
            break;

        default:
            icon_src = './images/clouds.png'
    }

    let container = document.querySelector('.container');

    //div container
    let notif = document.createElement('div'); //napravi element
    notif.setAttribute('class', 'notification'); //postavi atribute
    
    //img icon
    let icon = document.createElement('img'); //napravi element
    icon.setAttribute('class', 'icon'); //postavi atribute
    icon.setAttribute('src', icon_src);
    
    //div text
    let text = document.createElement('div'); //napravi element
    text.setAttribute('class', 'text'); //postavi atribute
    
    //span title
    let title = document.createElement('h3'); //napravi element
    title.setAttribute('class', 'title'); //postavi atribute
    title.innerHTML = notif_title;
    
    //span info 
    let info = document.createElement('span'); //napravi element
    info.setAttribute('class', 'info'); //postavi atribute
    info.innerHTML = notif_text;
    
    //span exit button
    let exit_btn = document.createElement('span'); //napravi element
    exit_btn.setAttribute('class', 'exit-btn'); //postavi atribute
    exit_btn.innerHTML = '&#215;';
    

    //postavljanje dece u roditelje
    notif.appendChild(icon);
    
    text.appendChild(title);
    text.appendChild(info);
    
    notif.appendChild(text);
    notif.appendChild(exit_btn);
    
    container.appendChild(notif);
    

    //dodavanje dogadjaja
    exit_btn.addEventListener('click', () => {
        notif.remove(); //izbrisi notifikaciju
    });

    exit_btn.addEventListener('mouseover', () => {
        notif.style.opacity = 0.9; //izbrisi notifikaciju
    });

    exit_btn.addEventListener('mouseleave', () => {
        notif.style.opacity = 1; //izbrisi notifikaciju
    });
}

let title = document.querySelector('.controls .text .title');
let info = document.querySelector('.controls .text .info');
let icon = document.querySelector('.controls .text .icon');

document.querySelector('.controls .show').addEventListener('click', () => {
    if(title.value.length == 0 || title.value.length > 37) {
        alert('Title is wrong! (must be between 1 and 37 characters)');
        return; //preskoci kod dole
    }

    if(info.value.length == 0 || info.value.length > 53) {
        alert('Info is wrong! (must be between 1 and 53 characters)');
        return; //preskoci kod dole
    }

    showDialog(info.value, title.value, icon.value); //pozovi funkciju
});

// <div class="notification">
//     <img src="./images/clouds.png" class="icon">

//     <div class="text">
//         <h3 class="title"> Notification Title </h3>
//         <span class="info"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. </span>
//     </div>

//     <span class="exit-btn"> &#215; </span>
// </div>