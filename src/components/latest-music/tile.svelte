<script lang="ts">
  import type { SpotifyImage } from '../../libs/spotify';

  export let title = '';
  export let description = '';
  export let img: SpotifyImage[] = [];
  export let externalUrl = '';
</script>

<a class="max-w-40" href={externalUrl}>
  <img
    class="rounded-sm"
    src={img[1]?.url || img[0].url}
    alt={title}
    height={160}
    width={160}
  />
  <div>
    <p class="font-bold">{title}</p>
    {#if description}
      <p>{description}</p>
    {/if}
  </div>
</a>
