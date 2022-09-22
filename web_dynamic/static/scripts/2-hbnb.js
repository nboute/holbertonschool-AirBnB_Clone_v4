$(document).ready(function () {
  const amenities = [];
  $('li :checkbox').change(function () {
    if (this.checked) {
      amenities.push($(this).attr('data-id'));
    } else {
      amenities.splice($.inArray($(this).attr('data-id'), amenities), 1);
    }
  });
});
