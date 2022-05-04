const splits = [
    {
      "upCard": 2,
      "card1": 11,
      "card2": 11,
      "should": "split"
    },
    {
      "upCard": 3,
      "card1": 11,
      "card2": 11,
      "should": "split"
    },
    {
      "upCard": 4,
      "card1": 11,
      "card2": 11,
      "should": "split"
    },
    {
      "upCard": 5,
      "card1": 11,
      "card2": 11,
      "should": "split"
    },
    {
      "upCard": 6,
      "card1": 11,
      "card2": 11,
      "should": "split"
    },
    {
      "upCard": 7,
      "card1": 11,
      "card2": 11,
      "should": "split"
    },
    {
      "upCard": 8,
      "card1": 11,
      "card2": 11,
      "should": "split"
    },
    {
      "upCard": 9,
      "card1": 11,
      "card2": 11,
      "should": "split"
    },
    {
      "upCard": 10,
      "card1": 11,
      "card2": 11,
      "should": "split"
    },
    {
      "upCard": 11,
      "card1": 11,
      "card2": 11,
      "should": "split"
    },
    {
      "upCard": 2,
      "card1": 8,
      "card2": 8,
      "should": "split"
    },
    {
      "upCard": 3,
      "card1": 8,
      "card2": 8,
      "should": "split"
    },
    {
      "upCard": 4,
      "card1": 8,
      "card2": 8,
      "should": "split"
    },
    {
      "upCard": 5,
      "card1": 8,
      "card2": 8,
      "should": "split"
    },
    {
      "upCard": 6,
      "card1": 8,
      "card2": 8,
      "should": "split"
    },
    {
      "upCard": 7,
      "card1": 8,
      "card2": 8,
      "should": "split"
    },
    {
      "upCard": 8,
      "card1": 8,
      "card2": 8,
      "should": "split"
    },
    {
      "upCard": 9,
      "card1": 8,
      "card2": 8,
      "should": "split"
    },
    {
      "upCard": 10,
      "card1": 8,
      "card2": 8,
      "should": "split"
    },
    {
      "upCard": 11,
      "card1": 8,
      "card2": 8,
      "should": "split"
    },
    {
      "upCard": 2,
      "card1": 10,
      "card2": 10,
      "should": "stand"
    },
    {
      "upCard": 3,
      "card1": 10,
      "card2": 10,
      "should": "stand"
    },
    {
      "upCard": 4,
      "card1": 10,
      "card2": 10,
      "should": "stand"
    },
    {
      "upCard": 5,
      "card1": 10,
      "card2": 10,
      "should": "stand"
    },
    {
      "upCard": 6,
      "card1": 10,
      "card2": 10,
      "should": "stand"
    },
    {
      "upCard": 7,
      "card1": 10,
      "card2": 10,
      "should": "stand"
    },
    {
      "upCard": 8,
      "card1": 10,
      "card2": 10,
      "should": "stand"
    },
    {
      "upCard": 9,
      "card1": 10,
      "card2": 10,
      "should": "stand"
    },
    {
      "upCard": 10,
      "card1": 10,
      "card2": 10,
      "should": "stand"
    },
    {
      "upCard": 11,
      "card1": 10,
      "card2": 10,
      "should": "stand"
    },
    {
      "upCard": 2,
      "card1": 9,
      "card2": 9,
      "should": "split"
    },
    {
      "upCard": 3,
      "card1": 9,
      "card2": 9,
      "should": "split"
    },
    {
      "upCard": 4,
      "card1": 9,
      "card2": 9,
      "should": "split"
    },
    {
      "upCard": 5,
      "card1": 9,
      "card2": 9,
      "should": "split"
    },
    {
      "upCard": 6,
      "card1": 9,
      "card2": 9,
      "should": "split"
    },
    {
      "upCard": 7,
      "card1": 9,
      "card2": 9,
      "should": "stand"
    },
    {
      "upCard": 8,
      "card1": 9,
      "card2": 9,
      "should": "split"
    },
    {
      "upCard": 9,
      "card1": 9,
      "card2": 9,
      "should": "split"
    },
    {
      "upCard": 10,
      "card1": 9,
      "card2": 9,
      "should": "stand"
    },
    {
      "upCard": 11,
      "card1": 9,
      "card2": 9,
      "should": "stand"
    },
    {
      "upCard": 2,
      "card1": 7,
      "card2": 7,
      "should": "split"
    },
    {
      "upCard": 3,
      "card1": 7,
      "card2": 7,
      "should": "split"
    },
    {
      "upCard": 4,
      "card1": 7,
      "card2": 7,
      "should": "split"
    },
    {
      "upCard": 5,
      "card1": 7,
      "card2": 7,
      "should": "split"
    },
    {
      "upCard": 6,
      "card1": 7,
      "card2": 7,
      "should": "split"
    },
    {
      "upCard": 7,
      "card1": 7,
      "card2": 7,
      "should": "split"
    },
    {
      "upCard": 8,
      "card1": 7,
      "card2": 7,
      "should": "hit"
    },
    {
      "upCard": 9,
      "card1": 7,
      "card2": 7,
      "should": "hit"
    },
    {
      "upCard": 10,
      "card1": 7,
      "card2": 7,
      "should": "hit"
    },
    {
      "upCard": 11,
      "card1": 7,
      "card2": 7,
      "should": "hit"
    },
    {
      "upCard": 2,
      "card1": 6,
      "card2": 6,
      "should": "split"
    },
    {
      "upCard": 3,
      "card1": 6,
      "card2": 6,
      "should": "split"
    },
    {
      "upCard": 4,
      "card1": 6,
      "card2": 6,
      "should": "split"
    },
    {
      "upCard": 5,
      "card1": 6,
      "card2": 6,
      "should": "split"
    },
    {
      "upCard": 6,
      "card1": 6,
      "card2": 6,
      "should": "split"
    },
    {
      "upCard": 7,
      "card1": 6,
      "card2": 6,
      "should": "hit"
    },
    {
      "upCard": 8,
      "card1": 6,
      "card2": 6,
      "should": "hit"
    },
    {
      "upCard": 9,
      "card1": 6,
      "card2": 6,
      "should": "hit"
    },
    {
      "upCard": 10,
      "card1": 6,
      "card2": 6,
      "should": "hit"
    },
    {
      "upCard": 11,
      "card1": 6,
      "card2": 6,
      "should": "hit"
    },
    {
      "upCard": 2,
      "card1": 5,
      "card2": 5,
      "should": "double"
    },
    {
      "upCard": 3,
      "card1": 5,
      "card2": 5,
      "should": "double"
    },
    {
      "upCard": 4,
      "card1": 5,
      "card2": 5,
      "should": "double"
    },
    {
      "upCard": 5,
      "card1": 5,
      "card2": 5,
      "should": "double"
    },
    {
      "upCard": 6,
      "card1": 5,
      "card2": 5,
      "should": "double"
    },
    {
      "upCard": 7,
      "card1": 5,
      "card2": 5,
      "should": "double"
    },
    {
      "upCard": 8,
      "card1": 5,
      "card2": 5,
      "should": "double"
    },
    {
      "upCard": 9,
      "card1": 5,
      "card2": 5,
      "should": "double"
    },
    {
      "upCard": 10,
      "card1": 5,
      "card2": 5,
      "should": "hit"
    },
    {
      "upCard": 11,
      "card1": 5,
      "card2": 5,
      "should": "hit"
    },
    {
      "upCard": 2,
      "card1": 4,
      "card2": 4,
      "should": "hit"
    },
    {
      "upCard": 3,
      "card1": 4,
      "card2": 4,
      "should": "hit"
    },
    {
      "upCard": 4,
      "card1": 4,
      "card2": 4,
      "should": "hit"
    },
    {
      "upCard": 5,
      "card1": 4,
      "card2": 4,
      "should": "split"
    },
    {
      "upCard": 6,
      "card1": 4,
      "card2": 4,
      "should": "split"
    },
    {
      "upCard": 7,
      "card1": 4,
      "card2": 4,
      "should": "hit"
    },
    {
      "upCard": 8,
      "card1": 4,
      "card2": 4,
      "should": "hit"
    },
    {
      "upCard": 9,
      "card1": 4,
      "card2": 4,
      "should": "hit"
    },
    {
      "upCard": 10,
      "card1": 4,
      "card2": 4,
      "should": "hit"
    },
    {
      "upCard": 11,
      "card1": 4,
      "card2": 4,
      "should": "hit"
    },
    {
      "upCard": 2,
      "card1": 3,
      "card2": 3,
      "should": "split"
    },
    {
      "upCard": 3,
      "card1": 3,
      "card2": 3,
      "should": "split"
    },
    {
      "upCard": 4,
      "card1": 3,
      "card2": 3,
      "should": "split"
    },
    {
      "upCard": 5,
      "card1": 3,
      "card2": 3,
      "should": "split"
    },
    {
      "upCard": 6,
      "card1": 3,
      "card2": 3,
      "should": "split"
    },
    {
      "upCard": 7,
      "card1": 3,
      "card2": 3,
      "should": "split"
    },
    {
      "upCard": 8,
      "card1": 3,
      "card2": 3,
      "should": "hit"
    },
    {
      "upCard": 9,
      "card1": 3,
      "card2": 3,
      "should": "hit"
    },
    {
      "upCard": 10,
      "card1": 3,
      "card2": 3,
      "should": "hit"
    },
    {
      "upCard": 11,
      "card1": 3,
      "card2": 3,
      "should": "hit"
    },
    {
      "upCard": 2,
      "card1": 2,
      "card2": 2,
      "should": "split"
    },
    {
      "upCard": 3,
      "card1": 2,
      "card2": 2,
      "should": "split"
    },
    {
      "upCard": 4,
      "card1": 2,
      "card2": 2,
      "should": "split"
    },
    {
      "upCard": 5,
      "card1": 2,
      "card2": 2,
      "should": "split"
    },
    {
      "upCard": 6,
      "card1": 2,
      "card2": 2,
      "should": "split"
    },
    {
      "upCard": 7,
      "card1": 2,
      "card2": 2,
      "should": "split"
    },
    {
      "upCard": 8,
      "card1": 2,
      "card2": 2,
      "should": "hit"
    },
    {
      "upCard": 9,
      "card1": 2,
      "card2": 2,
      "should": "hit"
    },
    {
      "upCard": 10,
      "card1": 2,
      "card2": 2,
      "should": "hit"
    },
    {
      "upCard": 11,
      "card1": 2,
      "card2": 2,
      "should": "hit"
    }
  ]

  export default splits;