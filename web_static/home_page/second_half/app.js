// feature_container animation on scrolling
// Create the observer like the examples above
const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
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
