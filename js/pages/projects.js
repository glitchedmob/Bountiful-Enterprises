//fetches data from a google sheet
//
$(document).ready(function() {  
  $(function listProjects() {
    var gKey = "1fv4-RZsQXcdhI8tFs1x3vrR8ABgzpiLef_y_5rkHxdY";
    $.getJSON( "https://spreadsheets.google.com/feeds/list/"+gKey+"/od6/public/values?alt=json-in-script&callback=?",
    function (data) {
      var year = "2009";
      $.each(data.feed.entry, function(i,entry) { 

        var item = '<span style="display:none" >' + entry.id.$t + '</span>';
        var number = '<span style="display:none" >' + entry.id.$t + '</span>';
      
        if (entry.gsx$year.$t==='') {
          item += '<td>'+entry.gsx$name.$t+'</td><td>' + entry.gsx$city.$t+'</td><td>' + entry.gsx$state.$t+'</td><td>' + entry.gsx$tons.$t+'</td>';  
        } else {
          year = entry.gsx$year.$t;
          /*
          This script appends the table and the table rows into the document.
          inside each block is all of the html for the table and the pictures column. This html code also has inline script for hiding effect
          The script inline because of the way that this script loads the data. 
          This script loads the data after the function for the hiding effect has run, which stops it from working on the data that was loaded 
          */
          $('div.project-list').append('<div class="project-year" onclick="$(this).next(\'.projects\').slideToggle(400); $(this).find(\'i\', this).toggleClass(\'i-close\')"><i class="fa fa-plus fa-3x"></i><h2> Year: '+year+' - '+entry.gsx$total.$t+' tons</h2></div><div class="projects"><div class="row"><div class="col-md-6"><table class="table"><thead><tr><th>Job</th><th>City</th><th>State</th><th>Weight</th></tr></thead><tbody id="'+year+'"></tbody></table></div><div class="col-md-6 center v-center" id="'+year+'-pics"></div><div></div>');
        }
        //appends the images from the images column onto the pictures column on the webpage
        if (entry.gsx$images.$t!='') {
          $('#'+year+'-pics').append('<div class="thumbnail"><img src="'+entry.gsx$images.$t+'"><div class="caption"><p>'+entry.gsx$description.$t+'</p></div></div>');  
        }
        //appends each row from the spreadsheet into each row in the table
        $('#'+year).append('<tr>'+item+'</tr>');                 
      });
    });
  });
});