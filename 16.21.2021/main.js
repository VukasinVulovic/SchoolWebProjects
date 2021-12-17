const tweets = document.querySelector('.tweets');
const add_button = document.querySelector('.new-tweet .add');

const username_inp = document.querySelector('#username');
const tag_inp = document.querySelector('#tag');
const images = document.querySelectorAll('.new-tweet .image-selector .image');

images[0].style.border = '2px solid rgba(235, 29, 29, 0.5)';

let selected_image = images[0].src;
let prev_image = images[0];


images.forEach(image => { //image selector
    image.addEventListener('click', () => {
        prev_image.style.border = '';
        image.style.border = '2px solid rgba(235, 29, 29, 0.5)';

        selected_image = image.src;
        prev_image = image;
    });
});

add_button.addEventListener('click', () => { //tweet
    addTweet(username_inp.value, '@' + tag_inp.value, selected_image);
});

//user_name, user_tag, tweet_image ----> append tweet

function addTweet(user_name, user_tag, tweet_image) {
    //tweet div
    const tweet = document.createElement('div');
    tweet.setAttribute('class', 'tweet');

    //header div
    const header = document.createElement('div');
    header.setAttribute('class', 'header');

    //header, h3
    const user = document.createElement('h3');
    user.setAttribute('class', 'user');
    user.innerHTML = user_name;

    //header, span
    const tag = document.createElement('span');
    tag.setAttribute('class', 'tag');
    tag.innerHTML = user_tag;

    //image, img
    const image = document.createElement('img');
    image.setAttribute('class', 'image');
    image.alt = 'tweet image';
    image.src = tweet_image;

    //icons, nav
    const icons = document.createElement('nav');
    icons.setAttribute('class', 'icons');

    let comments = Math.floor(Math.random() * 10);
    let likes = Math.floor(Math.random() * 10);
    let retweets = Math.floor(Math.random() * 10);

    //icon1, a
    const icon1 = document.createElement('a');
    icon1.setAttribute('class', 'icon');
    icon1.href = '/comment';
    icon1.innerHTML = '✍';

    const ammount1 = document.createElement('span');
    ammount1.setAttribute('class', 'ammount');
    ammount1.innerHTML = comments;
    icon1.appendChild(ammount1);


    //icon2, a
    const icon2 = document.createElement('a');
    icon2.setAttribute('class', 'icon');
    icon2.href = '/retweet';
    icon2.innerHTML = '🔃';

    const ammount2 = document.createElement('span');
    ammount2.setAttribute('class', 'ammount');
    ammount2.innerHTML = retweets;
    icon2.appendChild(ammount2);


    //icon3, a
    const icon3 = document.createElement('a');
    icon3.setAttribute('class', 'icon');
    icon3.href = '/like';
    icon3.innerHTML = '❤';
    icon3.style.color = 'white';

    const ammount3 = document.createElement('span');
    ammount3.setAttribute('class', 'ammount');
    ammount3.innerHTML = likes;
    icon3.appendChild(ammount3);


    //icon4, a
    const icon4 = document.createElement('a');
    icon4.setAttribute('class', 'icon');
    icon4.href = '/delete';
    icon4.innerHTML = '❌';

    icon4.addEventListener('click', e => {
        e.preventDefault();
        tweet.remove();
    });

    //adding childern to parents

    header.appendChild(user);
    header.appendChild(tag);
    tweet.appendChild(header);

    tweet.appendChild(image);

    icons.appendChild(icon1);
    icons.appendChild(icon2);
    icons.appendChild(icon3);
    icons.appendChild(icon4);

    tweet.appendChild(icons);

    icon1.addEventListener('click', e => {
        e.preventDefault();
        
        ammount1.innerHTML = ++comments;
    });

    icon2.addEventListener('click', e => {
        e.preventDefault();
        
        ammount2.innerHTML = ++retweets;
    });

    let liked = false; //previous state of the like button

    icon3.addEventListener('click', e => {
        e.preventDefault();
        
        if(liked) {
            icon3.style.color = 'white';
            likes--;
            liked = false;
        } else {
            icon3.style.color = 'red';
            likes++;
            liked = true;
        }

        ammount3.innerHTML = likes;
    });

    //add tweet to tweets
    tweets.appendChild(tweet);
}



// addTweet('Hello, World!', '@JavaScript', './images/FGt-64mXMAELabW.jpg');

/* <div class="tweet">
    <div class="header">
        <h3 class="user"> Hello, World! </h3>
        <span class="tag"> @JohnDoe </span>
    </div>

    <img class="image" src="./images/FGt-64mXMAELabW.jpg" alt="tweet image">

    <nav class="icons">
        <a class="icon" href="/"> ✍ <span class="ammount"> 0 </span> </a>
        <a class="icon" href="/"> 🔃 <span class="ammount"> 0 </span> </a>
        <a class="icon" href="/"> ❤ <span class="ammount"> 0 </span> </a>
        <a class="icon" href="/"> 👐 </a>
    </nav>
</div> */