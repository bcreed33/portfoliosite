//Js for the menu button
const navTrigger = document.querySelector('.nav-trigger');
navTrigger.addEventListener('click', function() {
  this.classList.toggle('is-active');
}, false);

const mobileMenuOption = document.getElementsByClassName("nav-item");
let closeMenu = function() {
    document.querySelector('.nav-trigger').classList.remove('is-active');
    document.querySelector('#navbarNav').classList.remove('show');
};
Array.from(mobileMenuOption).forEach(function(mobileMenuOption) {
    mobileMenuOption.addEventListener('click', closeMenu);
  });

//////js that is displaying my portfolio cards
const porfolioCards = portfolioPieces.map(x =>
    `<li data-type="portfolio-${x.portfolio_id}" onclick="myScript(this);">
        <a data-type="portfolio-${x.portfolio_id}">
            <div class="portPeicePreview" style="background-image: url(../${x.portfolio_imageUrl});">
                <div class="portPeiceTitle">
                    <h3>${x.portfolio_title}</h3>
                    <button data-type="member-${x.portfolio_id}" onclick="myScript(this);">More Info</button>
                </div>
            </div>
        </a>
    </li>`).join('');
    document.querySelector('#portPPP').innerHTML= porfolioCards;


//////js for the stick nav on scroll
//Intersection Observer
let nav = document.querySelector('.navbar');
let hero = document.querySelector('.heroBackgroundImage');
const navHandler = (entries) => {
    console.log(entries)
    if (!entries[0].isIntersecting) {
        nav.classList.add('navbar-sticky')
    } else {
        nav.classList.remove('navbar-sticky')
    }
}
const observer = new window.IntersectionObserver(navHandler)
// this is watching the hero banner
observer.observe(hero)




// This is giving the hero elements motions. 
window.addEventListener('scroll', function(e){
    const scrolled = window.pageYOffset;
    const fname = document.querySelector('.fristName');
    fname.style.transform = `translate3d(${scrolled * 0.5}px, 0px , 0px )`;
    const lname = document.querySelector('.lastName');
    lname.style.transform = `translate3d(-${scrolled * 0.5}px, 0px , 0px )`;
    const title = document.querySelector('.mytitle');
    title.style.transform = `translate3d(0px , -${scrolled * 0.75}px, 0px )`;
    const logo = document.querySelector('.standAlonelogo');
    logo.style.transform = `translate3d(0px, ${scrolled * 1.25}px, 0px )`;
});
