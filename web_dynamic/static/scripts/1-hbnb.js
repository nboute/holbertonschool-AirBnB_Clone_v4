$( document ).ready(function() {
  var amenities = [];
  $('li :checkbox').change(function() {
    if (this.checked) {
      console.log(this);
      $(amenities).append($(this).attr('data-id'));
      console.log(amenities);
    }
    else {
      amenities.remove($(this).attr('data-id'))
    }
  });
});
