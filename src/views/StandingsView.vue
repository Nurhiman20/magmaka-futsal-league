<script lang="ts" setup>
	import { ref } from 'vue';

	const rankings = ref([
		{
			club: 'REMAKO FC',
			matches_played: 1,
			won: 1,
			drawn: 0,
			lose: 0,
			goals_for: 6,
			goals_againts: 1,
		},
		{
			club: 'CAMO FC',
			matches_played: 1,
			won: 1,
			drawn: 0,
			lose: 0,
			goals_for: 3,
			goals_againts: 1,
		},
		{
			club: 'WARNING FC',
			matches_played: 1,
			won: 0,
			drawn: 1,
			lose: 0,
			goals_for: 0,
			goals_againts: 0,
		},
		{
			club: 'SEVENTYFOUR FC',
			matches_played: 1,
			won: 0,
			drawn: 1,
			lose: 0,
			goals_for: 0,
			goals_againts: 0,
		},
		{
			club: 'MAGMA FC',
			matches_played: 1,
			won: 0,
			drawn: 0,
			lose: 1,
			goals_for: 1,
			goals_againts: 3,
		},
		{
			club: 'MXC FC',
			matches_played: 1,
			won: 0,
			drawn: 0,
			lose: 1,
			goals_for: 1,
			goals_againts: 6,
		},
	]);

	const calculatePoints = (rank: any) => {
		let points = rank.won * 3 + rank.drawn * 1;
		return points;
	};
</script>

<template>
	<div>
		<h1 style="margin-bottom: 15px">Standings</h1>
		<div class="table-style">
			<table>
				<thead>
					<tr>
						<th style="text-align: left; width: 150px">Club</th>
						<th>MP</th>
						<th>W</th>
						<th>D</th>
						<th>L</th>
						<th class="fw-900">Pts</th>
						<th>GF</th>
						<th>GA</th>
						<th>GD</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(rank, indexRank) in rankings" :key="indexRank">
						<td style="text-align: left; width: 150px">
							{{ indexRank + 1 }} {{ rank.club }}
						</td>
						<td>{{ rank.matches_played }}</td>
						<td>{{ rank.won }}</td>
						<td>{{ rank.drawn }}</td>
						<td>{{ rank.lose }}</td>
						<td class="fw-900">{{ calculatePoints(rank) }}</td>
						<td>{{ rank.goals_for }}</td>
						<td>{{ rank.goals_againts }}</td>
						<td>{{ rank.goals_for - rank.goals_againts }}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	table {
		th {
			min-width: 40px;
			padding: 10px 0;
			text-align: center;
			border-bottom: 1px solid #3c4043;
		}
		tr {
			border: 1px solid #3c4043;
		}
		td {
			padding: 10px 0;
			text-align: center;
			border-bottom: 1px solid #3c4043;
		}
	}

	.table-style {
		overflow-x: auto;
	}
	.table-style tr th:first-child {
		position: sticky;
		left: 0;
		z-index: 2;
    background-color: #181818;
	}
	.table-style tr td:first-child {
		position: sticky;
		left: 0;
		z-index: 2;
    background-color: #181818;
	}
</style>
