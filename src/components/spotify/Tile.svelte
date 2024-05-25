<script lang="ts">
  import type { SpotifyImage } from '../../libs/spotify';

  export let title = '';
  export let description = '';
  export let img: SpotifyImage[] = [];
  export let externalUrl = '';
</script>

<a class="grid-item max-w-40" href={externalUrl}>
  <img src={img[1]?.url || img[0].url} alt={title} height={160} width={160} />
  <div>
    <p class="font-bold">{title}</p>
    {#if description}
      <p>{description}</p>
    {/if}
  </div>
</a>

<style>
  @media (min-width: 640px) {
    .grid-item:nth-child(3n + 1) {
      justify-self: start; /* Aligns the first item of each row to the left */
    }

    .grid-item:nth-child(3n + 2) {
      justify-self: center; /* Aligns the second item of each row in the center */
    }

    .grid-item:nth-child(3n + 3) {
      justify-self: end; /* Aligns the third item of each row to the right */
    }
  }

  @media (min-width: 1024px) {
    .grid-item:nth-child(4n + 1) {
      justify-self: start; /* Aligns the first item of each row to the left */
    }

    .grid-item:nth-child(4n + 2) {
      justify-self: center; /* Aligns the second item of each row in the center */
    }

    .grid-item:nth-child(4n + 3) {
      justify-self: center; /* Aligns the second item of each row in the center */
    }

    .grid-item:nth-child(4n + 4) {
      justify-self: end; /* Aligns the third item of each row to the right */
    }
  }
</style>
