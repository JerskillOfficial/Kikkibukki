<script lang="ts">
  import "./reset.css";

  import Header from "./components/Header.svelte";
  import NavBar from "./components/NavBar.svelte";

  import tri from "./assets/triangle_bg.png";
  import abs1 from "./assets/abs1.png";
  import abs2 from "./assets/abs2-transformed.png";
  import abs3 from "./assets/abs3-transformed-cropped.png";
  import cur from "./assets/smiley-heart.png";


  import { throttle } from "./helper";

  let client = {
    x: 0,
    y: 0,
  };

  async function mouse({ clientX, clientY }: MouseEvent) {
    client = {
      x: clientX,
      y: clientY,
    };
  }
</script>

<svelte:window on:mousemove={throttle(mouse, 100)} />

<main>
  <NavBar />
  <Header />
</main>
<img class="bg" src={tri} alt="" />
<img class="abs1" src={abs3} alt="" />
<img class="abs2" src={abs2} alt="" />

<img
  class="cursor"
  src={cur}
  alt=""
  style:--x="{client.x + 5}px"
  style:--y="{client.y + 5}px"
/>

<style>
  main {
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 1em;
    position: absolute;
    inset: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    /* background-color: #cb2225; */
    color: white;
  }

  img {
    position: absolute;
    z-index: -1000;
  }

  .bg {
    inset: 0;
    width: 100vw;
    height: 100vh;
  }

  .abs1 {
    inset: 0 0 auto auto;
    width: max(15vw, 30vh);
    mix-blend-mode: multiply;
  }

  .abs2 {
    inset: auto auto 0 0;
    width: max(10vw, 25vh);
    mix-blend-mode: multiply;
  }

  .cursor {
    position: absolute;
    width: 2em;
    inset: 0 auto auto 0;
    image-rendering: optimizeSpeed;
    z-index: 10000;
    pointer-events: none;
    will-change: transform;
    transform: translate(-100%, -100%);
    transition: 0.4s ease;
  }

  :hover ~ .cursor {
    transform: translate(var(--x), var(--y));
  }
</style>
