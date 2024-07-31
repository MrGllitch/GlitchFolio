<script lang="ts">
	export let school: string;
	export let field: string;
	export let desc: string;
</script>

<div class="flex flex-col text-text_light">
	<h3 class="font-heading3 text-heading3">
		{school}
	</h3>
	<h5 class="font-special text-special">
		{field}
	</h5>
	<p class="font-body text-body">
		{desc}
	</p>
</div>
