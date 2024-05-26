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
  .grid-item:last-child,
  .grid-item:nth-last-child(2) {
    display: none;
  }

  @media (min-width: 896px) {
    .grid-item:last-child,
    .grid-item:nth-last-child(2) {
      display: block;
    }
  }
</style>
