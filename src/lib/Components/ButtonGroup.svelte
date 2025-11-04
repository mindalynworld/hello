<script lang="ts">
  import Button from './Button.svelte';

  let { options, selectedOption = $bindable(), onClick = () => {} } = $props();

  function selectOption(option: string) {
      selectedOption = option;
      onClick(option);
  }
  
</script>

<div class="toggle-menu">
  {#each options as option}
    <Button theme="primary" active={selectedOption === option} label={option} clickHandler={() => selectOption(option)}></Button>
  {/each}
</div>

<style>
  :root {
      --primary: var(--primary-color);
      --primary-contrast: var(--secondary-color);
  }

  .toggle-menu{
    display: flex;
    gap: 8px; /* Spacing between buttons */
    flex-direction: row;
    justify-content: center;
    padding: 1rem;
  }
</style>