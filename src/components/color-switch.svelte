<script lang="ts">
  const bodyClasses = document.body.classList;
  const navClasses = document.querySelector('header')?.classList;

  const themes: { [key: string]: { name: string; bg: string; nav: string } } = {
    white: { name: 'white', bg: 'bg-white', nav: 'bg-brand-yellow-light' },
    purple: {
      name: 'purple',
      bg: 'bg-brand-purple',
      nav: 'bg-brand-yellow-light',
    },
    orange: {
      name: 'orange',
      bg: 'bg-brand-orange',
      nav: 'bg-brand-yellow-light',
    },
    yellow: { name: 'yellow', bg: 'bg-brand-yellow', nav: 'bg-brand-purple' },
    green: {
      name: 'green',
      bg: 'bg-brand-green',
      nav: 'bg-brand-yellow-light',
    },
  };

  const initialThemes = ['purple', 'orange', 'yellow', 'green'];
  let currentTheme: string[] = localStorage.getItem('theme')
    ? JSON.parse(localStorage.getItem('theme') || '')?.selection
    : initialThemes;

  function toggleTheme(theme: string, index: number) {
    currentTheme = currentTheme.map((theme, i) => {
      if (theme === 'white') return initialThemes[i];
      if (i === index) {
        return 'white';
      }
      return theme;
    });

    const storage = {
      selection: currentTheme,
      active: themes[theme],
    };

    localStorage.setItem('theme', JSON.stringify(storage));

    bodyClasses.remove(...Object.values(themes).map((theme) => theme.bg));
    bodyClasses.add(themes[theme].bg);
    navClasses?.remove(...Object.values(themes).map((theme) => theme.nav));
    navClasses?.add(themes[theme].nav);
  }
</script>

<div
  class="absolute left-0 right-0 w-full pt-4 px-7 md:px-20 lg:w-[1024px] lg:mx-auto flex justify-end"
>
  <div class="flex flex-col gap-2">
    <p class="text-sm text-right">switch theme</p>
    <ul class="flex gap-2 list-none text-[0]">
      {#each currentTheme as theme, index}
        <li>
          <button
            on:click={() => toggleTheme(themes[theme].name, index)}
            class="w-6 h-6 rounded-full shadow-sm {themes[theme]
              .bg} hover:scale-110"
          >
            <span class="sr-only">{themes[theme].name}</span>
          </button>
        </li>
      {/each}
    </ul>
  </div>
</div>
