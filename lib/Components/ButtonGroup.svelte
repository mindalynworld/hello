<script lang="ts">
  import Button from './Button.svelte';

  let { options, selectedOption = $bindable() } = $props();

  function selectOption(option: {label: string, route: string}) {
    selectedOption = option;
  }
</script>

<div class="button-group">
  {#each options as option}
    <Button theme="primary" active={selectedOption.label === option.label} label={option.label} clickHandler={() => selectOption(option)}></Button>
  {/each}
</div>

<style>
  :root {
      --primary: var(--primary-color);
      --primary-contrast: var(--secondary-color);
  }

  .button-group {
    display: flex;
    gap: 8px; /* Spacing between buttons */
    flex-direction: row;
    justify-content: center;
    padding: 1rem;
  }
</style>