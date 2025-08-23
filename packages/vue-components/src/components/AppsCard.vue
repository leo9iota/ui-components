<template>
  <div class="global-container">
    <div class="app-card-container">
      <div class="app-card">
        <h1 class="font-inter-main">Apps</h1>
        <div class="separator"></div>

        <!-- App Container Start -->
        <div class="app-flex font-inter-secondary">
          <div
            v-for="app in apps"
            :key="app.name"
            class="app-icon"
            @click="handleAppClick(app.name)"
          >
            <img :src="app.icon" :alt="app.name" />
            <h2>{{ app.name }}</h2>
          </div>
        </div>
        <!-- App Container End -->

        <div class="separator"></div>

        <div class="button-container">
          <button class="main-button" @click="handleAddApp">
            <span class="font-inter-main">Add App</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface App {
    name: string;
    icon: string;
  }

  interface Props {
    onAppClick?: (appName: string) => void;
    onAddApp?: () => void;
  }

  const props = withDefaults(defineProps<Props>(), {
    onAppClick: undefined,
    onAddApp: undefined,
  });

  // Apps data - using the same apps from the original
  const apps: App[] = [
    {
      name: 'Slack',
      icon: '/images/slack.svg',
    },
    {
      name: 'Trello',
      icon: '/images/trello.svg',
    },
    {
      name: 'Miro',
      icon: '/images/miro.svg',
    },
    {
      name: 'Jira',
      icon: '/images/jira.svg',
    },
    {
      name: 'GitHub',
      icon: '/images/github.svg',
    },
    {
      name: 'Obsidian',
      icon: '/images/obsidian.svg',
    },
  ];

  const handleAppClick = (appName: string) => {
    props.onAppClick?.(appName);
  };

  const handleAddApp = () => {
    props.onAddApp?.();
  };
</script>

<style scoped>
  /* -------------------- */
  /* Fonts                */
  /* -------------------- */
  .font-inter-main {
    font-family: 'Inter', sans-serif;
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: normal;
  }

  .font-inter-secondary {
    font-family: 'Inter', sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
  }

  /* -------------------- */
  /* App Card             */
  /* -------------------- */
  .app-card {
    position: absolute;
    width: 400px;
    height: 480px;
    background-color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
  }

  /* -------------------- */
  /* Font Sizes           */
  /* -------------------- */
  .app-card h1.font-inter-main {
    color: var(--font-color-1);
    font-size: 1.75em;
  }

  .app-card .app-icon h2 {
    color: var(--font-color-2);
    font-size: 0.9em;
  }

  /* -------------------- */
  /* Separator            */
  /* -------------------- */
  .separator {
    background-color: var(--separator-color);
    height: 3px;
    width: 100%;
    border-radius: 1px;
    margin: 15px 0;
  }

  /* -------------------- */
  /* Main Button          */
  /* -------------------- */
  .main-button {
    position: relative;
    overflow: hidden;
    background-color: var(--button-color-1);
    color: var(--font-color-3);
    width: 100%;
    border-radius: 5px;
    padding: 15px 20px;
    font-size: 16px;
    text-align: center;
    transition: background-color 0.3s ease;
  }

  .main-button:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  /* -------------------- */
  /* Apps Grid            */
  /* -------------------- */
  .app-flex {
    position: relative;
    flex-grow: 1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 20px;
    overflow: hidden;
  }

  .app-icon {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 1;
    padding: 10px;
    cursor: pointer;
  }

  .app-icon::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    box-shadow: 0 0 25px var(--shadow-color);
    background-color: white;
    transform: translate(-50%, -50%);
    z-index: -1;
    border-radius: 10px;
    transition:
      width 0.3s ease,
      height 0.3s ease;
  }

  .app-icon:hover::before {
    width: calc(100% - 20px);
    height: calc(100% - 20px);
  }

  .app-icon img {
    width: 60px;
    margin-bottom: 20px;
    transition: transform 0.3s ease;
  }

  .app-icon h2 {
    margin: 0;
    font-size: 0.8em;
  }
</style>
