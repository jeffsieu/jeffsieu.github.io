<a href={href} target={target} style="--text-color: {textColor}; --bg-color: {backgroundColor}">
  <slot></slot>
</a>

<script lang="ts">
  export let href: string;
  export let textColor: string = "black";
  export let backgroundColor: string = "white";
  export let target: string = "_blank";
</script>

<style>
a {
  padding: 0.5rem 0.75rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid var(--text-color);
  color: var(--text-color);
  font-weight: 600;
  background-color: var(--bg-color);

  --offset: 0px;
  transform: translate(calc(-1 * var(--offset)), calc(-1 * var(--offset)));
  box-shadow: calc(4px + var(--offset)) calc(4px + var(--offset)) 0px 0px var(--text-color);
  
  transition: all 0.2s;
}

a:active,
a:hover:active {
  --offset: -4px;
  transform: translate(calc(-1 * var(--offset)), calc(-1 * var(--offset)));
  box-shadow: calc(4px + var(--offset)) calc(4px + var(--offset)) 0px 0px var(--text-color);
}

a:focus,
a:hover {
  color: var(--bg-color);
  background-color: var(--text-color);
  border: 1px solid var(--bg-color);
  --offset: 0px;
  transform: translate(calc(-1 * var(--offset)), calc(-1 * var(--offset)));
  box-shadow: calc(4px + var(--offset)) calc(4px + var(--offset)) 0px 0px var(--text-color);
}
</style>