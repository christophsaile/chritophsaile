<script lang="ts">
  import Tile from './Tile.svelte';

  let tracksPromise = fetch('/get-tracks?timeRange=short_term').then((res) => res.json());
</script>

{#await tracksPromise then tracks}
  <div class="grid grid-cols-2 gap-5 md:flex md:flex-wrap md:place-content-between">
    {#each tracks.items as track (track.id)}
      <Tile
        title={track.name}
        description={track.artists.map((artist) => artist.name).join(', ')}
        img={track.album.images}
        externalUrl={track.external_urls.spotify}
      />
    {/each}
  </div>
{/await}
