document.body.innerHTML += "<a href='#' id='back-to-top' title=''></a>";
const getBTTElm = document.getElementById('back-to-top');
document.addEventListener('scroll', ev => {
    if (window.scrollY > 150) {
        getBTTElm.classList.add('visible');
    } else {
        getBTTElm.classList.remove('visible');
    }
});
getBTTElm.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})

// menu function

const getBtn = document.querySelector('.mob-btn');
getBtn.addEventListener('click', e => {
    document.querySelector('body').classList.toggle('show-menu');
})


const getDropDown = document.getElementsByClassName('main-nav');
for ( div of getDropDown){
    var selectLi = div.getElementsByTagName('li');
    for ( li of selectLi){
       if (li.contains(li.querySelector('ul'))) {
        li.classList.add('submenu');
        li.innerHTML += "<i></i>";
        }
    }
}

const getDropDownClick = document.querySelectorAll('.main-nav i');
getDropDownClick.forEach((item) => {
    item.addEventListener('click', e => {
        e.target.parentNode.classList.toggle('open');
    })
})

//animation
// just "anim" in your element
window.addEventListener("load", () => {
    function isInViewport(el, gap) {
        let top = el.offsetTop;
        let left = el.offsetLeft;
        let height = el.offsetHeight;
        while (el.offsetParent) {
            el = el.offsetParent;
            top += el.offsetTop;
            left += el.offsetLeft;
        }
        return (
            (window.pageYOffset + window.innerHeight - gap) >= (top) &&
            (window.pageYOffset) <= (height + top)
        );
    }
    let getElem = document.querySelectorAll('[data-anim]');
    //please change as per the design
    const breakPoints = {
        desktop: 250,
        laptop: 80,
        tab: 50,
        mobile: 30
    };
    let targetGap;
    window.innerWidth >= 1200 ? targetGap = breakPoints.desktop :
        window.innerWidth >= 1024 ? targetGap = breakPoints.laptop :
        window.innerWidth >= 768 ? targetGap = breakPoints.tab :
        targetGap = breakPoints.mobile;

    function anim() {
        getElem.forEach(element => {
            isInViewport(element, targetGap) ? element.classList.add("visible") : null;
        })
    }
    getElem.length > 0 ? (window.addEventListener('scroll', anim, false)) : null;
    getElem.length > 0 ? anim() : null;
}, false);








var swiper = new Swiper(".homeBanner", {
    speed: 500,
    effect: 'fade',
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      autoplay: {
        delay: 5000,
      },
});
console.log('test');


const getHeaderHeight = document.querySelector('.main-header');
const getMainHeiht = document.querySelector('.main-nav');
window.addEventListener('resize', () => {
if (getHeaderHeight && getMainHeiht) {
    const height = getHeaderHeight.clientHeight;
 
        getMainHeiht.style.top = `${height}px`;
        getMainHeiht.style.height  = `calc(100% - ${height}px)`;
    // getMainHeiht.style.cssText = `top: ${height}px; lineHeight: ${height}%`;
}
})

var lightbox = GLightbox();
AOS.init();



const getWindowProps = window;
function startAnimation(params) {
    const getAnimClass = document.querySelectorAll('.anim');
    const getHeaderHeight = document.querySelector('.main-header').clientHeight;
    const offset = 40;
    getAnimClass.forEach(element => {
        console.log((element.offsetTop - (getWindowProps.innerHeight   - 5000)));
        if ((element.offsetTop - (getWindowProps.innerHeight   - 220) < (getWindowProps.pageYOffset)) && (element.offsetTop + element.clientHeight) > (getWindowProps.pageYOffset + getHeaderHeight) ) {
            element.classList.add('visible');
          
        }
        
    });
}


window.addEventListener('scroll' , startAnimation);
window.addEventListener('load' , startAnimation);



document.addEventListener("DOMContentLoaded", () => {
    function counter(node, start, end, duration, bind) {
        console.log(bind);
     let obj = node,
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        let inc = end > 100 ?increment * 2 : increment;
       current += inc;
       obj.textContent = `${current}${bind ? bind : ''}`;
       if (current == end) {
        clearInterval(timer);
       }
      }, step);
    }
    // counter("count1", 0, 400, 3000);
    // counter("count2", 100, 50, 2500);
    // counter("count3", 0, 40, 3000);
    let setScrollLock = false;


    function scrollCounterAnim() {
        const GetParentNode = document.querySelector('.counter-wrapper');
            if (GetParentNode.offsetTop - (getWindowProps.innerHeight   - 220) < (getWindowProps.pageYOffset)) {
                setScrollLock = true;
                const getCounters = document.querySelectorAll('.counter-anim');
                getCounters.forEach(element => {
                    const getCounterNumber = element?.attributes?.count?.value;
                    const isBind = element?.attributes?.bind?.value;
                    const duration = element?.attributes?.duration?.value;
                    console.log(duration);
                    // console.log(getCounterNumber);
                    counter(element, 0, getCounterNumber, duration, isBind);
                    
                });
            }
    }
    scrollCounterAnim();
    window.addEventListener('scroll', () => {
        if (!setScrollLock) {
            scrollCounterAnim();
        }

    })
   
   });
   