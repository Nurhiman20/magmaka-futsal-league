<script lang="ts" setup>
import { ref } from "vue";

const rankings = ref([
  {
    club: "WARNING FC",
    matches_played: 10,
    won: 7,
    drawn: 2,
    lose: 1,
    goals_for: 27,
    goals_againts: 12,
  },
  {
    club: "SEVENTYFOUR FC",
    matches_played: 10,
    won: 5,
    drawn: 2,
    lose: 3,
    goals_for: 26,
    goals_againts: 18,
  },
  {
    club: "MXC FC",
    matches_played: 10,
    won: 5,
    drawn: 2,
    lose: 3,
    goals_for: 24,
    goals_againts: 20,
  },
  {
    club: "REMAKO FC",
    matches_played: 10,
    won: 5,
    drawn: 2,
    lose: 3,
    goals_for: 26,
    goals_againts: 15,
  },
  {
    club: "CAMO FC",
    matches_played: 10,
    won: 2,
    drawn: 1,
    lose: 7,
    goals_for: 13,
    goals_againts: 30,
  },
  {
    club: "MAGMA FC",
    matches_played: 10,
    won: 1,
    drawn: 1,
    lose: 7,
    goals_for: 13,
    goals_againts: 31,
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
      <p>Catatan untuk matchday terakhir:</p>
      <ul>
        <li>Warning hanya butuh 1 poin (seri) untuk memastikan gelar juara.</li>
        <li>
          Jika Seventyfour menang dan Remako seri atau kalah ==> Seventyfour juara 1,
          Warning juara 2, Remako atau MXC juara 3
        </li>
        <li>
          Jika MXC menang dengan selisih gol lebih dari 5 dan Seventyfour menang atau seri
          ==> Seventyfour juara 1, Warning juara 2, MXC juara 3
        </li>
        <li>
          Jika Seventyfour kalah atau seri dan Remako menang ==> Warning juara 1, Remako
          juara 2, Seventyfour juara 3
        </li>
        <li>
          Jika Seventyfour kalah dan MXC menang ==> Warning juara 1, Seventyfour juara 2,
          MXC juara 3
        </li>
        <li>Jika Camo seri melawan Magma, Camo naik ke peringkat 5</li>
      </ul>
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
