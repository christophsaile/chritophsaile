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
      class="rounded-sm"
      src={img[1]?.url || img[0].url}
      alt={title}
      height={160}
      width={160}
    />
    <img
      class="absolute left-0 top-0 opacity-0 group-hover:opacity-100 transition-all group-hover:left-[24%] -z-10"
      src={vinyl.src}
      alt=""
      height={160}
      width={160}
    />
  </div>
  <div>
    <p class="font-bold">{title}</p>
    {#if description}
      <p>{description}</p>
    {/if}
  </div>
</a>
