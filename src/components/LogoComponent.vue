<script lang="ts" setup>
  const goTo = (link: string) => {
    window.open(link, '_blank');
  }
</script>

<template>
	<div class="logo-section">
		<div class="logo" style="background-color: black">
			<img src="@/assets/img/logo_magmaka.png" alt="" />
		</div>
		<div class="logo pointer" style="background-color: white" @click="goTo('https://www.instagram.com/camowarbroke.original/?hl=en')">
			<img src="@/assets/img/camo.jpeg" alt="" />
		</div>
		<div class="logo pointer" style="background-color: white" @click="goTo('https://www.instagram.com/magmacatalogue/?hl=en')">
			<img src="@/assets/img/magma.jpeg" alt="" />
		</div>
		<div class="logo pointer" style="background-color: white" @click="goTo('https://mxcgoods.id/')">
			<img src="@/assets/img/mxc.jpeg" alt="" />
		</div>
		<div class="logo pointer" style="background-color: white" @click="goTo('https://www.seventyfourco.com/')">
			<img src="@/assets/img/seventyfour.jpeg" alt="" />
		</div>
		<div class="logo pointer" style="background-color: white" @click="goTo('https://www.warning-clothing.com/')">
			<img src="@/assets/img/wrng.jpeg" alt="" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.logo-section {
		display: flex;
		flex-direction: row;
    justify-content: center;
		flex-wrap: wrap;
		margin: 15px 0;
    width: 100%;
		.logo {
			width: 80px;
			height: 80px;
      border-radius: 15px;
      padding: 5px;
      margin-right: 5px;
      margin-bottom: 5px;
			img {
				border-radius: 15px;
				object-fit: contain;
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
