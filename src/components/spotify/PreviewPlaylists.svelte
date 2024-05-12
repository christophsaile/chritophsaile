<script lang="ts">
  import Tile from './Tile.svelte';

  let playlistsPromise = fetch('/get-playlists').then((res) => res.json());
</script>

{#await playlistsPromise then playlists}
  <div>
    {#each playlists.items as playlist (playlist.id)}
      <Tile
        title={playlist.name}
        img={playlist.images}
        externalUrl={playlist.external_urls.spotify}
      />
    {/each}
  </div>
{/await}
