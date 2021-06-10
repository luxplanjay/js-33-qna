const button = document.querySelector('button');

button.addEventListener(
  'click',
  _.debounce(refreshSomething, 300, { leading: true, trailing: false })
);

function refreshSomething() {
  console.log('REFRESH');
}
