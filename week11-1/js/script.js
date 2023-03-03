const $container = $('.container');
const $button = $('.js-openModal');

$button.click(() => {
  $container.toggleClass("openModal");
})

