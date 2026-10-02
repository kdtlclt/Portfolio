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
	lyssa: {
		name: "<span style=\"color: #452E48;\">Lyssa</span>",
		desc: "[SPECIES: Dark Elf] <br><br>"
		+ "Overworked, pissed off and tired. <br>"
		+ "Runs on coffee and anger management pills.",
		artfight: "https://artfight.net/character/4171983.lyssa",
		size: 1,
		images: [
			"../ocAssets/lyssa/lysref.png",
			"../ocAssets/lyssa/lyssa.png"
		]
	},
	feli: {
		name: "<span style=\"color: #DD1156;\">Feli</span>",
		desc: "a very happy (but occasionally awkward) monster girl",
		artfight: "https://artfight.net/character/3081016.feli",
		size: 1,
		images: [
			"../ocAssets/feli/feliref.png",
			"../ocAssets/feli/felipeephole.png",
			"../ocAssets/feli/feliselfie.png"
		]
	},
	person: {
		name: "<span style=\"color: #B0FE76;\">\"person\"</span>",
		desc: "[SPECIES: Stone Golem] <br><br>"
		+ "Does \"person\" even have a \"personality\"? <br>"
		+ "Who knows...",
		artfight: "https://artfight.net/character/8004706.person",
		size: 1.2,
		images: [
			"../ocAssets/person/personref.png",
			"../ocAssets/person/per.png",
			"../ocAssets/person/personrotate.png"
		]
	},
	villa: {
		name: "<span style=\"color: #FFC846;\">Villa</span>",
		desc: "[SPECIES: Sheep] <br><br>"
		+ "baabaa <br>"
		+ "idk what to write here <br><br>"
		+ "baa",
		artfight: "https://artfight.net/character/7983373.villa",
		size: 1,
		images: [
			"../ocAssets/villa/villaref.png",
			"../ocAssets/villa/villakukka.png",
			"../ocAssets/villa/villaswimsuit.png",
			"../ocAssets/villa/villasuspenders.png",
			"../ocAssets/villa/shep.png",
			"../ocAssets/villa/villawitch.png"
		]
	},
	sylvia: {
		name: "<span style=\"color: #2C4C43;\">Sylvia</span>",
		desc: "an isolated \"monster\" who lives in the woods",
		artfight: "https://artfight.net/character/2836238.sylvia",
		size: 1.5,
		images: [
			"../ocAssets/sylvia/sylref.png",
			"../ocAssets/sylvia/sylbw.png"
		]
	},
	claws: {
		name: "Claws",
		desc: "Not as fun as she seems..",
		artfight: "https://artfight.net/character/7698021.claws",
		size: 1,
		images: [
		]
	},
	livi: {
		name: "Livi",
		desc: "[SPECIES: Snow Elf] <br><br>"
		+ "totally not just hornybait",
		artfight: "https://artfight.net/character/4172081.livi",
		size: 1,
		images: [
		]
	},
	gloomy: {
		name: "Gloomy",
		desc: "She's storming",
		artfight: "https://artfight.net/character/4172196.gloomy",
		size: 1,
		images: [
		]
	},
	eni: {
		name: "<span style=\"color: #7500CB;\">Eni</span>",
		desc: "unpredictable menace",
		artfight: "https://artfight.net/character/4172297.eni",
		size: 1.2,
		images: [
			"../ocAssets/eni/enifullbody.png",
			"../ocAssets/eni/shroom-spellcaster.gif",
			"../ocAssets/eni/LAstreamer.png",
			"../ocAssets/eni/gemalarm.gif"
		]
	},
	keeper1: {
		name: "<span style=\"color: #906EA4;\">The First Lighthouse Keeper</span>",
		desc: "A keeper of one the three Great Lighthouses <br><br>"
		+ "The Lighthouse Keepers are mysterious godlike creatures that live in the mountains." 
		+ " Their job is to make sure the Great Lighthouses are working and to guard them from any plausible threats." 
		+ " As long as they work, so does reality.",
		artfight: "https://artfight.net/character/2594104.the-first-lighthouse-keeper",
		size: 1.2,
		images: [
			"../ocAssets/keepers/keeper1ref.png"
		]
	},
	keeper2: {
		name: "<span style=\"color: #293A44;\">The Second Lighthouse Keeper</span>",
		desc: "A keeper of one the three Great Lighthouses <br><br>"
		+ "The Lighthouse Keepers are mysterious godlike creatures that live in the mountains." 
		+ " Their job is to make sure the Great Lighthouses are working and to guard them from any plausible threats." 
		+ " As long as they work, so does reality.",
		artfight: "https://artfight.net/character/2632575.the-second-lighthouse-keeper",
		size: 1.2,
		images: [
			"../ocAssets/keepers/keeper2ref.png"
		]
	},
	keeper3: {
		name: "<span style=\"color: #6A243D;\">The Third Lighthouse Keeper</span>",
		desc: "A keeper of one the three Great Lighthouses <br><br>"
		+ "The Lighthouse Keepers are mysterious godlike creatures that live in the mountains." 
		+ " Their job is to make sure the Great Lighthouses are working and to guard them from any plausible threats." 
		+ " As long as they work, so does reality.",
		artfight: "https://artfight.net/character/2652040.the-third-lighthouse-keeper",
		size: 1.4,
		images: [
			"../ocAssets/keepers/keeper3ref.png"
		]
	},
	vin: {
		name: "Vin",
		desc: "[SPECIES: Snow Elf] <br><br>"
		+ "least violent femboy..",
		artfight: "https://artfight.net/character/7719988.vin",
		size: 1,
		images: [
		]
	},
	laria: {
		name: "<span style=\"color: #3F624C;\">Laria</span>",
		desc: "[SPECIES: Elf, Undead] <br><br>"
		+ "Dying didn't stop her. What makes you think anything else can?",
		artfight: "https://artfight.net/character/6356860.laria",
		size: 1,
		images: [
			"../ocAssets/laria/lariaref.png",
			"../ocAssets/laria/stare.png",
			"../ocAssets/laria/lariapose.png",
			"../ocAssets/laria/larialay.png"
		]
	},
	sade: {
		name: "Sade",
		desc: "[SPECIES: Siren] <br><br>"
		+ "trustworthy :)",
		artfight: "https://artfight.net/character/3799627.sade",
		size: 1.3,
		images: [
		]
	},
	lim: {
		name: "Lim",
		desc: "[SPECIES: Slime] <br><br>"
		+ "sticky",
		artfight: "https://artfight.net/character/7853971.lim",
		size: 1,
		images: [
		]
	},
	clover: {
		name: "<span style=\"color: #FA7BB0;\">Clover</span>",
		desc: "[SPECIES: Northern Hawk-Owl] <br><br>"
		+ "yo, yo-yo",
		artfight: "https://artfight.net/character/8124207.clover",
		size: 1,
		images: [
			"../ocAssets/clover/clover.png",
			"../ocAssets/clover/yoyotrick.png",
			"../ocAssets/clover/mice_cream.png"
		]
	},
	valentine: {
		name: 'The <span style="color:rgb(255,99,177);">Valiant TINE-Operative</span>',
		desc: `(or "Valentine") <br><br>
		After years of research, development and testing, our team of experts have
		finally finished the latest model in the TINE-family. (Pristine, Guillotine, Routine etc.) <br><br>
		Meet <span style="color:rgb(255,99,177);">Valentine</span>, your personal assistant, bodyguard and friend. <br><br>
		<em>Brought to you by TINE Robotics</em> <br>
		<span style="font-size:15px;">[Disclaimer: TINE Robotics is not responsible for the possibility of one of our operatives misidentifying
		targets and executing everything the model determines to be a threat. This might include property, pets,
		significant others or family members.]</span>`,
		artfight: "https://artfight.net/character/9119168.valentine",
		size: 1,
		images: [
			"../ocAssets/valentine/ValentineRef.png",
			"../ocAssets/valentine/val.png"
		]
	},
	burrow: {
		name: "[UNNAMED]",
		desc: "[SPECIES: Burrowing Owl] <br><br>"
		+ "#1 customer of the local hardware store",
		size: 1,
		images: [
			"../ocAssets/burrow/preeria.png"
		]
	},
	glubslob: {
		name: "<span style=\"color: #BCA583;\">Glubslob</span>",
		desc: "Big creatures of unknown origin. Dangerous.",
		size: 2,
		images: [
			"../ocAssets/glubslob/glubslob.png"
		]
	},
	mellow: {
		name: "<span style=\"color: #C59FC3;\">Mellow</span>",
		desc: "[SPECIES: Cat] <br><br>"
		+ "Gigantic robot limbs, a gigantic axe and a gigantic heart (unless she gets angry)",
		artfight: "https://artfight.net/character/9359770.mellow",
		size: 1.3,
		images: [
			"../ocAssets/mellow/mellow.png"
		]
	},
	pinkdragon: {
		name: "[UNNAMED]",
		desc: "[SPECIES: Dragon] <br><br>"
		+ "A dragon that I drew one day. No name, no nothing yet..",
		size: 1,
		images: [
			"../ocAssets/pinkdragon/dragon.png"
		]
	},
	suo: {
		name: "[UNNAMED]",
		desc: "[SPECIES: Short-Eared Owl] <br><br>"
		+ "I don't think she's interested...",
		size: 1,
		images: [
			"../ocAssets/suo/suo.png",
			"../ocAssets/suo/slurp.png"
		]
	},
	orc: {
		name: "[UNNAMED]",
		desc: "[SPECIES: Orc] <br><br>"
		+ "bloodorc woman I drew in 2025 but haven't named",
		size: 1,
		images: [
			"../ocAssets/orc/orc.png"
		]
	}
};

window.addEventListener("load", () => {
	const speed = 50;
	const roomWidth = camp.clientWidth;
	const roomHeight = camp.clientHeight;
	const walkTop = roomHeight * 0.4;
	
	
	//Initial size
	wanderers.forEach(wanderer => {
		const image = wanderer.querySelector("img");
		const oc = ocs[wanderer.dataset.oc];
		const size = oc.size || 1;

		const wandererSize = camp.clientWidth * (280 / 2400) * size;

		image.style.height = `${wandererSize}px`;
		image.style.width = "auto";
	});
	
	// update size
	window.addEventListener("resize", () => {
		wanderers.forEach(wanderer => {
			const image = wanderer.querySelector("img");
			const oc = ocs[wanderer.dataset.oc];
			const size = oc.size || 1;

			const wandererSize = camp.clientWidth * (280 / 2400) * size;

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
			name.innerHTML = oc.name;
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
