const adventurer = {
  name: "Randi",
  health: 100,
  inventory: [
    "crystals",
    "florida water",
    "sage",
    "Ancestors",
    "Divine",
    "herbs",
    "tarot cards",
    "Love",
    "High John The Conqueror",
  ],
};
for (let item of adventurer.inventory) {
  console.log(item);
}

adventurer.companion = {
  name: "Shawn",
  type: "Son of God",
};

console.log(adventurer.companion);

adventurer.companion.companion = {
  name: "Children",
  type: "Next Generation",
  belongings: ["Hope", "Faith", "Love", "Purity"],
};

console.log(adventurer.companion.companion);

adventurer.modifyHealth = function (amount) {
  this.health += amount;
  console.log(
    `${this.name}'s health is now ${this.health > 0 ? this.health : 0}.`
  );
};

adventurer.modifyHealth(-50);
adventurer.modifyHealth(50);

adventurer.quests = [
  { title: "Find the Crystal", completed: false },
  { tite: "Defeat the Shadow Self", completed: true },
  { title: "Manifest Abundance, Love, and Good Health", completed: true },
];

for (let quest of adventurer.quests) {
  console.log(adventurer.quests);
  console.log(`Quest "${quest.title}" found.`);
}

adventurer.completeQuest = function (questTitle) {
  for (let quest of this.quests) {
    if (quest.title === questTitle) {
      quest.completed = true;
      console.log(`Quest "${quest.title}" has been completed`);
      return;
    }
  }
  console.log(`Quest "${questTitle}" not found.`);
};

adventurer.completeQuest("Defeat the Shadow Self");
adventurer.completeQuest("Manifest Abundance, Love, and Good Health");

try {
  adventurer.modifyHealth("");
} catch (error) {
  console.log("An error occured: ", error.message);
}
