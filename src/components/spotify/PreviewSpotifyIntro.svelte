<script lang="ts">
  import Tile from './Tile.svelte';

  let tracksPromise = fetch('/get-tracks?timeRange=short_term').then((res) => res.json());
</script>

{#await tracksPromise then tracks}
  <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
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
