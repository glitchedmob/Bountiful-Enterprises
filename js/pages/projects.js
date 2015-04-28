
$(document).ready(function() {
    $('#year-list .project-year').click(function() {

        if (this.flipped) {
        	$(this).next('.projects').slideToggle(400);
            $(this).find("i", this).removeClass('fa-rotate-180');
            this.flipped = false;
        } else {
            $(this).next('.projects').slideToggle(400);
            $(this).find("i").addClass('fa-rotate-180');
            this.flipped = true;
        }

    });
});