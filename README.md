# ✨ Sophy's Harry Potter Quiz ✨

A magical, interactive Harry Potter quiz website with beautiful animations and a ranking system based on your wizarding knowledge!

![Harry Potter Quiz](https://img.shields.io/badge/Harry%20Potter-Quiz-gold?style=for-the-badge)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 🎯 Features

- **10 Harry Potter Trivia Questions** - Test your knowledge of the wizarding world
- **Beautiful Animations** - Twinkling stars, flying wands, and magical effects
- **Interactive Design** - Smooth transitions and hover effects
- **Ranking System** - Get ranked based on your score:
  - 🧙‍♂️ **10/10**: Headmaster/Headmistress
  - 📚 **8-9**: Professor
  - ⭐ **6-7**: Prefect
  - ✨ **4-5**: Outstanding Student
  - 🎓 **0-3**: First Year Student
- **Progress Tracking** - Visual progress bar and question counter
- **Responsive Design** - Works on desktop, tablet, and mobile devices

## 🚀 Live Demo

Visit the live quiz here: [Your GitHub Pages URL]

## 📁 Project Structure

```
harry-potter-quiz/
│
├── index.html       # Main HTML structure
├── styles.css       # All styling and animations
├── script.js        # Quiz logic and functionality
└── README.md        # Project documentation
```

## 🛠️ Technologies Used

- **HTML5** - Structure and content
- **CSS3** - Styling, animations, and effects
- **JavaScript** - Quiz functionality and interactivity
- **Google Fonts** - Cinzel and Philosopher fonts

## 💻 Local Development

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/harry-potter-quiz.git
   ```

2. Navigate to the project directory:
   ```bash
   cd harry-potter-quiz
   ```

3. Open `index.html` in your web browser

That's it! No build process or dependencies required.

## 🎨 Customization

### Adding More Questions

Edit the `questions` array in `script.js`:

```javascript
const questions = [
    {
        question: "Your question here?",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: 0  // Index of correct answer (0-3)
    },
    // Add more questions...
];
```

### Changing Colors

Modify the color scheme in `styles.css`:
- Primary gold: `#d4af37`
- Background blues: `#1a1a2e`, `#16213e`, `#0f3460`
- Accent colors for buttons and effects

### Adjusting Rank Thresholds

Edit the rank conditions in the `showResults()` function in `script.js`.

## 📱 Responsive Design

The quiz is fully responsive and works seamlessly on:
- Desktop computers
- Tablets
- Mobile phones

## 🌟 Features Breakdown

### Visual Effects
- Twinkling star background
- Animated flying wands
- Glowing text effects
- Smooth fade-in animations
- Pulse effects for correct answers
- Shake effects for incorrect answers

### User Experience
- Clear question counter
- Visual progress indicator
- Immediate feedback on answers
- Elegant result display
- Easy restart functionality

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/improvement`)
6. Create a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👏 Acknowledgments

- Inspired by the magical world of Harry Potter created by J.K. Rowling
- Google Fonts for the beautiful Cinzel and Philosopher typefaces
- All Harry Potter fans around the world! ⚡

## 📧 Contact

Have questions or suggestions? Feel free to reach out!

---

Made with ✨ and magic by Sophy

**May your code be bug-free and your spells be powerful!** 🪄
