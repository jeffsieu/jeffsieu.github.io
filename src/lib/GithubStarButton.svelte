<script lang="ts">
	export let githubHref: string;

	export const ownerAndRepo = githubHref.split('/').slice(-2).join('/');
</script>

<a
	class="github-button"
	href={githubHref}
	data-color-scheme="no-preference: light; light: light; dark: dark;"
	data-show-count="true"
	data-size="large"
	aria-label="Star {ownerAndRepo} on GitHub">Star</a
>
