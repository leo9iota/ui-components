<script lang="ts">
  // Props using Svelte 5 runes
  interface Props {
    userName?: string;
    userRole?: string;
    userImage?: string;
    logoSrc?: string;
    onMenuClick?: (item: string) => void;
    onButtonClick?: () => void;
  }

  let {
    userName = 'John Doe',
    userRole = 'Staff Engineer',
    userImage = 'https://randomuser.me/api/portraits/men/32.jpg',
    logoSrc = '/logo.svg',
    onMenuClick,
    onButtonClick,
  }: Props = $props();

  // Menu items data
  const menuItems = [
    {
      name: 'Dashboard',
      icon: 'M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z M21.21 15.89A10 10 0 1 1 8 2.83',
    },
    {
      name: 'Confluence',
      icon: 'M15 12 15 18 M12 15 18 15 M8 8 22 8 22 22 8 22 Z M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2',
    },
    {
      name: 'Jira',
      icon: 'M4.9 19.1C1 15.2 1 8.8 4.9 4.9 M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5 M12 12 m-2 0a2 2 0 1 1 4 0a2 2 0 1 1-4 0 M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5 M19.1 4.9C23 8.8 23 15.1 19.1 19',
    },
    {
      name: 'Teams',
      icon: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z',
    },
    {
      name: 'Favorites',
      icon: 'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z',
    },
  ];

  // Event handlers
  const handleMenuItemClick = (itemName: string) => {
    onMenuClick?.(itemName);
  };

  const handleDoSomethingClick = () => {
    onButtonClick?.();
  };
</script>

<!-- Background Circles -->
<div class="fixed inset-0 overflow-hidden h-screen w-screen">
  <!-- Top Right Circle -->
  <div
    class="absolute w-screen h-screen max-w-[700px] max-h-[700px] bg-white rounded-full"
    style="
      top: 0;
      right: 0;
      transform: translate(40%, -40%);
      box-shadow: 0 0 50px 100px white;
    "
  ></div>
  <!-- Bottom Left Circle -->
  <div
    class="absolute w-screen h-screen max-w-[700px] max-h-[700px] bg-white rounded-full"
    style="
      bottom: 0;
      left: 0;
      transform: translate(-40%, 40%);
      box-shadow: 0 0 50px 100px white;
    "
  ></div>
</div>

<!-- Navbar -->
<div
  class="fixed top-0 w-full z-10"
  style="
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  "
>
  <nav class="flex items-center p-4 px-5">
    <!-- Logo placeholder - you can replace with actual logo -->
    <div class="text-[#0075d9] font-bold text-xl">SONIO</div>
  </nav>
</div>

<div
  class="relative min-h-screen bg-[#f0f4ff] overflow-y-auto overflow-x-hidden"
>
  <!-- Main Container -->
  <div
    class="absolute top-1/2 left-1/2 w-[350px] bg-white rounded-[15px] p-5 overflow-hidden"
    style="
      transform: translate(-50%, -50%);
      box-shadow: 0 0 50px 15px #e1e9ff;
    "
  >
    <!-- Profile Section -->
    <div class="mt-5 ml-2 flex relative">
      <!-- Profile Background -->
      <div
        class="absolute w-[500px] h-[500px] rounded-[80px] z-[-1]"
        style="
          background: linear-gradient(#0075d9, #284caf);
          top: -150px;
          left: 180px;
          transform: translate(-50%, -50%) rotate(80deg);
        "
      ></div>

      <!-- Profile Image -->
      <div class="flex-shrink-0">
        <img
          src={userImage}
          alt="User Profile"
          class="rounded-full w-[90px] h-[90px] object-cover border-[5px] border-[#4d71d5]"
        />
      </div>

      <!-- Profile Info -->
      <div class="flex flex-col justify-center items-start ml-4">
        <h1 class="m-0 text-2xl text-[#f4feff] font-nokora">{userName}</h1>
        <p class="mt-1 mb-0 text-base text-[#c5dbff] font-nokora">{userRole}</p>
      </div>
    </div>

    <!-- Button Section -->
    <div class="mt-20 flex justify-center items-center">
      <button
        class="flex items-center bg-[#0075d9] text-white border-none px-5 py-2.5 rounded-[5px] cursor-pointer transition-all duration-300 hover:brightness-90 font-nokora"
        onclick={handleDoSomethingClick}
      >
        <svg
          class="mr-2.5 w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M5 12h14" />
          <path d="M12 5v14" />
        </svg>
        <span class="text-base">Do Something</span>
      </button>
    </div>

    <!-- Menu Section -->
    <div class="mt-8">
      {#each menuItems as item}
        <button
          type="button"
          class="w-full text-left flex relative items-center justify-start py-4 pl-2 my-2 transition-all duration-300 cursor-pointer hover:pl-4 hover:text-[#0075d9] group bg-transparent border-none"
          onclick={() => handleMenuItemClick(item.name)}
        >
          <!-- Left border indicator -->
          <div
            class="absolute content-[''] top-0 left-[-20px] w-0 h-full bg-[#0075d9] transition-all duration-100 group-hover:w-[5px]"
          ></div>

          <!-- Menu Icon -->
          <svg
            class="w-6 h-6 text-[#b7b7b7] mr-6 transition-colors duration-300 group-hover:text-[#0075d9]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d={item.icon} />
          </svg>

          <!-- Menu Text -->
          <span class="text-base font-nokora">{item.name}</span>
        </button>
      {/each}
    </div>
  </div>

  <!-- Footer spacer for scrolling -->
  <div class="h-[2000px] p-5 mt-5 mb-5"></div>
</div>

<style>
  :global(.font-nokora) {
    font-family: 'Nokora', sans-serif;
  }
</style>
