// navbar
let bars = document.querySelector('.bars')
let links = document.querySelector('.links')

bars.addEventListener('click', function () {
  bars.classList.toggle('change')
  if (bars.classList.contains('change')) {
    bars.querySelector('img').src = 'images/Navbar/close.png'
    links.style.height = links.scrollHeight + 'px'
  } else {
    bars.querySelector('img').src = 'images/Navbar/open.png'
    links.style.height = 0
  }
})

// filter images

let portfolioLinks = document.querySelectorAll('.portfolio-links li a')
let portfolioItems = document.querySelectorAll('.portfolio-item')
let portfolioContent = document.querySelector('.portfolio-content')
portfolioLinks.forEach((ele) => {
  ele.addEventListener('click', function (e) {
    e.preventDefault()
    portfolioLinks.forEach((item) => {
      item.classList.remove('active')
    })
    this.classList.add('active')
    portfolioItems.forEach((ele) => {
      ele.style.display = 'none'
    })

    let elements = document.querySelectorAll('.' + this.dataset.class)

    elements.forEach((item) => {
      item.style.display = 'block'
    })

    if (
      this.dataset.class == 'HTML' ||
      this.dataset.class == 'Photoshop' ||
      this.dataset.class == 'Wordpress' ||
      this.dataset.class == 'Mobile'
    ) {
      portfolioContent.classList.add('custom-grid')
    } else {
      portfolioContent.classList.remove('custom-grid')
    }
  })
})
