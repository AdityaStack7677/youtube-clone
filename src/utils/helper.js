var nameList = [
  "Alex",
  "Jordan",
  "Taylor",
  "Morgan",
  "Casey",
  "Riley",
  "Jamie",
  "Avery",
  "Peyton",
  "Quinn",
  "Skyler",
  "Harper",
  "Reese",
  "Rowan",
  "Sawyer",
  "Emerson",
  "Finley",
  "Dakota",
  "Cameron",
  "Drew",
  "Elliot",
  "Hayden",
  "Jesse",
  "Kai",
  "Logan",
  "Micah",
  "Parker",
  "Reagan",
  "Sage",
  "Tatum",
  "Blake",
  "Charlie",
  "Devon",
  "Eden",
  "Frankie",
  "Gray",
  "Indigo",
  "Jules",
  "Kendall",
  "Lane",
  "Marley",
  "Nico",
  "Oakley",
  "Phoenix",
  "Remy",
  "Shiloh",
  "Toby",
  "Val",
  "Winter",
  "Zion",
];

export function generateRandomName() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}

const messageList = [
  "Great video!",
  "Thanks for sharing!",
  "I learned a lot.",
  "Can you explain more about this topic?",
  "Awesome content!",
  "This was really helpful.",
  "I have a question.",
  "Keep up the good work!",
  "Nice editing!",
  "Subscribed!",
  "Looking forward to more videos.",
  "This part was confusing.",
  "Loved the explanation.",
  "Where can I find more info?",
  "First comment!",
  "This deserves more views.",
  "Well done!",
  "Brilliant!",
  "I disagree with this point.",
  "Can you make a tutorial on this?",
];

export function generateRandomMessage() {
  return messageList[Math.floor(Math.random() * messageList.length)];
}
