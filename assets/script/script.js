const body = document.querySelector('.container')

const btn = document.getElementById('calc')

const resultParagraph = document.getElementById('result')

btn.addEventListener('click', () => {
  const soms = document.getElementsByTagName('input')[0].value
  const dollars = document.getElementsByTagName('input')[1].value

  const result = Number(soms) / Number(dollars)
  resultParagraph.innerText = result.toFixed(2)

})

