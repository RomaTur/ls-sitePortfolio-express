module.exports = () => {
  let form = document.querySelector('.form')

  if(form){

  let formInputs = document.querySelectorAll('.form__input')
  let formClean = document.querySelector('.form__clean')
    form.addEventListener('submit', event => {
      ///////////////
    })
    formClean.addEventListener('click', event => {
      formInputs.forEach(formInput => {
        formInput.value = ''
      });
    })
  }
}