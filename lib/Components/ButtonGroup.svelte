<script lang="ts">
	import { goto } from "$app/navigation";

  let { options } = $props(); // selectedOption = $bindable(),

  let selectedOption = $state("about");

  function selectOption(option: {label: string, route: string}) {
    selectedOption = option.label;
    goto(option.route);
  }
</script>

<div class="button-group">
  {#each options as option}
    <button
      class:active={selectedOption === option.label}
      onclick={() => selectOption(option)}
    >
      {option.label}
    </button>
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

  button {
    width: 5rem;
    padding: 10px 15px;
    border: 1px solid var(--primary-color);
    border-radius: 5px;
    background-color: transparent;
    color: var(--primary-color);
    font-size: 14px;
    cursor: pointer;
  }

  button.active {
    background-color: var(--primary);
    color: var(--primary-contrast);
    border-color: var(--primary);
    font-weight: 700;
  }

  button:hover {
    background-color: var(--primary);
    color: var(--primary-contrast);
    border-color: var(--primary);
  }
</style>