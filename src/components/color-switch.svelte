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
  <div class="flex gap-2">
    <svg
      aria-label="Theme Switch"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="size-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z"
      />
    </svg>

    <ul class="flex gap-2 list-none text-[0]">
      {#each currentTheme as theme, index}
        <li>
          <button
            on:click={() => toggleTheme(themes[theme].name, index)}
            class="w-6 h-6 rounded-full shadow-sm {themes[theme]
              .bg} hover:scale-110 transition-transform"
          >
            <span class="sr-only">{themes[theme].name}</span>
          </button>
        </li>
      {/each}
    </ul>
  </div>
</div>
