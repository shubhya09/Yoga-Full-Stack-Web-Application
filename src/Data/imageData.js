const images = [
  {
    image_id: 1,
    name: "Sun Salutation",
    description: "A series of poses performed in a sequence to warm up the body.",
    category: "Asana",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgwsNTROueu4B9S1CGpZG6Cj5fLTr74DVftKPPYKf2qKPPodU5edd69yo&s",
    benefits: "Improves flexibility and strength",
    difficulty: "Beginner",
    duration: "15 minutes"
  },
  {
    image_id: 2,
    name: "Alternate Nostril Breathing",
    description: "A pranayama technique that balances the left and right hemispheres of the brain.",
    category: "Pranayam",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXhsXFR-_zt5pENm5X43eeXl_nhMz4iA6fvwiijmj8EpmUc2nQUATisyI&s",
    benefits: "Reduces anxiety and promotes mental clarity",
    difficulty: "Beginner",
    duration: "10 minutes"
  },
  {
    image_id: 3,
    name: "Mindfulness Meditation",
    description: "A practice of being present in the moment without judgment.",
    category: "Dhyana",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaWY7VpiGXq3rXvQk98VjtOCCVWOZHscn536CLKD5Zvb7rVrEmPJglkD4XO3HYDnXIuKLK4w&s",
    benefits: "Enhances emotional well-being",
    difficulty: "Intermediate",
    duration: "20 minutes"
  },
  {
    image_id: 4,
    name: "Focused Gaze Meditation",
    description: "A concentration technique that involves focusing on a single point.",
    category: "Dharana",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaWY7VpiGXq3rXvQk98VjtOCCVWOZHscn536CLKD5Zvb7rVrEmPJglkD4XO3HYDnXIuKLK4w&s",
    benefits: "Improves mental focus and stability",
    difficulty: "Intermediate",
    duration: "15 minutes"
  },
  {
    image_id: 5,
    name: "Detoxifying Breath",
    description: "A cleansing technique that involves forceful exhalations.",
    category: "Kriya",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQELsBJD1i6mFO-J0S2_yNrRoqkorfaOWiirL64p62bM6PdvbX-RHZI70&s",
    benefits: "Purifies the respiratory system",
    difficulty: "Advanced",
    duration: "5 minutes"
  },
  {
    image_id: 6,
    name: "Chanting 'Om'",
    description: "A mantra practice that involves repeating the sacred syllable 'Om'.",
    category: "Mantra",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7vTVporTcqQFf7cHEaj9RDsagQn6jCByW0Dyq-Sa_IshE92-_efQbiFo&usqp=CAE&s",
    benefits: "Calms the mind and aligns the body with the universe",
    difficulty: "Beginner",
    duration: "10 minutes"
  },
  {
    image_id: 7,
    name: "Lotus Mudra",
    description: "A hand gesture symbolizing purity and enlightenment.",
    category: "Mudra",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY8hPYpWk0zorzcfLA84Yv-Z8_pMIKyP4jnFqzZcCPBMm8M8zgTnjBIM2dxRLPm26mhP6O&s",
    benefits: "Opens the heart chakra and fosters love",
    difficulty: "Beginner",
    duration: "5 minutes"
  },
  {
    image_id: 8,
    name: "Warrior II Pose",
    description: "A standing pose that enhances strength and stamina.",
    category: "Asana",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhHNzHeRCXkEKr1-6ZDY3eIvIlp0HoaK8m4QlsSXFidIUtWxnbWvsCeEeYwJBe4dx_632&s",
    benefits: "Strengthens legs and improves balance",
    difficulty: "Intermediate",
    duration: "1 minute"
  },
  {
    image_id: 9,
    name: "Skull Shining Breath",
    description: "A breathing technique that energizes and detoxifies.",
    category: "Pranayam",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ_hqusHncg0UlrxEv2bZoZGsFnOVGiw8Flm4ENoJfHiAFGGXVr9ib7g&s",
    benefits: "Cleanses lungs and boosts energy",
    difficulty: "Intermediate",
    duration: "5 minutes"
  },
  {
    image_id: 10,
    name: "Transcendental Meditation",
    description: "A form of silent mantra meditation.",
    category: "Dhyana",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2lO8KH8pNiPHbKotTP0qOO1eNvxnmpJKOGboTUI9szj5B7GsQGxz8YQ&s",
    benefits: "Reduces stress and promotes relaxation",
    difficulty: "Beginner",
    duration: "20 minutes"
  },
  {
    image_id: 11,
    name: "Third Eye Focus",
    description: "Concentrating on the space between the eyebrows to develop intuition.",
    category: "Dharana",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRChDu6cG8VjRxrwOW1dJxbXPsEsFBkGiLX_Cp4nP2YR2-NFGpbgrpWF4Q&usqp=CAE&s",
    benefits: "Enhances intuition and mental clarity",
    difficulty: "Advanced",
    duration: "10 minutes"
  },
  {
    image_id: 12,
    name: "Digestive Cleanse",
    description: "A kriya practice aimed at cleansing the digestive tract.",
    category: "Kriya",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV-aFDCgg3eEt2QJhAbB7ftQtXkTrb5OPLoaXY1uc1ZSX--9DUwQQg8iOHMKTMkXSQX006&s",
    benefits: "Improves digestion and detoxifies the body",
    difficulty: "Advanced",
    duration: "30 minutes"
  },
  {
    image_id: 13,
    name: "Peace Mantra",
    description: "Chanting a mantra that invokes peace and tranquility.",
    category: "Mantra",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9USHYHKFYxHP_EYOe6Ghi1iSXkTljYKCDx4eTLmG0PxZc__FGeWSwujrAOt4M0gTvfv4c&s",
    benefits: "Promotes inner peace and harmony",
    difficulty: "Beginner",
    duration: "15 minutes"
  },
  {
    image_id: 14,
    name: "Earth Touching Mudra",
    description: "A gesture symbolizing the earth as witness to enlightenment.",
    category: "Mudra",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWA9EYj4604kICYLFgjS1nBwYG_1rZu8fyZxVTdmj9lNdZnhFAjn09Mg&s",
    benefits: "Grounds energy and connects to the earth",
    difficulty: "Beginner",
    duration: "5 minutes"
  },
  {
    image_id: 15,
    name: "Triangle Pose",
    description: "A standing pose that stretches the legs and torso.",
    category: "Asana",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-YtOQjEUZsnmYznqxQ8LLgRwPsozjg39V3U7Ws6fiBf-cjPOpQA14kw&s",
    benefits: "Improves flexibility and balance",
    difficulty: "Intermediate",
    duration: "1 minute"
  },
  
];

export default images;
 
