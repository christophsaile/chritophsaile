<script lang="ts">
  import { type TimeRange } from '../../libs/spotify';

  export let title;
  let elem: HTMLElement;

  function handleClick(period: TimeRange) {
    elem
      .closest('.ranked-section')
      ?.querySelectorAll('.ranked-list')
      .forEach((el) => {
        el.classList.contains(period) ? el.classList.remove('hidden') : el.classList.add('hidden');
      });
  }
</script>

<div bind:this={elem}>
  <h2>{title}</h2>
  <ul class="flex">
    <li>
      <button on:click={() => handleClick('short_term')}>recent</button>
    </li>
    <li>
      <button on:click={() => handleClick('medium_term')}>last 6 months</button>
    </li>
    <li>
      <button on:click={() => handleClick('long_term')}>all time</button>
    </li>
  </ul>
</div>
