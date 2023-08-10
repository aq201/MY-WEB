alert("hello pakistan")
const triggerTabList = document.querySelectorAll('#pills-home')
triggerTabList.forEach(triggerEl => {
  const tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', event => {
    event.preventDefault()
    tabTrigger.show("home")
    console.log("hello")
    
    
  })
})