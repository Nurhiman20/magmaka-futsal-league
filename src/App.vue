<script setup lang="ts">
	import { RouterLink, RouterView } from 'vue-router';
	import TitleComponent from './components/TitleComponent.vue';
	import LogoComponent from './components/LogoComponent.vue';
</script>

<template>
	<header>
    <div class="title-section">
      <img
        alt="Cup logo"
        class="logo"
        src="@/assets/img/logo.png"
        width="180"
        height="180"
      />

      <div class="wrapper">
        <TitleComponent msg="Adrilsyah Adnan 48 Cup 2022" />

        <nav>
          <RouterLink to="/">Matches</RouterLink>
          <RouterLink to="/standings">Standings</RouterLink>
          <RouterLink to="/stats">Stats</RouterLink>
        </nav>
      </div>
    </div>

    <LogoComponent />
	</header>

	<RouterView />

	<footer style="margin: 15px 0">
		<p>
			Made with spirit by
			<a href="https://nurhiman20.github.io/" target="_blank">nurhiman_a</a>
		</p>
	</footer>
</template>

<style lang="scss" scoped>
	header {
		line-height: 1.5;
		max-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
    .title-section {
      display: flex;
      flex-direction: column;
    }
	}

	.logo {
		display: block;
		margin: 0 auto 2rem;
	}

	nav {
		width: 100%;
		font-size: 12px;
		text-align: center;
		margin-top: 2rem;
	}

	nav a.router-link-exact-active {
		color: var(--color-text);
	}

	nav a.router-link-exact-active:hover {
		background-color: transparent;
	}

	nav a {
		display: inline-block;
		padding: 0 1rem;
		border-left: 1px solid var(--color-border);
	}

	nav a:first-of-type {
		border: 0;
	}

	@media (min-width: 1024px) {
		header {
			display: flex;
			place-items: center;
      flex-direction: column;
			padding-right: calc(var(--section-gap) / 2);
    .title-section {
      display: flex;
      flex-direction: row;
    }
		}

		.logo {
			margin: 0 2rem 0 0;
		}

		header .wrapper {
			display: flex;
			place-items: flex-start;
			flex-wrap: wrap;
		}

		nav {
			text-align: left;
			margin-left: -1rem;
			font-size: 1rem;

			padding: 1rem 0;
			margin-top: 1rem;
		}
	}
</style>
