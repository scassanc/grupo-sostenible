const $tabButtons = document.querySelectorAll(".tab-button");
const $tabPanels = document.querySelectorAll(".tab-panel");

$tabButtons.forEach(($button) => {
	$button.addEventListener("click", () => {
		const targetTab = $button.dataset.tab;

		$tabButtons.forEach((btn) => {
			btn.classList.remove("active");
		});

		$button.classList.add("active");

		$tabPanels.forEach((panel) => {
			if (panel.id === targetTab) {
				panel.classList.add("active");
			} else {
				panel.classList.remove("active");
			}
		});
	});
});
