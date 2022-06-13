<script lang="ts">
  import Button from "./Button.svelte";
  import i0 from "../assets/kim_trump.png";
  import i1 from "../assets/1.png";
  import i2 from "../assets/2.png";
  import i3 from "../assets/3.png";
  import i4 from "../assets/4.png";
  import { slide } from "svelte/transition";

  let img_arr = [/*i0,*/ i1, i2, i3, i4];
  let img: string = i1,
    i = 0;
  setInterval(() => {
    img = img_arr[i];
    i = i++ > img_arr.length ? 0 : i;
  }, 3e3);
</script>

<header>
  <div class="left">
    <h2>Get connected with people matching your interest</h2>
    <h3>Find new friends and partners here !</h3>
    <h3>
      Enjoy uninterrupted peer-peer video/audio calls and chats with maximum
      privacy
    </h3>
    <Button special />
  </div>
  <div class="right">
    {#key img}
      <img src={img} alt="" in:slide out:slide />
    {/key}
  </div>
  <div class="bottom">
    <h4>
      We are arrving to make social connectivity more interesting and fun !
    </h4>
  </div>
</header>

<style>
  header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "left right" "bottom bottom";
    gap: 1em;
    place-items: center;    
    font-family: sans-serif;
  }

  .left {
    grid-area: left;
  }

  .right {
    grid-area: right;
  }

  .bottom {
    grid-area: bottom;
  }

  .left {
    padding: 2em;
    display: grid;
    gap: 1em;
  }

  .right img {
    max-width: 100%;
    object-fit: contain;
    mix-blend-mode: multiply;
    padding: 1em;
  }
</style>
