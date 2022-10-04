<script lang="ts" setup>
  import { ref } from "vue";

  const topScorers = ref([
    {
      rank: 1,
      player: 'Crypton',
      club: 'MXC FC',
      goal: 4
    },
    {
      rank: 2,
      player: 'Bojes',
      club: 'REMAKO FC',
      goal: 2
    },
    {
      rank: 2,
      player: 'Andika',
      club: 'MXC FC',
      goal: 2
    },
    {
      rank: 2,
      player: 'Azizi',
      club: 'WARNING FC',
      goal: 2
    },
    {
      rank: 2,
      player: 'Adi Kidal',
      club: 'MXC FC',
      goal: 2
    },
    {
      rank: 6,
      player: 'Reza',
      club: 'CAMO FC',
      goal: 1
    },
    {
      rank: 6,
      player: 'Rendi',
      club: 'CAMO FC',
      goal: 1
    },
    {
      rank: 6,
      player: 'Wadoz',
      club: 'CAMO FC',
      goal: 1
    },
    {
      rank: 6,
      player: 'Da Jong',
      club: 'REMAKO FC',
      goal: 1
    },
    {
      rank: 6,
      player: 'Ato',
      club: 'REMAKO FC',
      goal: 1
    },
    {
      rank: 6,
      player: 'Deni',
      club: 'REMAKO FC',
      goal: 1
    },
    {
      rank: 6,
      player: 'Chandra',
      club: 'MAGMA FC',
      goal: 1
    },
    {
      rank: 6,
      player: 'Sandi',
      club: 'WARNING FC',
      goal: 1
    },
    {
      rank: 6,
      player: 'Geri',
      club: 'MAGMA FC',
      goal: 1
    },
    {
      rank: 6,
      player: 'Imet',
      club: 'WARNING FC',
      goal: 1
    },
  ]);
</script>

<template>
	<div>
		<h1 style="margin-bottom: 15px">Goals</h1>
		<div>
			<div class="title-top-scorer">
				<p class="title">Player</p>
				<p class="title">Goals</p>
			</div>
			<div class="top-scorer-list" v-for="(scorer, indexScorer) in topScorers" :key="indexScorer">
				<p>{{ scorer.rank }}</p>
				<div class="top-scorer">
					<p class="player">{{ scorer.player }}</p>
					<p class="team">{{ scorer.club }}</p>
				</div>
				<p class="goals">{{ scorer.goal }}</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.title-top-scorer {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
    padding: 10px 0;
		.title {
			color: #9aa0a6;
			font-weight: 500;
		}
	}
	.top-scorer-list {
		display: flex;
		flex-direction: row;
		justify-content: start;
		align-items: center;
    padding: 10px 0;
    border-top: 1px solid #3c4043;
		.top-scorer {
			display: flex;
			flex-direction: column;
			justify-content: start;
      margin-left: 10px;
			.player {
				font-weight: 500;
			}
      .team {
        font-size: 12px;
      }
		}
    .goals {
      margin-left: auto;
    }
	}
</style>
