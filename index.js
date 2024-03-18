let toggleInput = document.querySelector('input');
let body = document.body;
let headerToggle = document.querySelector('header');
let overviewTitle = document.querySelector('.overview-title');

function resumeDark() {
let fbDark = document.querySelector('.fb-resume-data');
let twDark = document.querySelector('.twitter-resume-data');
let igDark = document.querySelector('.ig-resume-data');
let ytDark = document.querySelector('.yt-resume-data');

fbDark.classList.toggle('dark-cards-resume');
twDark.classList.toggle('dark-cards-resume');
igDark.classList.toggle('dark-cards-resume');
ytDark.classList.toggle('dark-cards-resume');
}

function overviewDark() {
    let fbPageViewsDark = document.querySelector('.fb-page-views');
    let fbLikesDark = document.querySelector('.fb-likes');
    let twRetweetsDark = document.querySelector('.retweet');
    let twLikesDark = document.querySelector('.tw-likes');
    let igLikesDark = document.querySelector('.ig-likes');
    let igProfileViewsDark = document.querySelector('.ig-profile-views');
    let ytLikesDark = document.querySelector('.yt-likes');
    let ytViewsDark = document.querySelector('.yt-views');

    fbPageViewsDark.classList.toggle('dark-cards-overview');
    fbLikesDark.classList.toggle('dark-cards-overview');
    twRetweetsDark.classList.toggle('dark-cards-overview');
    twLikesDark.classList.toggle('dark-cards-overview');
    igLikesDark.classList.toggle('dark-cards-overview');
    igProfileViewsDark.classList.toggle('dark-cards-overview');
    ytLikesDark.classList.toggle('dark-cards-overview');
    ytViewsDark.classList.toggle('dark-cards-overview');
}

toggleInput.addEventListener('click', function() {
    body.classList.toggle('dark');
    headerToggle.classList.toggle('dark-header');
    overviewTitle.classList.toggle('dark');
    resumeDark();
    overviewDark();
})