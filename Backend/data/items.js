const fs = require("node:fs/promises");
const path = require("path");

const jsonFilePath = path.join(__dirname, "..", "items.json");
async function getStoredItems() {
  console.log(jsonFilePath);
  const rawFileContent = await fs.readFile(jsonFilePath, {
    encoding: "utf-8",
  });
  const data = JSON.parse(rawFileContent);
  const storedItems = data.items ?? [];
  return storedItems;
}

function storeItems(items) {
  return fs.writeFile(jsonFilePath, JSON.stringify({ items: items || [] }));
}

exports.getStoredItems = getStoredItems;
exports.storeItems = storeItems;
