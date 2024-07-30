<script lang="ts">
	import { _ } from 'svelte-i18n';
	import '$lib/i18n';
	import '../app.css';
	import NavButton from '$lib/components/NavButton.svelte';
	import img from '$lib/assets/image0.jpg';
</script>

<div class="text-text_light bg-background_dark flex flex-col h-full w-full">
	<div class="h-screen w-full flex flex-row">
		<!-- main -->
		<div class="w-1/3 flex justify-center my-10">
			<!-- img -->
			<img class=" w-[512px]" src={img} alt="Me" />
		</div>
		<div class="w-2/3 flex flex-row gap-32 mx-16">
			<!-- nav landing -->
			<div class="flex flex-col gap-24 justify-center">
				<NavButton text="Úvod" href="" />
				<NavButton text="O mně" href="" />
				<NavButton text="Projekty" href="" />
				<NavButton text="Kontakt" href="" />
			</div>
			<div class="flex flex-col gap-24 justify-center">
				<h1 class="font-heading1 text-heading1 leading-none w-fit">
					Matěj<br />
					<span class=" font-heading2 text-heading2 leading-none align-[1rem]">GLITCH <br /></span> Kratochvíl
				</h1>
				<p class=" w-fit font-heading3 text-heading3">
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean placerat. Donec quis nibh
					at felis congue commodo. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis
					vel sapien. In rutrum.
				</p>
			</div>
		</div>
	</div>
	aa
	<section class="about"></section>
	<section class="projects"></section>
	<section class="contact"></section>
</div>
