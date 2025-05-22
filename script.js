const root = document.getElementById("root");

// Create textarea
const textarea = document.createElement("textarea");
textarea.placeholder = "Enter your text here...";
textarea.rows = 10;
textarea.cols = 50;

// Create submit button
const button = document.createElement("button");
button.textContent = "Submit";

// Append elements to root
root.appendChild(textarea);
root.appendChild(document.createElement("br"));
root.appendChild(button);

// Handle button click
button.addEventListener("click", () => {
  // Clear previous results if any
  const existingTable = document.querySelector("table");
  if (existingTable) existingTable.remove();

  const text = textarea.value.trim();
  const words = text.split(/\s+/);
  const frequency = {};

  words.forEach(word => {
    const cleaned = word.toLowerCase().replace(/[^\w]/g, "");
    if (cleaned) {
      frequency[cleaned] = (frequency[cleaned] || 0) + 1;
    }
  });

  console.log(frequency); // Required output

  const sorted = Object.entries(frequency)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, 5);

  // Create table
  const table = document.createElement("table");
  const header = document.createElement("tr");
  header.innerHTML = "<th>word_name</th><th>word_frequency</th>";
  table.appendChild(header);

  sorted.forEach(([word, count]) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${word}</td><td>${count}</td>`;
    table.appendChild(row);
  });

  root.appendChild(table);
});

