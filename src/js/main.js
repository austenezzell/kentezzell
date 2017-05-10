import 'waypoints/lib/noframework.waypoints.js';
require('smoothscroll-polyfill').polyfill();


(() => {

  let wrap = document.querySelector('.wrap');
  let featuredSection = document.querySelectorAll('.featured-section');
  let intro = document.querySelector('.intro');
  let contactModule = document.querySelector('.contact-module');
  let featuredWork = document.querySelector('.featured-work');
  let projectLink = document.querySelectorAll('.project-link');
  let wipe = document.querySelector('.transition-wipe');
  let bioLink = document.querySelectorAll('.bio-link');
  let backButton = document.querySelector('.back-arrow');
  let nextButton = document.querySelector('.next');
  let projectNavItem = document.querySelectorAll('.project-nav-item');
  let portfolioLink = document.querySelector('.portfolio-link');
  let portfolioNav = document.querySelector('.portfolio-nav');
  let galleryItem = document.querySelectorAll('.gallery-item');
  let galleryContainer = document.querySelector('.gallery');
  let galleryModule = document.querySelector('.gallery-module');
  let galleryMode = 'off';

  if (portfolioLink){
      portfolioLink.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('body').classList.add('portfolio-nav-on');
      });
  }

  if (projectNavItem) {
    let numOfImages = projectNavItem.length;
    for (var i = 0; i < projectNavItem.length; i++) {
      projectNavItem[i].addEventListener('mouseover', (e) => {
        let hoveredProject = e.target.getAttribute('data-project');
        let topOfPile = numOfImages ++;
        document.querySelector(`.nav-image-${hoveredProject}`).classList.add('active');
        document.querySelector(`.nav-image-${hoveredProject}`).style.zIndex = (topOfPile);
      });

      projectNavItem[i].addEventListener('mouseout', (e) => {
        let hoveredProject = e.target.getAttribute('data-project');
        let topOfPile = numOfImages ++;
        document.querySelector(`.nav-image-${hoveredProject}`).classList.remove('active');
      });

    }
  }

  if (projectNavItem){
    for (var i = 0; i < projectNavItem.length; i++) {
      projectNavItem[i].addEventListener('click', (e) => {
        e.preventDefault();
        let href = e.target.getAttribute('href');
        let nextBg = e.target.getAttribute('data-bgcolor');
        document.querySelector('body').classList.add('page-transiton');
        document.querySelector('.portfolio-nav').style.background = nextBg;
        document.querySelector('.primary-nav').classList.remove('nav-on');
        setTimeout(() => {
        window.location = href; }, 500);
      });
    }
  }

  if (nextButton){
    nextButton.addEventListener('click', (e) => {
      e.preventDefault();
      let href = e.target.getAttribute('href');
      let nextBg = e.target.getAttribute('data-bgcolor');
      document.querySelector('body').classList.add('page-transiton');
      wipe.style.background = nextBg;
      document.querySelector('.primary-nav').classList.remove('nav-on');
      setTimeout(() => {
      window.location = href; }, 500);
    });
  }

  if (backButton){
    backButton.addEventListener('click', (e) => {
      e.preventDefault();
      let href = e.target.getAttribute('href');
      document.querySelector('body').classList.add('page-transiton');
      wipe.style.background = '#d7dedd';
      setTimeout(() => {
      window.location = href; }, 500);
    });
  }

  for (var i = 0; i < bioLink.length; i++) {
    bioLink[i].addEventListener('click', (e) => {
      e.preventDefault();
      let href = e.target.getAttribute('href');
      document.querySelector('body').classList.add('page-transiton');
      document.querySelector('body').style.background = '#000';
      wipe.style.background = '#000';
      document.querySelector('.primary-nav').classList.remove('nav-on');
      setTimeout(() => {
      window.location = href; }, 500);
    });
  }

  // homepage
  let homepageStuff = () => {
    // portofiolio select hover title
    for (var i = 0; i < projectLink.length; i++) {
      projectLink[i].addEventListener('mouseover', (e) => {
        e.target.querySelector('.title').classList.add('active-hover');
      });
      projectLink[i].addEventListener('mouseout', (e) => {
        e.target.querySelector('.title').classList.remove('active-hover');
      });

      // home -> portfolio page transition
      projectLink[i].addEventListener('click', (e) => {
        e.preventDefault();
        let targetContainer = e.target.parentNode.parentNode;
        let href = e.target.getAttribute('href');
        let containerColor = targetContainer.parentNode.getAttribute('data-bgcolor');
        targetContainer.parentNode.classList.add('stay');
        wipe.style.background = containerColor;
        document.querySelector('.homepage').style.background = containerColor;
        targetContainer.scrollIntoView({ behavior: 'smooth' });
        document.querySelector('body').classList.add('page-transiton');
        document.querySelector('.primary-nav').classList.remove('nav-on');
        setTimeout(() => {
         window.location = href; }, 500);
        });
    }

    // follow cursor
    document.addEventListener('mousemove', (e) => {
      const activePortfolioHover = document.querySelectorAll('.title.active-hover');
      const activePortfolioImage = document.querySelectorAll('.project-link.active-img');
      for (var i = 0; i < activePortfolioHover.length; i++) {
        activePortfolioHover[i].setAttribute('style', `left: ${e.pageX}px; top: ${e.y}px;`)
      }
    });
  }

  // homepage waypoints
  let homeFeaturedSections = (el) => {
    for (var i = 0; i < el.length; i++) {
      el[i].classList.add('feature-' + i );
      el[i].style.zIndex = (i + 2);
      var fixFeatures = new Waypoint({
        element: el[i],
        handler: function(direction) {
          if (direction == 'down') {
            this.element.querySelector('.module').classList.add('fixed');
          } else {
            this.element.querySelector('.module').classList.remove('fixed');
          }
        }
      });
    }
  }

  let firstFeaturedSection = (el) => {
    var fixFeatures = new Waypoint({
      element: el[0],
      handler: function(direction) {
        if (direction == 'down') {
          document.querySelector('.primary-nav').classList.add('nav-on');
        } else {
          document.querySelector('.primary-nav').classList.remove('nav-on');
        }
      }
    });
  }

  let portfolioNavOn = (el) => {
    var fixFeatures = new Waypoint({
      element: el,
      handler: function(direction) {
        if (direction == 'down') {
          document.querySelector('.primary-nav').classList.add('nav-on');
        } else {
          document.querySelector('.primary-nav').classList.remove('nav-on');
        }
      }
    });
  }

  let hideGalleryView = () => {
    document.querySelector('body').classList.remove('activeImgDtl');
    galleryContainer.classList.remove('on');
    galleryMode = 'off';
  }

  let scrollThings = (el) => {
    if (el){
      if(window.scrollY > 850){
        el.style.opacity = 0;
        el.style.filter = `blur(49px)`;
      }
    }
    window.onscroll = (e) => {
      if(el){
        el.style.filter = `blur(${Math.floor(blur)}px)`;
        el.style.opacity = `${opacity}`;
        let blur = window.scrollY / 10;
        let opacity = (100 - (blur)) / 100;
        if (blur < 50){
          el.style.filter = `blur(${Math.floor(blur)}px)`;
        }
        if (opacity > 0) {
          if (opacity < .1) {
              el.style.opacity = 0;
          } else {
              el.style.opacity = `${opacity}`;
          }
        }
      }
      if (document.querySelector('body').classList.contains('activeImgDtl')) {
        hideGalleryView();
      }
    }
  }

  let galleryView = () => {
    document.querySelector('.gallery').addEventListener('click', () => {
      hideGalleryView();
    });
    for (var i = 0; i < galleryItem.length; i++) {
      galleryItem[i].addEventListener('click', (e) => {
        e.preventDefault();
        const clone = e.target.cloneNode();
        let imgSelect = e.target.currentSrc;
        let topImg = `<div class='galleryOverlayImg' style='background-image: url(${imgSelect})'></div>`;
        let detailEl = document.createElement('div');
        detailEl.innerHTML = topImg;
        galleryModule.append(detailEl);
        galleryContainer.classList.add('on');
        document.querySelector('body').classList.add('activeImgDtl');
        galleryMode = 'on';

      });
    }
  }

  if (wrap.classList.contains('homepage')){
    homepageStuff();
    homeFeaturedSections(featuredSection);
    firstFeaturedSection(featuredSection);
    scrollThings(intro);
  };

  if (wrap.classList.contains('portfolio')){
    let mainContent = document.querySelector('.main-content');
    scrollThings(intro);
    portfolioNavOn(mainContent);
    galleryView();
  }

  if (wrap.classList.contains('bio-page')){
    let mainContent = document.querySelector('.main-content');
    portfolioNavOn(mainContent);
    galleryView();
    scrollThings();
  }

})()
