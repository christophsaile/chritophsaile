<script lang="ts">
  // const colors = [
  //   { name: 'white', bg: 'bg-white', nav: 'bg-brand-yellow' },
  //   { name: 'purple', bg: 'bg-brand-purple', nav: 'bg-brand-yellow' },
  //   { name: 'orange', bg: 'bg-brand-orange', nav: 'bg-brand-yellow' },
  //   { name: 'yellow', bg: 'bg-brand-yellow', nav: 'bg-brand-yellow' },
  //   { name: 'green', bg: 'bg-brand-green', nav: 'bg-brand-yellow' },
  // ];
  const colors = {
    white: 'bg-white',
    purple: 'bg-brand-purple',
    orange: 'bg-brand-orange',
    yellow: 'bg-brand-yellow',
    green: 'bg-brand-green',
  };

  function handleClick(bgColor: string) {
    const bodyClasses = document.body.classList;
    Object.entries(colors).forEach(([name, cssClass]) => {
      bodyClasses.remove(cssClass);
    });
    bodyClasses.add(bgColor);
  }
</script>

<div
  class="absolute left-0 right-0 w-full pt-2 px-7 md:px-20 lg:w-[1024px] lg:mx-auto flex justify-end"
>
  <div class="flex gap-2 justify-center">
    <p class="text-sm">Switch Theme</p>
    {#each Object.entries(colors) as [name, cssClass]}
      <button
        on:click={() => handleClick(cssClass)}
        aria-label={name}
        class="w-6 h-6 rounded-full shadow-sm {cssClass}"
      ></button>
    {/each}
  </div>
</div>
