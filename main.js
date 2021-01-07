const button = document.querySelector('button')
const output = document.querySelector('.output')
button.addEventListener('click', showOutput)

function showOutput() {
  const date = new Date()
  let cur = date.getHours()
  let message;
  console.log(cur)

  if (cur > 12) {
    message = 'Its afternoon'
    output.style.backgroundColor = 'black'
  } else if (cur > 17) {
    message = 'Its evening'
    output.style.backgroundColor = 'blue'
  } else if (cur > 0) {
    message = 'Its morning'
    output.style.backgroundColor = 'green'
  } else {
    message = 'Something is wrong'
    output.style.backgroundColor = 'red'
  }
  output.innerHTML = '<h1>' + message + '</h1>'
}