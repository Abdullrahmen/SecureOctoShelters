// feature_container animation on scrolling
// Create the observer like the examples above
// Avoid Firefox setTimeout
setTimeout(()=>{
	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.intersectionRatio > 0) {
				entry.target.classList.add('animation');
				return;
			}
			entry.target.classList.remove('animation');
		});
		
	});
	// Get multiple elements instead of a single one using "querySelectorAll"
	features = document.querySelectorAll('.feature_container');
	features.forEach((element) => observer.observe(element));
	features = document.querySelectorAll('.title_1');
	features.forEach((element) => observer.observe(element));
	observer.observe(document.querySelector('.features_octopus'));
	
},100)



function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function check_domain(domain){
	let results = [["Malware", "Adware", "There is an adware in your website", "84DFA", "HIGH"],
		["Public info", "Sensitive information", "Your host provider is public (nginx)", "1B8C2", "Moderate"],
		["SSH", "SSH is not verified", "Your SSH certificate isn't verified", "97CCA", "Low"],
		["DDoS", "Volumetric (Gbps)", "Your server hasn't a protection against DDoS", "97CCA", "Very High"]]
	return results;
}

function fill_table(table, rows){
	rows.forEach(row => {
		newRow = table.insertRow(-1);
		row.forEach(element =>{
			newCell = newRow.insertCell(-1);
			newCell.textContent = element;
		})
	});
}

function security_check_submit() {
	let input_field = document.getElementById(`security_check_input`);
	let results_field = document.getElementById(`security_check_results`);
	let loading_container = document.getElementById("security_check_loading");
	let results_table = document.getElementById(`security_results_table`);

	if (input_field.value.trim().length == 0){
		input_field.placeholder = "Incorrect domain!";
		return;
	}
	input_field.placeholder = "Website domain";
	results_field.style.display = "none";
	loading_container.style.display = "flex";
	results = check_domain(input_field.value.trim());

	if (document.getElementById(`last_results`) !== null)
		document.getElementById(`last_results`).remove();
	results_table = results_table.createTBody();
	results_table.id = "last_results";
	fill_table(results_table, results);
	document.getElementById(`results_length`).textContent = results.length;
	sleep(5000).then(() => {
		loading_container.style.display = "none";
		results_field.style.display = "block";
	 });
}

function latest_news(id) {
	var pre_color = document.getElementById(`latest_news_text_${id}`).style.color;
	document.getElementById(`latest_news_text_${id}`).style.color = "#c44620";
	sleep(2000).then(() => {
		document.getElementById(`latest_news_text_${id}`).style.color = pre_color;
	});
}

// Scroll up functions
let scroll_button = document.getElementById(`scrollUp_button`);
window.onscroll = function() {
	if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
		if (scroll_button.style.display != "block"){
			scroll_button.style.display = "block";
			scroll_button.style.opacity = 0;
			for (let i = 0; i < 5; i++) {
				sleep(150).then(() => {scroll_button.style.opacity += 20;});
			}
		}
	} else {
		scroll_button.style.display = "none";
		scroll_button.style.opacity = 0;
	}
}
function scrollUp() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}