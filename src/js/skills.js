// Function to check if the element is in view
const isInView = (element) => {
	const rect = element.getBoundingClientRect()
	return rect.top >= 0 && rect.bottom <= window.innerHeight
}

// Function to update the a progress bar
const updateElementProgress = (element) => {
	let progressWidth = 1
	const randomSeconds = Math.round(Math.random() * 20)
	// increase the progress-bar in (x) amount of seconds
	let id = setInterval(() => {
		if (progressWidth >= element.dataset.skill) {
			clearInterval(id)
		} else if (isInView(element)) {
			progressWidth++
			const progressCount = `${progressWidth}%`
			element.style.width = progressCount
			element.textContent = progressCount
		}
	}, randomSeconds)
}

// Function to update all progress bar element when added to it.
const updateProgress = (elements) => {
	elements.forEach((element) => {
		if (element.dataset.skill) {
			updateElementProgress(element)
		}
	})
}

export default updateProgress
