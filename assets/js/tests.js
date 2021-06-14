var scrollableElement = window; //document.getElementById('scrollableElement');

scrollableElement.addEventListener('scroll', navBack);

function navBack() {
    var container = document.getElementById("secNav");
    var navbar = container.parentElement;
    if (window.pageYOffset >= 40) {
        navbar.classList.add('changeafter');
        container.classList.remove('navafter');
    } else {
        container.classList.add('navafter');
        if (navbar.classList.contains('changeafter')) {
            navbar.classList.remove('changeafter');
        }
    }
}

function checkScrollDirection(event) {
  if (checkScrollDirectionIsUp(event)) {
    console.log(window.pageYOffset);
  } else {
    console.log('Down');
  }
}

function checkScrollDirectionIsUp(event) {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
}