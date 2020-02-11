const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Start of my work

//Nav----------------------------------------------------------------------

const menuList = document.querySelectorAll('nav a');

const menuItem1 = menuList[0];
const menuItem2 = menuList[1];
const menuItem3 = menuList[2];
const menuItem4 = menuList[3];
const menuItem5 = menuList[4];
const menuItem6 = menuList[5];

menuItem1.textContent = siteContent['nav']['nav-item-1']
menuItem2.textContent = siteContent['nav']['nav-item-2']
menuItem3.textContent = siteContent['nav']['nav-item-3']
menuItem4.textContent = siteContent['nav']['nav-item-4']
menuItem5.textContent = siteContent['nav']['nav-item-5']
menuItem6.textContent = siteContent['nav']['nav-item-6']

//img srcing---------------------------------------------------------------

let headImg = document.getElementById("cta-img");
headImg.setAttribute('src', siteContent["cta"]["img-src"])

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//heading content----------------------------------------------------------
const ctaTitle = document.querySelector('h1');
ctaTitle.innerText = 'DOM IS AWESOME';

const ctaBtn = document.querySelector('button');
ctaBtn.innerText = 'Get Started';

//top content--------------------------------------------------------------
const topContentInfo = document.querySelectorAll('.top-content .text-content p');

const topH4Array = document.querySelectorAll('.top-content .text-content h4');

const features = topH4Array[0];
const about = topH4Array[1];

features.textContent = siteContent['main-content']['features-h4'];
about.textContent = siteContent['main-content']['about-h4'];

const featuresTxt = topContentInfo[0];
const aboutTxt = topContentInfo[1];

featuresTxt.textContent = siteContent['main-content']['features-content'];
aboutTxt.textContent = siteContent['main-content']['about-content'];

//bottom content---------------------------------------------------------

const bottomContentInfo = document.querySelectorAll('.bottom-content .text-content p');

const bottomH4Array = document.querySelectorAll('.bottom-content .text-content h4');

const services1 = bottomH4Array[0];
const product1 = bottomH4Array[1];
const vision1 = bottomH4Array[2];

services1.textContent = siteContent['main-content']['services-h4'];
product1.textContent = siteContent['main-content']['product-h4'];
vision1.textContent = siteContent['main-content']['vision-h4'];

const servicesTxt = bottomContentInfo[0];
const productTxt = bottomContentInfo[1];
const visionTxt = bottomContentInfo[2];

servicesTxt.textContent = siteContent['main-content']['services-content'];
productTxt.textContent = siteContent['main-content']['product-content'];
visionTxt.textContent = siteContent['main-content']['vision-content'];

//contact info

const contactHeading = document.querySelectorAll('.contact h4');

const contactInfo = document.querySelectorAll('.contact p');

const contactTitle = contactHeading[0];

contactTitle.textContent = siteContent['contact']['contact-h4'];

const address = contactInfo[0];
const phoneNumber = contactInfo[1];
const email = contactInfo[2];

address.textContent = siteContent['contact']['address'];
phoneNumber.textContent = siteContent['contact']['phone'];
email.textContent = siteContent['contact']['email'];

//footer-------------------------------------------------------------------

const foot = document.querySelectorAll('footer p');

const footInfo = foot[0];

footInfo.textContent = siteContent['footer']['copyright'];


