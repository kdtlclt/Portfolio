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
		name: "<span style=\"color: #FF0050;\">Claws</span>",
		desc: "Not as fun as she seems..",
		artfight: "https://artfight.net/character/7698021.claws",
		size: 1,
		images: [
			"../ocAssets/claws/clawsref.png",
			"../ocAssets/claws/claws.png",
			"../ocAssets/claws/bat.png",
			"../ocAssets/claws/clawspinup.png"
		]
	},
	livi: {
		name: "<span style=\"color: #593B83;\">Livi</span>",
		desc: "[SPECIES: Snow Elf] <br><br>"
		+ "totally not just hornybait",
		artfight: "https://artfight.net/character/4172081.livi",
		size: 1,
		images: [
			"../ocAssets/livi/overalls.png",
			"../ocAssets/livi/knees.png",
			"../ocAssets/livi/livilaying.png",
			"../ocAssets/livi/livitowel.png"
		]
	},
	gloomy: {
		name: "<span style=\"color: #AEDEFD;\">Gloomy</span>",
		desc: "She's storming",
		artfight: "https://artfight.net/character/4172196.gloomy",
		size: 1,
		images: [
			"../ocAssets/gloomy/gloomy.png",
			"../ocAssets/gloomy/gloombehind.png",
			"../ocAssets/gloomy/gloomcap.png",
			"../ocAssets/gloomy/gloomcap2.png",
			"../ocAssets/gloomy/gloomcap3.png",
			"../ocAssets/gloomy/corrupt.png",
			"../ocAssets/gloomy/gloomysea.png"
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
		name: "<span style=\"color: #86579D;\">Vin</span>",
		desc: "[SPECIES: Snow Elf] <br><br>"
		+ "least violent femboy..",
		artfight: "https://artfight.net/character/7719988.vin",
		size: 1,
		images: [
			"../ocAssets/vin/vinref.png",
			"../ocAssets/vin/restroom.png",
			"../ocAssets/vin/collector.png",
			"../ocAssets/vin/selfie.png",
			"../ocAssets/vin/sling.png",
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
		name: "<span style=\"color: #5B6694;\">Sade</span>",
		desc: "[SPECIES: Siren] <br><br>"
		+ "trustworthy :)",
		artfight: "https://artfight.net/character/3799627.sade",
		size: 1.2,
		images: [
			"../ocAssets/sade/saderef.png",
			"../ocAssets/sade/sade.png",
			"../ocAssets/sade/sadestare.png"
		]
	},
	lim: {
		name: "<span style=\"color: #55427A;\">Lim</span>",
		desc: "[SPECIES: Slime] <br><br>"
		+ "sticky",
		artfight: "https://artfight.net/character/7853971.lim",
		size: 1,
		images: [
			"../ocAssets/lim/limref.png",
			"../ocAssets/lim/lim.png",
			"../ocAssets/lim/slimeonknees.png",
			"../ocAssets/lim/slimebikini.png"
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
	},
	apollo: {
		name: "<span style=\"color: #8D7FA4;\">Apollo</span>",
		desc: "[SPECIES: <i>Parnassius apollo</i>] <br><br>"
		+ "You can't spell \"sassy\" without \Apollo\". ohwait <br>"
		+ "He's very confident with his looks. If there ever is a spotlight, he'll probably make his way to it.",
		artfight: "https://artfight.net/character/7947589.apollo",
		size: 1,
		images: [
			"../ocAssets/apollo/apollo.png",
			"../ocAssets/apollo/smile.png"
		]
	},
	stripes: {
		name: "<span style=\"color: #BBB5DC;\">Stripes</span>",
		desc: "[SPECIES: <i>Heliconius charithonia,</i> The Zebra Longwing] <br><br>"
		+ "He's a flirt. <br>"
		+ "Stripes is very touch starved. He loves hugging people, often forgetting that a lot of them have boundaries.",
		artfight: "https://artfight.net/character/7951077.stripes",
		size: 1,
		images: [
			"../ocAssets/stripes/stripes.png"
		]
	},
	sail: {
		name: "<span style=\"color: #52506B;\">Sail</span>",
		desc: "[SPECIES: <i>Iphiclides podalirius,</i> The Scarce Swallowtail] <br><br>"
		+ "He's a flirt. <br>"
		+ "Sail might seem pretty pissed at first but that's partly a facade. <br>"
		+ "He's insecure with himself so he's trying to act more intimidating (but he does get frustrated easily).",
		artfight: "https://artfight.net/character/7951083.sail",
		size: 1,
		images: [
			"../ocAssets/sail/sail.png"
		]
	},
	sorrow: {
		name: "<span style=\"color: #1DAACD;\">Sorrow</span>",
		desc: "[SPECIES: <i>Graphium sarpedon,</i> The Common Bluebottle] <br><br>"
		+ "A chronic overthinker <br>"
		+ "Sorrow likes being with his friends but he never wants to be the center of attention. <br>"
		+ "Also, he's not a fan of suddenly being touched without a warning. (Stripes should take some notes)",
		artfight: "https://artfight.net/character/7951085.sorrow",
		size: 1,
		images: [
			"../ocAssets/sorrow/sorrow.png",
			"../ocAssets/sorrow/sorrow-waiter.png"
		]
	},
	rose: {
		name: "<span style=\"color: #D7296E;\">Rose</span>",
		desc: "[SPECIES: <i>Pachliopta aristolochiae,</i> The Common Rose] <br><br>"
		+ "Rose lives for attention and compliments. <br>"
		+ "He's always trying to be very cutesy and likes being treated like a prince. <br>"
		+ "But sometimes he's a bit too self-centered and gets jealous easily..",
		artfight: "https://artfight.net/character/7951088.rose",
		size: 1,
		images: [
			"../ocAssets/rose/rose.png"
		]
	},
	resin: {
		name: "<span style=\"color: #845B2D;\">Resin</span>",
		desc: "[SPECIES: <i>Haetera piera,</i> The Amber Phantom] <br><br>"
		+ "No one really knows what's going on in his head. Talking to him is like communicating with a ghost. <br>"
		+ "He whispers everything he says. <br><br>"
		+ "Resin's kind of confused when it comes dealing with other people. He's kind and cares for others but often has a hard time expressing that.",
		artfight: "https://artfight.net/character/7951095.resin",
		size: 1,
		images: [
			"../ocAssets/resin/resin.png",
			"../ocAssets/resin/resin2.png"
		]
	},
	sully: {
		name: "<span style=\"color: #FFBC22;\">Sully</span>",
		desc: "[SPECIES: <i>Phoebis philea,</i> The Orange-Barred Sulphur] <br><br>"
		+ "Very easygoing, very chill <br>"
		+ "He's kind of just hanging out..",
		artfight: "https://artfight.net/character/7951402.sully",
		size: 1,
		images: [
			"../ocAssets/sully/sully.png"
		]
	},
	rook: {
		name: "<span style=\"color: #22EE74;\">Rook</span>",
		desc: "[SPECIES: <i>Trogonoptera brookiana,</i> Rajah Brooke's Birdwing] <br><br>"
		+ "That's not a femboy... That's a fem-man! <br>"
		+ "Rook is almost as strong as he is flashy.",
		artfight: "https://artfight.net/character/7951405.rook",
		size: 1,
		images: [
			"../ocAssets/rook/rook.png"
		]
	},
	lehti: {
		name: "<span style=\"color: #4F4337;\">Lehti</span>",
		desc: "[SPECIES: <i>Kallima inachus,</i> The Dead Leaf] <br><br>"
		+ "Lehti is kind of a mess who will easily get a panic attack. <br>"
		+ "He's generally a nice person but the zombie-esque vibe doesn't make him seem very trustworthy..",
		artfight: "https://artfight.net/character/7951412.lehti",
		size: 1,
		images: [
			"../ocAssets/lehti/lehti.png"
		]
	},
	angel: {
		name: "<span style=\"color: #FF1057;\">Angel</span>",
		desc: "[SPECIES: <i>Chorinea sylphina,</i> The Sylphina Angel] <br><br>"
		+ "Incredibly nice, really positive. Angel is always trying to make sure everyone around him is having a good time. <br>"
		+ "He sometimes tries too hard to reach that goal and ends up exhausting himself.",
		artfight: "https://artfight.net/character/7951417.angel",
		size: 1.2,
		images: [
			"../ocAssets/angel/angel.png"
		]
	},
	sphinx: {
		name: "<span style=\"color: #78614A;\">Sphinx</span>",
		desc: "[SPECIES: <i>Smerinthus jamaicensis,</i> The Twin-Spotted Sphinx] <br><br>"
		+ "Sphinx is incredibly strict when it comes to the way she makes herself look.. <br>"
		+ "She's not easily impressed.",
		artfight: "https://artfight.net/character/8079732.sphinx",
		size: 1,
		images: [
			"../ocAssets/sphinx/sphinx.png"
		]
	},
	keri: {
		name: "<span style=\"color: #F26419;\">Keri</span>",
		desc: "[SPECIES: <i>Arctia caja,</i> The Garden Tiger Moth] <br><br>"
		+ "She would easily break the arms of your enemies, bend steel and pat you on your cute little head",
		artfight: "https://artfight.net/character/8079745.keri",
		size: 1.2,
		images: [
			"../ocAssets/keri/keri.png"
		]
	},
	vesta: {
		name: "<span style=\"color: #F50071;\">Vesta</span>",
		desc: "[SPECIES: <i>Spilosoma vestalis,</i> The Vestal Tiger-moth] <br><br>"
		+ "Just because she's fluffy, doesn't mean you can all of a sudden hug her. <br>"
		+ "Happens more often than you'd think..",
		artfight: "https://artfight.net/character/8079747.vesta",
		size: 1.2,
		images: [
			"../ocAssets/vesta/vesta.png"
		]
	},
	maple: {
		name: "<span style=\"color: #FE88C5;\">Maple</span>",
		desc: "[SPECIES: <i>Dryocampa rubicunda,</i> The Rosy Maple Moth] <br><br>"
		+ "Kind of nervous, kind of fidgety",
		artfight: "https://artfight.net/character/8079755.maple",
		size: 1.2,
		images: [
			"../ocAssets/maple/maple.png"
		]
	},
	carina: {
		name: "<span style=\"color: #9B70AF;\">Carina</span>",
		desc: "[SPECIES: <i>Scopula decorata,</i> The Middle Lace Border] <br><br>"
		+ "That IS my card! How the fuck did you do that???!!!?",
		artfight: "https://artfight.net/character/8079769.carina",
		size: 1.2,
		images: [
			"../ocAssets/carina/carina.png",
			"../ocAssets/carina/card.png"
		]
	},
	crimson: {
		name: "<span style=\"color: #F7066A;\">Crimson</span>",
		desc: "[SPECIES: <i>Utetheisa pulchella,</i> The Crimson-Speckled Flunkey] <br><br>"
		+ "allegedly dangerous.... <br>"
		+ "don't worry about the blood, YOU HAVE NO PROOF OF ANY VIOLENT ALTERCATIONS",
		artfight: "https://artfight.net/character/8079760.crimson",
		size: 1,
		images: [
			"../ocAssets/crimson/crimson.png"
		]
	},
	cinnamon: {
		name: "<span style=\"color: #B60057;\">Cinnamon</span>",
		desc: "[SPECIES: <i>Tyria jacobaeae,</i> The Cinnabar Moth] <br><br>"
		+ "Cinnamon's kind of self-conscious about her hair and her wings and her face and her clothes and her personality and her.. You get the idea",
		artfight: "https://artfight.net/character/8079779.cinnamon",
		size: 1,
		images: [
			"../ocAssets/cinnamon/cinnamon.png"
		]
	},
	silk: {
		name: "<span style=\"color: #B60057;\">Silk</span>",
		desc: "[SPECIES: <i>Hyalophora cecropia,</i> The Cecropia Moth] <br><br>"
		+ "Her clothes are probably more expensive than you are..",
		artfight: "https://artfight.net/character/8079792.silk",
		size: 1.2,
		images: [
			"../ocAssets/silk/silk.png"
		]
	},
	mallory: {
		name: "<span style=\"color: #FFC92B;\">Mallory</span>",
		desc: "[SPECIES: <i>Acherontia atropos,</i> The African Death's-Head Hawkmoth] <br><br>"
		+ "She'll beat the shit out of you if you look at her the wrong way",
		artfight: "https://artfight.net/character/8079774.mallory",
		size: 1.2,
		images: [
			"../ocAssets/mallory/mallory.png"
		]
	},
	belle: {
		name: "<span style=\"color: #47CD6F;\">Belle</span>",
		desc: "[SPECIES: <i>Graellsia isabellae,</i> The Spanish Moon Moth] <br><br>"
		+ "If it looks like butterfly, flies like a butterfly and acts like a butterfly... is it a butterfly? <br>"
		+ "<i>No.</i>",
		artfight: "https://artfight.net/character/8079763.belle",
		size: 1.2,
		images: [
			"../ocAssets/belle/belle.png"
		]
	},
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
