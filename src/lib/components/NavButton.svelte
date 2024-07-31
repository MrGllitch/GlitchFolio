<script lang="ts">
	export let main: Boolean = false;
	export let text: string;
	export let href: string;
</script>

<div class="text-special_gray transition hover:text-text_light text-special font-special w-fit">
	<a {href}>
		{#if main}
			<span class="text-text_light">{text}</span>
		{:else}
			<span>{text}</span>
		{/if}
	</a>
</div>
