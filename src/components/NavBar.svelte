<script lang="ts">
  import logo from "../assets/typeface-v2.png";
</script>

<nav>
  <div class="logo">
    <img src={logo} alt="" />
  </div>
  <ul>
    <li>
      <a href="#1">Home</a>
    </li>
    <li>
      <a href="#2">Features</a>
    </li>
    <!-- <li>
      <a href="#3">Pricing</a>
    </li> -->
  </ul>
  <div class="login">
    <a href="#4">Login</a>
  </div>
</nav>

<style>
  nav {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 1em;
    font-size: 1em;
    font-weight: 800;
    font-family: sans-serif;
  }

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    gap: 2em;
    align-items: center;
    justify-content: center;
  }

  .logo {
    font-family: babel;
    font-size: 1.25em;
    /* text-shadow: 0 0 2px rgb(0, 0, 0); */
    color: black;
  }

  .logo img {
    max-height: 10vh;
  }

  a {
    text-decoration: none;
    color: black;
    /* text-shadow: 0 0 2px rgba(0, 0, 0, 0.5); */
    display: inline-block;
    position: relative;
  }

  a:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 0.25em;
    border-radius: 0 0.5em 0.5em 0;
    inset: auto auto -2px 0;
    background-image: linear-gradient(90deg, transparent 0%, black 50%);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  a:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
</style>
