<script lang="ts">
	export let text: string;
	export let href: string;
</script>

<div class="text-special_gray transition hover:text-text_light text-special font-special w-fit">
	<a {href}>
		{text}
	</a>
</div>
