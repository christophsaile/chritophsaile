<script lang="ts">
  import type { SpotifyImage } from '../../libs/spotify';
  import vinyl from '../../assets/vinyl.webp';

  export let title = '';
  export let description = '';
  export let img: SpotifyImage[] = [];
  export let externalUrl = '';
</script>

<a class="group max-w-40 relative" href={externalUrl}>
  <div class="group relative w-fit">
    <img
      class="rounded-sm relative transition-all duration-300 group-hover:transform-vinyl-cover"
      src={img[1]?.url || img[0].url}
      alt=""
      height={160}
      width={160}
    />
    <img
      class="absolute left-0 top-0 transition-all duration-300 -z-10 group-hover:transform-vinyl"
      src={vinyl.src}
      alt=""
      height={160}
      width={160}
    />
  </div>
  <div class="pt-1">
    <p class="font-bold">{title}</p>
    {#if description}
      <p>{description}</p>
    {/if}
  </div>
</a>
