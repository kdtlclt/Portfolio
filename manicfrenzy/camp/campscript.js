const wanderers = document.querySelectorAll(".wanderer");
const camp = document.querySelector(".campsite");

const overlay = document.querySelector(".dark-overlay");
const closeBtn = document.querySelector(".overlay-close");
const name = document.querySelector(".oc-name");
const images = document.querySelector(".oc-images");
const desc = document.querySelector(".oc-desc");
const panel = document.querySelector(".oc-panel");
const afLink = document.querySelector(".artfight-link");

const ocs = {
	Test1: {
		name: "Testonius1",
		desc: "testingtes",
		artfight: "https://artfight.net/~KDT",
		images: [
			"ocAssets/test1/timg1.png",
			"ocAssets/test1/timg2.png",
			"ocAssets/test1/timg3.png"
		]
	},
	Test2: {
		name: "Testonius2",
		desc: "testingtes2",
		images: [
			"ocAssets/test2/timg1.png",
			"ocAssets/test2/timg2.png"
		]
	},
	lyssa: {
		name: "Lyssa",
		desc: "[SPECIES: Dark Elf] <br><br>"
		+ "Overworked, pissed off and tired. <br>"
		+ "Runs on coffee and anger management pills.",
		artfight: "https://artfight.net/character/4171983.lyssa",
		size: 1,
		images: [
		]
	}
};

window.addEventListener("load", () => {
	const speed = 50;
	const roomWidth = camp.clientWidth;
	const roomHeight = camp.clientHeight;
	const walkTop = roomHeight * 0.5;
	
	
	//Initial size
	const wandererSize = camp.clientWidth * (250 / 2400);
	wanderers.forEach(wanderer => {
		const image = wanderer.querySelector("img");
		image.style.height = `${wandererSize}px`;
		image.style.width = "auto";
	});
	
	// update size
	window.addEventListener("resize", () => {
		const wandererSize = camp.clientWidth * (250 / 2400);

		wanderers.forEach(wanderer => {
			const image = wanderer.querySelector("img");
			image.style.height = `${wandererSize}px`;
			image.style.width = "auto";
		});
	});
	
	
	// overlay close button
	closeBtn.addEventListener("click", () => {
		overlay.style.display = "none";
	});
	
	wanderers.forEach(wanderer => {
		const image = wanderer.querySelector("img");
		const bounce = wanderer.querySelector(".bounce-wrapper");
		
		// Overlay
		wanderer.addEventListener("click", () => {
			overlay.style.display = "flex";
			const oc = ocs[wanderer.dataset.oc];
			panel.scrollTop = 0;
			name.textContent = oc.name;
			desc.innerHTML = oc.desc;
			
			// Show artfight link if it exists
			if (oc.artfight) {
				afLink.href = oc.artfight;
				afLink.style.display = "block";
			} else {
				afLink.style.display = "none";
			}
			
			images.innerHTML = "";
			
			oc.images.forEach(imagePath => {
				const img = document.createElement("img");
				img.src = imagePath;
				images.appendChild(img);
			});
		});
		
		// Initial position
		wanderer.style.visibility = "visible";
		let curX = Math.random() * (roomWidth - wanderer.clientWidth);
		let curY = walkTop + Math.random() * (roomHeight - wanderer.clientHeight - walkTop);
		wanderer.style.transform = `translate(${curX}px, ${curY}px)`;
		
		moveWanderer();
		
		function moveWanderer() {
			// Recalculate in case window size changed
			const roomWidth = camp.clientWidth;
			const roomHeight = camp.clientHeight;
			const walkTop = roomHeight * 0.5;
			
			// Random destination inside the room
			const destX = Math.random() * (roomWidth - wanderer.clientWidth);
			const destY = walkTop + Math.random() * (roomHeight - wanderer.clientHeight - walkTop);
			
			// Calculate movement time
			const distance = Math.sqrt(Math.pow(destX - curX, 2) + Math.pow(destY - curY, 2));
			const time = distance / speed;
			
			// Flip image depending on movement direction
			if (destX > curX) {
				image.style.transform = "scaleX(-1)";
			} else if (destX < curX) {
				image.style.transform = "scaleX(1)";
			}
			
			// Add and remove bounce
			bounce.classList.add("walking");
			setTimeout(() => {
				bounce.classList.remove("walking");
			}, time * 1000);
			
			// Move
			wanderer.style.transition = `transform ${time}s linear`;
			wanderer.style.transform = `translate(${destX}px, ${destY}px)`;
			
			// Update current location
			curX = destX;
			curY = destY;
			
			// Recursion after waiting a while
			const breakTime = Math.random() * 5000;
			setTimeout(moveWanderer, time * 1000 + breakTime);
		}
	});
	
	
	
	function updateWandererZIndexes() {
		wanderers.forEach(wanderer => {
			// Update based on bottom of the feet
			wanderer.style.zIndex = Math.round(
				wanderer.getBoundingClientRect().bottom
			);
		});
		requestAnimationFrame(updateWandererZIndexes);	// constant
	}
	updateWandererZIndexes();
});
