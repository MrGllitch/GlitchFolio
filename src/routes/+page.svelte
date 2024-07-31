<script lang="ts">
	import { _ } from 'svelte-i18n';
	import '$lib/i18n';
	import '../app.css';
	import NavButton from '$lib/components/NavButton.svelte';
	import img from '$lib/assets/image0.jpg';
	import img1 from '$lib/assets/image1.jpg';
	import AboutItem from '$lib/components/AboutItem.svelte';
</script>

<div class="text-text_light bg-background_dark flex flex-col">
	<div class="flex flex-row h-screen" id="main">
		<!-- main -->
		<div class="w-1/3 flex justify-center py-10">
			<!-- img -->
			<img class=" w-[512px]" src={img} alt="Me" />
		</div>
		<div class="w-2/3 flex flex-row gap-32">
			<!-- nav landing -->
			<div class="mx-16 flex flex-col gap-24 justify-start">
				<NavButton text="Úvod" href="#main" main={true} />
				<NavButton text="O mně" href="#about" />
				<NavButton text="Projekty" href="#projects" />
				<NavButton text="Kontakt" href="#contact" />
			</div>
			<div class="flex flex-col gap-24 justify-center">
				<h1 class="font-heading1 text-heading1 leading-none w-fit">
					Matěj<br />
					<span class=" font-heading2 text-heading2 leading-none align-[1rem]">GLITCH <br /></span> Kratochvíl
				</h1>
				<p class="  w-5/6 font-heading3 text-heading3">
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean placerat. Donec quis nibh
					at felis congue commodo. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis
					vel sapien. In rutrum.
				</p>
			</div>
		</div>
	</div>
	<div class="flex flex-row h-screen my-16" id="about">
		<!-- About Me -->
		<div class="flex flex-col w-1/3 px-16 my-8 gap-16">
			<img src={img1} alt="profile rounded" class=" w-64 h-64 rounded-full" />
			<p class="font-body text-body">
				Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean placerat. Donec quis nibh
				at felis congue commodo. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel
				sapien. In rutrum.
			</p>
		</div>
		<div class="flex flex-col w-2/3 gap-16 my-16">
			<h2 class="font-heading2 text-heading2">O mně</h2>
			<AboutItem
				school="Střední průmyslová škola elektrotechnická a Vyšší odborná škola Pardubice"
				field="Telekomunikace"
				desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean placerat. "
			/>
			<AboutItem
				school="Mendlova Univerzita v Brně"
				field="Otevřená Informatika"
				desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean placerat. "
			/>
		</div>
	</div>

	<div class="flex flex-row" id="projects">
		<!-- Projects -->
		Projekty
		<p>a</p>
	</div>
	<div class="flex flex-row" id="contact">
		<!-- Contact -->
		Kontakt
		<p>a</p>
	</div>
</div>
