const cards = document.querySelectorAll('.mycard')
// 
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const intersecting = entry.isIntersecting
      if(intersecting){
      entry.target.classList = "mycard mycard-1 col-12 col-md-3 m-3 py-4 px-3 animate__animated animate__bounce"
}    })
  },
    { threshold: 0.7 }
  )

  cards.forEach(item => {
    observer.observe(item)
  })