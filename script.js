
// 
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const menuToggle = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu');

menuToggle.addEventListener('click',show);
closeMenu.addEventListener('click',close);

menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.right = '0';
}
function close(){
    mainMenu.style.right = '-100%';
}

const ChooseUsContainerData = [
    {
        image:'images/payment.png',
        title:'Payment methods',
        discription:'We have a lot of them, from cryptocurrencies to barter for potatoes'
    },
    {
        image:'images/adv2.png',
        title:'Simple search process',
        discription:'We checked it out, even the kid did it, but it was my mom\'s friend\'s son'
    },
    {
        image:'images/adv3.png',
        title:'24/7 Support',
        discription:'Is there something you don\'t understand? Feel free to call us. Phone number in the footer'
    },
    {
        image:'images/adv4.png',
        title:'We are nice',
        discription:'Fantasy is over, there will be something really convincing here'
    }
]

const ChooseUsContainer = document.querySelector('.ChooseUsContainer');

const renderchooseus = ()=>{
    ChooseUsContainerData.map((chooseusData)=>{
        const ChooseUsElement = document.createElement('div');
        ChooseUsElement.classList.add('advantages');
        ChooseUsElement.innerHTML= `
            <img src=" ${chooseusData.image}" alt="">
            <h3 class="ChooseUs-title">${chooseusData.title}</h3>
            <p class="ChooseUs-description">${chooseusData.discription}</p>
        `

        ChooseUsContainer.appendChild(ChooseUsElement)
    })
}
renderchooseus();

const specialofferContainer = [
    {
        specialImages: 'images/special-offer1.png',
        specialImages2:'images/rating.svg',
        specialImages3:'images/favorite.svg',
        address:'Wilderness Club at Big Ceddar',
        date:'28 October — 1 November',
        price:'$2016',
        days:'/6 night'
    },
    {
        specialImages: 'images/special-offer2.png',
        specialImages2:'images/rating.svg',
        specialImages3:'images/favorite.svg',
        address:'Wilderness Club at Big Ceddar',
        date:'28 October — 1 November',
        price:'$2016',
        days:'/6 night'
    },
    {
        specialImages: 'images/special-offer3.png',
        specialImages2:'images/rating.svg',
        specialImages3:'images/favorite.svg',
        address:'Wilderness Club at Big Ceddar',
        date:'28 October — 1 November',
        price:'$2016',
        days:'/6 night'
    },
];

const renderSpecialoffer = specialofferContainer =>{
    const Container = document.querySelector('.special-offers');
    specialofferContainer.forEach(specialofferContainer => {
        Container.innerHTML += `
            <div class="special-img">
                <img src="${specialofferContainer.specialImages}" alt="special-offer1" class="hotel-img">
                <img src="${specialofferContainer.specialImages2}" alt="rating" class="rating">
                <img src="${specialofferContainer.specialImages3}" alt="favorite" class="fav">
            </div>
            <div class="address">
                <h4>${specialofferContainer.address}</h4>
                <p>${specialofferContainer.date}</p>
            </div>
            <div class="price">
                <h5>${specialofferContainer.price}</h5>
                <p class="night">${specialofferContainer.days}</p>
            </div>
        `;
    }) ;
}
renderSpecialoffer(specialofferContainer);

const reviewContainer = [
    {
        reviewimage: 'images/review-img.png',
        comment: 'I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.',
        reviewerName: '<span style="font-weight: bold;">Jannike Borg</span>, Publisher'
    },
    {
        reviewimage: 'images/review-img2.png',
        comment: 'I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.',
        reviewerName: '<span style="font-weight: bold;">LeBron Durant</span>, Flight attendant'
    },
    {
        reviewimage: 'images/review-img3.png',
        comment: 'I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.',
        reviewerName: '<span style="font-weight: bold;">Kaarel Piho</span>, Chiropodist'
    },
]

const renderreview = reviewContainer =>{
    const Container = document.querySelector('.reviews');
    reviewContainer.forEach(review => {
        Container.innerHTML += `
        <img src="${review.reviewimage}" alt="review-img" class="review-img">
        <p> ${review.comment}</p>
        <p class="review">${review.reviewerName}</p>
        `;
    }) ;
    Container.innerHTML += `
        <button class="more-reviews">More reviews</button>
        `;
}
renderreview(reviewContainer);

const postsContainerData = [
    { postimage: 'images/post-img1.png', 
        post1: 'May 23, 2022',
        clock:'images/time.svg ',
        minutes:'5 minutes',
        detail1: 'My trip to Athens',
        detail2: 'It would seem that in a city where Theseus, Plato and Epicurus once walked, the very idea of the subway is alien to the city, but already...'
},
{ postimage: 'images/post-img2.png', 
    post1: 'May 22, 2022',
    clock: 'images/time.svg ',
    minutes:'1 minutes',
    detail1: 'Vilnius resorts',
    detail2: 'I havent seen any resorts in Vilnius, but there are wonderful people and pubs'
},
{ postimage: 'images/post-img3.png', 
    post1: 'May 20, 2022',
    clock: 'images/time.svg ',
    minutes:'15 minutes',
    detail1: 'Tips for flying on a plane',
    detail2: 'If you have a fear of flying, here\'s a helpful tip: bring your co-pilot so you can take a nap while he steers the plane for you'
},
];

const postsContainer = document.querySelector('.posts');

const renderposts = ()=>{
    postsContainerData.map((postData)=>{
        const postsElement = document.createElement('div');
        postsElement.classList.add('posts');
        postsElement.innerHTML= `
                <div class="post-img">
                    <img src="${postData.postimage}" alt="post-img1">
                </div>
                <div class="post">
                    <p>${postData.post1}</p>
                    <div class="time">
                        <img src="${postData.clock}" alt="time" class="clock">
                        <p>${postData.minutes}</p>
                    </div>
                </div>
                <div class="details">
                    <h4>${postData.detail1}</h4>
                    <p class="detail">${postData.detail2}</p>
                </div>
            </div>
        `;

        postsContainer.appendChild(postsElement)
    });
}
renderposts();
