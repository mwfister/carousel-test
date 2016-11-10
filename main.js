let gallery = [
  {
    heading: "Treatment",
    subheading: "After X Peels",
    beforeImage: {
      url: "local/file.jpg",
      issue: "acne"
    },
    afterImage: {
      url: "local/file2.jpg",
      issue: "acne"
    }
  },
  {
    heading: "Treatment 2"
  }
];

// function createSlides(array) {
//   for (var i=0, i < array.length, i++) {
//     const container = document.querySelector('.carousel');
//     const `div-${i}` = document.createElement('div');
//     const newDiv = container.appendChild(`div-${i}`)
//     const heading = newDiv.appendChild('h2');
//     const img1 = newDiv.appendChild('img');
//     const img2 = newDiv.appendChild('img');
//     if i === 0 {
//       newDiv.className = `slide-${i} active`;
//     } else {
//       newDiv.className = `slide-${i}`;
//     }
//     img1.src = array[i].beforeImage.url || "";
//     img2.src = array[i].afterImage.url || "";
//   }
// }

var navigation = (function() {
  var carousel = document.querySelector('.carousel');
  var slider = carousel.querySelector('.slider');
  var previous = slider.querySelector('.previous');
  var next = slider.querySelector('.next');
  var slides = slider.querySelectorAll('.slides li');
  var numSlides = slides.length;
  var index = 0;
  var current = slides[0];
  var navigate = function navigate(direction) {
    current.classList.remove('active');
    current.classList.add('left');
    index = index + direction;
    if (direction === -1 && index < 0) {
      index = numSlides - 1;
    }
    if (direction === 1 && !slides[index]) {
      index = 0;
    }
    current = slides[index];
    current.classList.add('active');
  };
  next.addEventListener('click', function(ev) {
    navigate(1);
  });
  previous.addEventListener('click', function(ev) {
    navigate(-1);
  });
  navigate(0);
})();
