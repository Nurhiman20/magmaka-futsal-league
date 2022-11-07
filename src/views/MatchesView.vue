<script lang="ts" setup>
	import { ref } from 'vue';

	const matchdays = ref([
		{
			matchday: 1,
			matches: [
				{
					team_a: 'WARNING FC',
					team_b: 'SEVENTYFOUR FC',
					score_a: 0,
					score_b: 0,
				},
				{
					team_a: 'MAGMA FC',
					team_b: 'CAMO FC',
					score_a: 1,
					score_b: 3,
				},
				{
					team_a: 'MXC FC',
					team_b: 'REMAKO FC',
					score_a: 1,
					score_b: 6,
				},
			],
		},
		{
			matchday: 2,
			matches: [
				{
					team_a: 'CAMO FC',
					team_b: 'REMAKO FC',
					score_a: 0,
					score_b: 1,
				},
				{
					team_a: 'SEVENTYFOUR FC',
					team_b: 'MXC FC',
					score_a: 0,
					score_b: 6,
				},
				{
					team_a: 'WARNING FC',
					team_b: 'MAGMA FC',
					score_a: 4,
					score_b: 1,
				},
			],
		},
		{
			matchday: 3,
			matches: [
				{
					team_a: 'MXC FC',
					team_b: 'WARNING FC',
					score_a: 2,
					score_b: 0,
				},
				{
					team_a: 'REMAKO FC',
					team_b: 'MAGMA FC',
					score_a: 5,
					score_b: 1,
				},
				{
					team_a: 'SEVENTYFOUR FC',
					team_b: 'CAMO FC',
					score_a: 7,
					score_b: 2,
				},
			],
		},
		{
			matchday: 4,
			matches: [
				{
					team_a: 'MAGMA FC',
					team_b: 'MXC FC',
					score_a: 3,
					score_b: 3,
				},
				{
					team_a: 'CAMO FC',
					team_b: 'WARNING FC',
					score_a: 1,
					score_b: 2,
				},
				{
					team_a: 'REMAKO FC',
					team_b: 'SEVENTYFOUR FC',
					score_a: 3,
					score_b: 3,
				},
			],
		},
		{
			matchday: 5,
			matches: [
				{
					team_a: 'WARNING FC',
					team_b: 'REMAKO FC',
					score_a: 2,
					score_b: 2,
				},
				{
					team_a: 'SEVENTYFOUR FC',
					team_b: 'MAGMA FC',
					score_a: 2,
					score_b: 3,
				},
				{
					team_a: 'CAMO FC',
					team_b: 'MXC FC',
					score_a: 1,
					score_b: 4,
				},
			],
		},
		{
			matchday: 6,
			matches: [
				{
					team_a: 'MXC FC',
					team_b: 'CAMO FC',
					score_a: 0,
					score_b: 0,
				},
				{
					team_a: 'MAGMA FC',
					team_b: 'SEVENTYFOUR FC',
					score_a: 0,
					score_b: 0,
				},
				{
					team_a: 'REMAKO FC',
					team_b: 'WARNING FC',
					score_a: 0,
					score_b: 0,
				},
			],
		},
	]);
</script>

<template>
	<div style="margin: 15px 0">
		<h1 style="margin-bottom: 10px">Matches</h1>
		<div v-for="(matchday, indexMatchday) in matchdays" :key="indexMatchday">
			<div class="title-matchday">
				<p>Matchday {{ matchday.matchday }} of 10</p>
			</div>
			<div class="grid-container">
				<div
					class="matchday"
					v-for="(match, indexMatch) in matchday.matches"
					:key="indexMatch"
				>
					<div class="team-matchday">
						<p class="team">{{ match.team_a }}</p>
						<p class="team">{{ match.team_b }}</p>
					</div>
					<div class="result-matchday">
						<div class="score-matchday" v-if="match.score_a != null">
							<p class="score">{{ match.score_a }}</p>
							<p class="score">{{ match.score_b }}</p>
						</div>
						<div class="time-matchday">
							<p class="time" v-if="indexMatch == 0">1st<br />match</p>
							<p class="time" v-else-if="indexMatch == 1">2nd<br />match</p>
							<p class="time" v-else-if="indexMatch == 2">3rd<br />match</p>
							<p class="time" v-else>4th<br />match</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.title-matchday {
		padding: 10px;
		border: 1px solid #3c4043;
		background-color: #303134;
    p {
      color: white;
    }
@media (prefers-color-scheme: dark) {
    p {
      color: rgba(235, 235, 235, 0.64);
    }
}
	}

	.matchday {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 15px;
		.team-matchday {
			display: flex;
			flex-direction: column;
			align-items: start;
			justify-content: start;
			.team {
				font-size: 16px;
				font-weight: 600;
			}
		}
		.result-matchday {
			display: flex;
			flex-direction: row;
			align-items: start;
			justify-content: start;
			.score-matchday {
				display: flex;
				flex-direction: column;
				align-items: start;
				justify-content: start;
				padding: 0 15px;
				.score {
					font-size: 16px;
				}
			}
			.time-matchday {
				border-left: 1px solid #3c4043;
				padding: 0 15px;
				.time {
					font-size: 16px;
				}
			}
		}
	}
</style>
