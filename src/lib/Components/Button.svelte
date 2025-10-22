<script lang="ts">
    let { theme, active=false, label, clickHandler } = $props();

</script>

<button class={theme}
    class:active={active}
    onclick={clickHandler}
>
    {label}
</button>

<style>
    button {
        padding: 10px 15px;
        border-style: solid;
        border-width: 2px;
        border-radius: var(--border-radius);
        background-color: transparent;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;

        :global(&.primary) {
            border-color: var(--primary-color);
            color: var(--primary-color);
        }

        :global(&.contrast) {
            border-color: var(--secondary-color);
            color: var(--secondary-color);
        }
    }

    button:hover, button.active {
        :global(&.primary) {
            background-color: var(--primary);
            color: var(--primary-contrast);
            border-color: var(--primary);
        }

         :global(&.contrast) {
            background-color: var(--primary-contrast);
            color: var(--primary);
            border-color: var(--primary-contrast);
        }
    }

</style>