<script lang="ts" setup>
import { ref } from "vue";

const topScorers = ref([
  {
    rank: 1,
    player: "Crypton",
    club: "MXC FC",
    goal: 11,
  },
  {
    rank: 2,
    player: "Imet",
    club: "WARNING FC",
    goal: 6,
  },
  {
    rank: 2,
    player: "Wadoz",
    club: "CAMO FC",
    goal: 6,
  },
  {
    rank: 2,
    player: "Aji",
    club: "SEVENTYFOUR FC",
    goal: 6,
  },
  {
    rank: 5,
    player: "Arief Badag",
    club: "MAGMA FC",
    goal: 5,
  },
  {
    rank: 5,
    player: "Andray",
    club: "WARNING FC",
    goal: 5,
  },
  {
    rank: 5,
    player: "Ihsan",
    club: "SEVENTYFOUR FC",
    goal: 5,
  },
  {
    rank: 5,
    player: "Roni",
    club: "SEVENTYFOUR FC",
    goal: 5,
  },
  {
    rank: 5,
    player: "Adi Kidal",
    club: "MXC FC",
    goal: 5,
  },
  {
    rank: 10,
    player: "Da Jong",
    club: "REMAKO FC",
    goal: 4,
  },
  {
    rank: 10,
    player: "Azizi",
    club: "WARNING FC",
    goal: 4,
  },
  {
    rank: 12,
    player: "Bojes",
    club: "REMAKO FC",
    goal: 3,
  },
  {
    rank: 12,
    player: "Irwan",
    club: "SEVENTYFOUR FC",
    goal: 3,
  },
  {
    rank: 12,
    player: "Ori",
    club: "WARNING FC",
    goal: 3,
  },
  {
    rank: 12,
    player: "Andika",
    club: "MXC FC",
    goal: 3,
  },
  {
    rank: 16,
    player: "Sandi",
    club: "WARNING FC",
    goal: 2,
  },
  {
    rank: 16,
    player: "Ato",
    club: "REMAKO FC",
    goal: 2,
  },
  {
    rank: 16,
    player: "Nasrul",
    club: "REMAKO FC",
    goal: 2,
  },
  {
    rank: 16,
    player: "Geri",
    club: "MAGMA FC",
    goal: 2,
  },
  {
    rank: 16,
    player: "Jajang",
    club: "SEVENTYFOUR FC",
    goal: 2,
  },
  {
    rank: 16,
    player: "Toni",
    club: "MXC FC",
    goal: 2,
  },
  {
    rank: 16,
    player: "Movit",
    club: "SEVENTYFOUR FC",
    goal: 2,
  },
  {
    rank: 23,
    player: "Reza",
    club: "CAMO FC",
    goal: 1,
  },
  {
    rank: 23,
    player: "Rendi",
    club: "CAMO FC",
    goal: 1,
  },
  {
    rank: 23,
    player: "Deni",
    club: "REMAKO FC",
    goal: 1,
  },
  {
    rank: 23,
    player: "Chandra",
    club: "MAGMA FC",
    goal: 1,
  },
  {
    rank: 23,
    player: "Egi",
    club: "MXC FC",
    goal: 1,
  },
  {
    rank: 23,
    player: "Erik",
    club: "REMAKO FC",
    goal: 1,
  },
  {
    rank: 23,
    player: "Utun",
    club: "MAGMA FC",
    goal: 1,
  },
  {
    rank: 23,
    player: "Hilmi",
    club: "SEVENTYFOUR FC",
    goal: 1,
  },
  {
    rank: 23,
    player: "Adi",
    club: "REMAKO FC",
    goal: 1,
  },
  {
    rank: 23,
    player: "Rizal",
    club: "CAMO FC",
    goal: 1,
  },
  {
    rank: 23,
    player: "Ego",
    club: "MAGMA FC",
    goal: 1,
  },
  {
    rank: 23,
    player: "Gugum",
    club: "WARNING FC",
    goal: 1,
  },
  {
    rank: 23,
    player: "Fahmi",
    club: "CAMO FC",
    goal: 1,
  },
]);

const yellows = ref([
  {
    rank: 1,
    player: "Ruhiyat",
    club: "MXC FC",
    cards: 3,
  },
  {
    rank: 2,
    player: "Septi",
    club: "WARNING FC",
    cards: 1,
  },
  {
    rank: 2,
    player: "Adi",
    club: "REMAKO FC",
    cards: 1,
  },
  {
    rank: 2,
    player: "Egi",
    club: "MXC FC",
    cards: 1,
  },
  {
    rank: 2,
    player: "Toni",
    club: "WARNING FC",
    cards: 1,
  },
]);

const reds = ref([
  {
    rank: 1,
    player: "Ruhiyat",
    club: "MXC FC",
    cards: 1,
  },
]);
</script>

<template>
  <div>
    <h1 style="margin: 15px 0 5px 0">Goals</h1>
    <div class="table-container">
      <div class="title-top-scorer">
        <p class="title">Player</p>
        <p class="title">Goals</p>
      </div>
      <div
        class="top-scorer-list"
        v-for="(scorer, indexScorer) in topScorers"
        :key="indexScorer"
      >
        <p>{{ scorer.rank }}</p>
        <div class="top-scorer">
          <p class="player">{{ scorer.player }}</p>
          <p class="team">{{ scorer.club }}</p>
        </div>
        <p class="goals">{{ scorer.goal }}</p>
      </div>
    </div>

    <h1 style="margin: 15px 0 5px 0">Yellow Cards</h1>
    <div class="table-container">
      <div class="title-top-scorer">
        <p class="title">Player</p>
        <p class="title">Yellow cards</p>
      </div>
      <div class="top-scorer-list" v-for="(yellow, indexYel) in yellows" :key="indexYel">
        <p>{{ yellow.rank }}</p>
        <div class="top-scorer">
          <p class="player">{{ yellow.player }}</p>
          <p class="team">{{ yellow.club }}</p>
        </div>
        <p class="goals">{{ yellow.cards }}</p>
      </div>
    </div>

    <h1 style="margin: 15px 0 5px 0">Red Cards</h1>
    <div class="table-container">
      <div class="title-top-scorer">
        <p class="title">Player</p>
        <p class="title">Red cards</p>
      </div>
      <div class="top-scorer-list" v-for="(red, indexRed) in reds" :key="indexRed">
        <p>{{ red.rank }}</p>
        <div class="top-scorer">
          <p class="player">{{ red.player }}</p>
          <p class="team">{{ red.club }}</p>
        </div>
        <p class="goals">{{ red.cards }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.table-container {
  max-height: 500px;
  overflow-y: auto;
  padding-right: 15px;
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
}
</style>
