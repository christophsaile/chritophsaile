<script lang="ts">
  import Tile from './Tile.svelte';

  let tracksPromise = fetch('/get-tracks?timeRange=short_term').then((res) => res.json());
</script>

{#await tracksPromise then tracks}
  <div class="grid grid-cols-2 gap-5 sm:flex sm:flex-wrap sm:justify-between sm:gap-8">
    {#each tracks.items as track (track.id)}
      <div class="tile">
        <Tile
          title={track.name}
          description={track.artists.map((artist) => artist.name).join(', ')}
          img={track.album.images}
          externalUrl={track.external_urls.spotify}
        />
      </div>
    {/each}
  </div>
{/await}

<style>
  .tile:last-child,
  .tile:nth-last-child(2) {
    display: none;
  }

  @media (min-width: 896px) {
    .tile:last-child,
    .tile:nth-last-child(2) {
      display: block;
    }
  }
</style>
