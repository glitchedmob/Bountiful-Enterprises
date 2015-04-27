var flipped = false;
$(document).ready(function() {
    $('#year-list .project-year').click(function() {

        if (flipped == false) {
        	$(this).next('.projects').slideToggle(400);
        	$(this).find("i").addClass('fa-rotate-180');
        	flipped = true;
        } else {
        	$(this).next('.projects').slideToggle(400);
        	$(this).find("i", this).removeClass('fa-rotate-180');
        	flipped = false;
        }

    });
});