document.addEventListener('DOMContentLoaded', function() {
  // DOM content loaded 
  console.log('DOM Content Loaded...')
  document.querySelector('.card').addEventListener('click', function(){
    // if target element is not an a tag open link to project
    if (!event.target.matches('a')){
      window.open(this.getAttribute('href'), '_blank');
    }
  });

  document.querySelector('.rotate-card').addEventListener('click', function(){

    const presentation = document.querySelector('.presentation');
    const description = document.querySelector('.description');

    // console.log(presentation);
    // console.log(description);

    if (presentation.classList.contains('active')){
      // console.log('a');
      presentation.classList.remove('active');
      description.classList.add('active');
    }else if (description.classList.contains('active')){
      // console.log('b');
      description.classList.remove('active');
      presentation.classList.add('active');
    }
  })

})
