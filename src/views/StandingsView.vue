<script lang="ts" setup>
	import { ref } from 'vue';

	const rankings = ref([
		{
			club: 'REMAKO FC',
			matches_played: 6,
			won: 3,
			drawn: 2,
			lose: 1,
			goals_for: 17,
			goals_againts: 11,
		},
		{
			club: 'MXC FC',
			matches_played: 6,
			won: 3,
			drawn: 2,
			lose: 1,
			goals_for: 17,
			goals_againts: 11,
		},
		{
			club: 'WARNING FC',
			matches_played: 6,
			won: 3,
			drawn: 2,
			lose: 1,
			goals_for: 12,
			goals_againts: 6,
		},
		{
			club: 'SEVENTYFOUR FC',
			matches_played: 6,
			won: 2,
			drawn: 2,
			lose: 2,
			goals_for: 15,
			goals_againts: 14,
		},
		{
			club: 'CAMO FC',
			matches_played: 6,
			won: 1,
			drawn: 1,
			lose: 4,
			goals_for: 8,
			goals_againts: 16,
		},
		{
			club: 'MAGMA FC',
			matches_played: 6,
			won: 1,
			drawn: 1,
			lose: 4,
			goals_for: 9,
			goals_againts: 20,
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
		<div>
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
    <div class="notes">
    <p>Notes:</p>
    <ul>
      <li>Klasemen menggunakan sistem Head to Head</li>
      <li>MP: Match Played (Pertandingan dimainkan)</li>
      <li>W: Won (Menang)</li>
      <li>D: Drawn (Seri)</li>
      <li>L: Lose (Kalah)</li>
      <li>Pts: Points (Poin)</li>
      <li>GF: Goals For (Mencetak gol)</li>
      <li>GA: Goals Againts (Kebobolan)</li>
      <li>GD: Goals Difference (Selisih gol)</li>
    </ul>
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
  .notes {
    margin-top: 15px;
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
