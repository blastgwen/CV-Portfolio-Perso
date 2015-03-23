var lang;

function fillResume(){
	$("#experiences").html ( " " );

 	$.each(jobs, function(i, job){

		var html = "";

		// Job description
		html += '<div class="experience">' 
		 	+ '<h2>' + job.jobTitle + " - " + job.company 
		 		+ '<span class="pull-right CV-date">' + job.date + '</span>'
		 	+ '</h2>'
		 	+ '<p>' + job.description + '</p>';

		 // Job Panel parent
		 var accordion = "accordion-" + job.id;

		 html += '<div class="panel-group" id="' + accordion +' ">';

		 // EACH MISSION
		 $.each (job.missions, function (j, mis) {

		 	var collapse = "collapse-" + mis.id;
		 
		 	html += '<div class="panel panel-default">';

		 	// Job panel head
			html += '<div class="panel-heading">'
				 	+ '<div class="panel-title">'
					 	+ '<a data-toggle="collapse" data-parent="#' + accordion + '" href="#' + collapse + '">'
					 		+ '<h3 class="mission-title">' + mis.name
					 			+ '<span class="pull-right" style="padding: 0 10; margin:10 0"><i class="icon-arrow-down"></i></span>'
					 			+ '<span class="pull-right CV-date" style="padding-right: 10"> ' + mis.date +'</span>'
					 		+ '</h3>'
					 	+ '</a>'
					 + '</div>'
				+ '</div>';

			// Job panel body
			html	+= '<div id="' + collapse + '" class="panel-collapse collapse">'
				+ '<div class="panel-body">'
				+ '<p>' + mis.description+ '</p>'

			if (mis.taches !== null && mis.taches.length !== 0){
				html += ((lang === "en") ? '<h5>Tasks performed</h5>' : '<h5>Tâches effectuées</h5>');
				html += '<ul class="Mission">';
				
				for (var i = 0; i < mis.taches.length; i++){
					html += '<li>' + mis.taches[i].description + '</li>';
				}

				html += '</ul>';
			}

			if (mis.technologies !== null){
		 		html += '<h5>Technologies</h5>'
					+ '<p class="Techno">' + mis.technologies + '</p>';
		 	}

		 	html += '</div></div></div>'
		 });

		if (i !== jobs.length -1){
	 		html += '</div><p class="CVBorder"/></div>';
	 	} else {
	 		html += '</div></div>';
	 	}

	 	$("#experiences").append (html);
	} ) ;
}


