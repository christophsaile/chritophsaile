<script lang="ts">
  import { onMount } from 'svelte';
  import { type TimeRange } from '../../libs/spotify';

  export let title;
  let elem: HTMLElement;
  let buttons: HTMLButtonElement[];

  function handleClick(period: TimeRange, e: MouseEvent) {
    elem
      .closest('.ranked-section')
      ?.querySelectorAll('.ranked-list')
      .forEach((el) => {
        el.classList.contains(period)
          ? el.classList.remove('hidden')
          : el.classList.add('hidden');
      });

    buttons.forEach((button) => {
      button.classList.remove('btn-active');
      if (e.target === button) button.classList.add('btn-active');
    });
  }

  onMount(() => {
    buttons = Array.from(elem.querySelectorAll('.btn'));
  });
</script>

<div class="flex flex-col gap-2" bind:this={elem}>
  <h2 class="text-xl font-bold">{title}</h2>
  <ul class="flex gap-3">
    <li>
      <button
        class="btn btn-active rounded-md"
        on:click={(e) => handleClick('short_term', e)}>recent</button
      >
    </li>
    <li>
      <button class="btn" on:click={(e) => handleClick('medium_term', e)}
        >last 6 months</button
      >
    </li>
    <li>
      <button class="btn" on:click={(e) => handleClick('long_term', e)}
        >all time</button
      >
    </li>
  </ul>
</div>
