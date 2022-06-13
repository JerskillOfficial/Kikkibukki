<script lang="ts">
    import { LottiePlayer } from "@lottiefiles/svelte-lottie-player";

    export let secondary: boolean = false;
    export let special: boolean = false;

    let lottie: any;

    function play() {
        special && lottie.play();
    }
</script>

<div class="button">
    <button class:secondary on:click={play}>
        Click me
        <LottiePlayer
            src="https://assets2.lottiefiles.com/datafiles/nZgj7wTd56UtH6m/data.json"
            bind:this={lottie}
            height={100}
            width={100}
            style = "margin:-25px"
        />
    </button>
</div>

<style>
    button {
        outline: none;
        pointer-events: all;
        border: none;
        cursor: pointer;
        padding: 0.5em 1em;
        background-color: aqua;
        border-radius: 1em;
        display: flex;
        align-items: center;
    }

    .secondary {
        outline: 2px solid;
    }
</style>
