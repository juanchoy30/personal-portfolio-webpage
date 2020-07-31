$(function() {

    // Verification
    $.ajax({
        beforeSend: function(xhr) {
            if (xhr.overrideMimeType) {
                xhr.overrideMimeType("application/json");
            }
        }
    });

    const url = 'https://us-central1-web-developer-projects.cloudfunctions.net/app/api/read-portfolio/';
    $.ajax({
        url: url,
        type: "GET",
        beforeSend: function() {
            $('#loadDataContent').append('<div id="loading">Loading</div>');  // Load message
        },
        complete: function() {           // Once finished
            $('#loading').remove();      // Clear message
        },
        success: function(data) {
            var newContent = '';
            for ( var i = 0; i < data.length; i++ ) {
                
                newContent += '<div id="' + data[i].title.replace(/\s/g , "-").toLowerCase() + '" ';
                newContent += 'class="project-tile col-12 col-md-6 col-lg-4">';
                newContent += '<a href="';
                if ( data[i].link !== null ) {
                    newContent += data[i].link;
                } else if ( data[i].link === null ) {
                    newContent += data[i].repository;
                }
                newContent += '"  target="_blank"><div class="card">';
                newContent += '<img class="card-img-top" src="';
                newContent += data[i].picture;
                newContent += '" alt="' + data[i].title + '">';
                newContent += '<div class="card-body"><h3>';
                newContent += data[i].title + '</h3></div></div></a></div>';
            }
            newContent += '<div id="more" class="project-tile col-12 col-md-6 col-lg-4">';
            newContent += '<a class="see-more" href="https://github.com/juanchoy30" target="_blank">';
            newContent += 'You can see more at my GitHub page...';
            newContent += '</a></div>'

            $('#loadDataContent').html(newContent);
        },
        fail: function() { 
            $('#loadDataContent').html('Sorry, We could not load the information at the moment. Please check out later');
        }
    });
});