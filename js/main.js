const btnShare = document.querySelector('.btn-share')
const shareLink = document.querySelector('.share-section')

const showShare = () => {
	// function toggle class with display
	shareLink.classList.toggle('non-active')
}

btnShare.addEventListener('click', e => {
	// button event listener on click
	showShare()
})
