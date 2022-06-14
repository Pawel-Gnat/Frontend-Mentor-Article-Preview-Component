const btnShare = document.querySelector('.btn-share')
const shareLink = document.querySelector('.share-section')
const arrowColor = document.querySelector('#arrow-color')

const showShare = () => {
	// function toggle class with display
	shareLink.classList.toggle('active')
}

const changeColor = () => {
	// function toggle class with background-color
	if (shareLink.classList.contains('active')) {
		btnShare.style.backgroundColor = 'var(--light-grayish-blue)'
		arrowColor.style.filter = 'inherit'
	} else {
		btnShare.style.backgroundColor = 'var(--grayish-blue)'
		arrowColor.style.filter = 'saturate(1) brightness(5)'
	}
}

btnShare.addEventListener('click', e => {
	// button event listener on click
	showShare()
	changeColor()
})
