
module.exports = (formId) => {
  const swal = require('sweetalert')
  const form = document.getElementById(formId)
  function toJSONString(form) {
    var obj = {}
    var elements = form.querySelectorAll('input, select, textarea')
    for (var i = 0; i < elements.length; ++i) {
      var element = elements[i]
      var name = element.name
      var value = element.value
      if (name) {
        obj[ name ] = value
      }
    }
    return JSON.stringify(obj)
  }
  if (form) {
    form.addEventListener('submit', event => {
      event.preventDefault()
      const json = toJSONString(form)
      const formReq = new XMLHttpRequest()
      formReq.open('POST', '/telegram', true)
      formReq.onload = function(oEvent) {
        if (formReq.status === 200) {
          swal({
            title: 'Успешно отправлено!',
            icon: 'success',
            button: {
              text: 'OK',
              value: true,
              visible: true,
              className: 'swal-button',
              closeModal: true
            },
            timer: 2000
          })
          document.querySelector('.swal-button-container').style.opacity = '0'
        }
        if (formReq.status === 400) {
          swal({
            title: 'Произошла ошибка!',
            icon: 'error',
            button: {
              text: 'OK',
              value: true,
              visible: true,
              className: 'swal-button',
              closeModal: true
            },
            timer: 2000
          })
          document.querySelector('.swal-button-container').style.opacity = '0'
        }
      }
      formReq.setRequestHeader('Content-Type', 'application/json')
      formReq.send(json)
    })
  }
}
