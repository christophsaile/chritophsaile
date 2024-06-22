<script lang="ts">
  export let href = '';
</script>

<a
  class="relative leading-none group ml-auto items-center gap-0.5 inline-flex"
  {href}
>
  <slot></slot>
  <svg
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke="currentColor"
    class="h-[1em] w-[1em]"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
    ></path>
  </svg>
</a>

<style>
  a {
    color: rgba(0, 0, 0, 0.6);
  }
  a:hover {
    transition: 0.3s ease-out;
    @apply text-black;
  }
  a::before {
    content: '';
    position: absolute;
    bottom: -0.3em;
    left: 0;
    width: 100%;
    height: 2px;
    background-repeat: no-repeat;
    background-image: linear-gradient(
      to right,
      rgb(0, 0, 0, 1) 45%,
      rgba(0, 0, 0, 0.4) 55%
    );
    background-size: 220% 100%;
    background-position: 100% 50%;
    transition: 0.3s ease-out;
  }

  a:hover::before {
    background-position: 0% 50%;
  }
</style>
