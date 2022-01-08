
  jQuery( '#contactFile' ).change( function() {
    var file = this.files[0];
    jQuery(this).parents('label').nextAll('.contact__file--name').text(file.name);
  });
