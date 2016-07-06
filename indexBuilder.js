var HTMLskillsStart = '<h3 id="skills-h3">Who am I?</h3><ul id="name" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text"><p>%data%</p></span></li>';

var bio = {
		"skills" : ["Supporting business development in early stages of a start-up", "Providing legal advice and assessments on compliance with EU and national Laws in performing legal research", "Dedicated to internal and external communication (press release, etc.)"],
}
if (bio.skills.length > 0) {
	$("#name").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#name").append(formattedSkill);
}

$("#name").append(formattedSkill);


var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var work = {
	"jobs" : [
		{
			"employer" : "Soyan Vitamed",
			"title" : "Business Developer",
			"dates" : "2015, 2016",
			"location": "Berlin",
			"description" : "Supported business development by B2B prospection and Account management (Salesforce) resulting in increased sales Initiated B2C correspondence leading to a feedback database Managed Marketing campaigns by managing the social media (Instagram, Pinterest), being pro-active in social media crisis, liaising with bloggers, organising Fairs, pitching stories in female oriented forums, negotiating budgets and contracts (website layout design, e-mailing, affiliation), and ultimately growing the community, creating and maintaining brand image Ensured the successful functioning and strategy by providing legal advice, checking procedurals documents, analysing and assessing on compliance"
		},
		{
			"employer" : "Arvato",
			"title" : "Social Media Compliance Consultant",
			"dates" : "2015 - Current",
			"location": "Berlin",
			"description" : "Ensured that users comply with the regulatory social media requirements and policies Identified issues as a French Market Specialist"
		}
	]
}

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}
displayWork();