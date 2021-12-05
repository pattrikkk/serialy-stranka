$(document).ready(function(){
    $('#kontakt').on('submit', function(e){
        e.preventDefault();
        var meno = $('#meno').val().length;
        var email = $('#email').val().length;
        var obsah = $('#obsah').val().length;
        if (meno == 0 || email == 0 || obsah == 0) {
            $('#alert').removeClass('d-none').text('Všetky polia musia byť vyplnené');
        } else {
            this.submit();          
        }
    });
});