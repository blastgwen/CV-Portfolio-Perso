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

function fillProjects(){

	var perso = $.grep(projects, function(e) { return e.type === "perso" });
	var ecole = $.grep(projects, function(e) { return e.type === "ecole" });

	fillPersoProjects(perso);
	fillSchoolProjects(ecole);
}

function fillPersoProjects(list){
	html ="";
	for (var i = 0; i < list.length; i++){
		html += parseProject(list[i]);
	}

	$('#accordion-perso').html ( html );
}

function fillSchoolProjects(list){
	html = "";
	for (var i = 0; i < list.length; i++){
		html += parseProject(list[i]);
	}

	$('#accordion-ecole').html ( html );
}

function parseProject(project){
	var html = '<div class="panel panel-default">'
		+ '<div class="panel-heading">' 
		+ '<div class="panel-title">';

	html += '<a data-toggle="collapse" data-parent="#accordion-perso" href="#' + project.id + '">';

	// PROJECT HEAD
	html += '<h3 class="mission-title"> ' + project.title 
				+ '<span class="pull-right" style="padding: 0 10; margin:10 0">'
					+ '<i class="icon-arrow-down"></i>'
				+ '</span>'
				+ '<span class="pull-right CV-date" style="padding-right: 10"> ' + project.date + '</span>'
			+ '</h3></a></div></div>';

	// PROJECT DESC
	html += '<div id="' + project.id + '" class="panel-collapse collapse">'
				+ '<div class="panel-body">'
					+ '<p>' + project.description +'</p>';


	if (project.taches !== null && project.taches.length !== 0){
		html += ((lang === "en") ? '<h5>Tasks performed</h5>' : '<h5>Tâches effectuées</h5>');
		html += '<ul class="Mission">';
		
		for (var i = 0; i < project.taches.length; i++){
			html += '<li>' + project.taches[i].description + '</li>';
		}

		html += '</ul>';
	}

	if (project.technologies !== null){
 		html += '<h5>Technologies</h5>'
			+ '<p class="Techno">' + project.technologies + '</p>';
 	}

	html += '</div></div></div>'

	return html;
}
									