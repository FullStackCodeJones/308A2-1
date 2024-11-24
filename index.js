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
