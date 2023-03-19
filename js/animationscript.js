//Animation handling

//Use IntersectionObserver API to trigger animations when scrolled into view.

//Track elements with inview-animate class
const observer = new IntersectionObserver(entries => {

    //Loop through an array of each element being observed
    entries.forEach(entry => {
  
      if (entry.isIntersecting) {

        let currentClass = entry.target.getAttribute('data-animate');

        if (currentClass == "fadeInLeft") {

            entry.target.classList.add('fadeInLeft');
        }
        else if (currentClass == "fadeInRight") {

            entry.target.classList.add('fadeInRight');
        }
        else if (currentClass == "fadeInUp") {

            entry.target.classList.add('fadeInUp');
        }
        else if (currentClass == "fadeInDown") {

            entry.target.classList.add('fadeInDown');
        }
        else if (currentClass == "fadeIn") {

            entry.target.classList.add('fadeIn');
        }

      }
  
    });
  
});
  
// Tell the observer which elements to track

let target = ".inview-animate";

document.querySelectorAll(target).forEach((i) => {
    if (i) {
        observer.observe(i);
    }
});