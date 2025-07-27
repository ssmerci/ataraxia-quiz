<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ataraxia Realm Quiz</title>
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Google Fonts for Cinzel and Lora -->
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Lora:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Lora', serif;
      background: linear-gradient(135deg, #1a1a3d, #2a2a5e);
      color: #e2e8f0;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow-x: hidden;
    }
    .cursor-quill {
      cursor: url('https://<username>.github.io/ataraxia-quiz/assets/quill-cursor.png'), auto;
    }
  </style>
</head>
<body>
  <div id="root"></div>
  <!-- React and ReactDOM CDNs -->
  <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <!-- Babel CDN for JSX -->
  <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  <script type="text/babel">
    const questions = [
      {
        id: 1,
        text: "You stand at the edge of Nesrin’s aetheric plains, where elemental energies swirl in the air. How do you prefer to spend your day?",
        options: [
          { text: "Exploring the vibrant markets, connecting with others amidst the hum of modern life.", value: "E" },
          { text: "Retreating to a quiet corner of a modern home, reflecting on the flow of aether.", value: "I" },
        ],
        dimension: "EI",
      },
      {
        id: 2,
        text: "In Sorin’s Academy, you’re tasked with solving a complex aetheric puzzle. How do you approach it?",
        options: [
          { text: "Focus on the tangible components, testing each part methodically.", value: "S" },
          { text: "Imagine the possibilities, seeking patterns in the aether’s flow.", value: "N" },
        ],
        dimension: "SN",
      },
      {
        id: 3,
        text: "A dispute arises in Nagam among the reptilian folk. How do you resolve it?",
        options: [
          { text: "Analyze the situation logically, proposing a fair solution based on facts.", value: "T" },
          { text: "Consider the emotions and values of all involved, seeking harmony.", value: "F" },
        ],
        dimension: "TF",
      },
      {
        id: 4,
        text: "In Kural’s vast library of aetheric knowledge, how do you organize your studies?",
        options: [
          { text: "Create a structured plan, following a strict schedule to cover all scrolls.", value: "J" },
          { text: "Dive in spontaneously, exploring texts as inspiration strikes.", value: "P" },
        ],
        dimension: "JP",
      },
      {
        id: 5,
        text: "In Aceso’s lush forests, a beast tamer invites you to join a hunt. How do you respond?",
        options: [
          { text: "Eagerly join the group, energized by the shared adventure.", value: "E" },
          { text: "Prefer to observe the beasts alone, studying their natura aether in solitude.", value: "I" },
        ],
        dimension: "EI",
      },
      {
        id: 6,
        text: "Harmaa’s dark ravines glow with abrogation aether. How do you navigate its mysteries?",
        options: [
          { text: "Trust your senses, mapping the canals with practical steps.", value: "S" },
          { text: "Rely on intuition, sensing the hidden currents of aether.", value: "N" },
        ],
        dimension: "SN",
      },
      {
        id: 7,
        text: "In Cozen’s desolate canyons, an odium offers you a deal. How do you decide?",
        options: [
          { text: "Weigh the pros and cons objectively, focusing on outcomes.", value: "T" },
          { text: "Listen to your heart, considering your values and their intentions.", value: "F" },
        ],
        dimension: "TF",
      },
      {
        id: 8,
        text: "On the Niji Archipelagoes, where rules are few, how do you approach a festival?",
        options: [
          { text: "Plan your activities, ensuring you experience key events.", value: "J" },
          { text: "Embrace the chaos, letting the moment guide your choices.", value: "P" },
        ],
        dimension: "JP",
      },
      {
        id: 9,
        text: "In Niran, suspended above Sorin, time creatures offer you a vision of the future. How do you react?",
        options: [
          { text: "Engage with them openly, eager to share and learn.", value: "E" },
          { text: "Reflect quietly, processing the vision in your mind.", value: "I" },
        ],
        dimension: "EI",
      },
      {
        id: 10,
        text: "In Ascian, among the manes, you uncover an ancient relic. How do you study it?",
        options: [
          { text: "Examine its physical details, cataloging its properties.", value: "S" },
          { text: "Ponder its symbolic meaning, imagining its historical significance.", value: "N" },
        ],
        dimension: "SN",
      },
      {
        id: 11,
        text: "In Nesrin, a conflict requires a leader. How do you make your decision?",
        options: [
          { text: "Base it on logical analysis, prioritizing efficiency.", value: "T" },
          { text: "Consider the community’s values, aiming for unity.", value: "F" },
        ],
        dimension: "TF",
      },
      {
        id: 12,
        text: "In Sorin’s Academy, you’re planning a research expedition. How do you prepare?",
        options: [
          { text: "Organize a detailed itinerary, ensuring all resources are ready.", value: "J" },
          { text: "Keep plans flexible, ready to adapt to new discoveries.", value: "P" },
        ],
        dimension: "JP",
      },
      {
        id: 13,
        text: "In Harmaa’s canals, you encounter a group of travelers. How do you interact?",
        options: [
          { text: "Join them enthusiastically, sharing stories under the eternal night.", value: "E" },
          { text: "Observe from a distance, preferring your own thoughts.", value: "I" },
        ],
        dimension: "EI",
      },
      {
        id: 14,
        text: "In Aceso, you’re tasked with taming a wild beast. How do you approach it?",
        options: [
          { text: "Use practical techniques, observing its behavior closely.", value: "S" },
          { text: "Trust your instincts to sense its natura aether.", value: "N" },
        ],
        dimension: "SN",
      },
      {
        id: 15,
        text: "In Kural, a spectre asks for your help preserving a scroll. How do you decide?",
        options: [
          { text: "Evaluate the scroll’s importance based on knowledge.", value: "T" },
          { text: "Consider the spectre’s emotional attachment to the scroll.", value: "F" },
        ],
        dimension: "TF",
      },
      {
        id: 16,
        text: "In Cozen, you face a Nether storm. How do you survive it?",
        options: [
          { text: "Follow a prepared plan, using shelter systematically.", value: "J" },
          { text: "Adapt on the fly, navigating the storm as it unfolds.", value: "P" },
        ],
        dimension: "JP",
      },
      {
        id: 17,
        text: "On the Niji Archipelagoes’ Mirage Islands, you encounter a mysterious figure. How do you engage?",
        options: [
          { text: "Approach them eagerly, seeking their story.", value: "E" },
          { text: "Keep to yourself, observing them quietly.", value: "I" },
        ],
        dimension: "EI",
      },
      {
        id: 18,
        text: "In Niran’s poesis aether, you create a time artifact. How do you create it?",
        options: [
          { text: "Focus on its practical function, ensuring it works reliably.", value: "S" },
          { text: "Incorporate symbolic elements, inspired by its potential.", value: "N" },
        ],
        dimension: "SN",
      },
      {
        id: 19,
        text: "In Nagam, a reptilian elder seeks your counsel. How do you advise them?",
        options: [
          { text: "Offer a solution based on objective reasoning.", value: "T" },
          { text: "Provide guidance based on cultural values.", value: "F" },
        ],
        dimension: "TF",
      },
      {
        id: 20,
        text: "In Ascian, you’re invited to a manes’ ritual. How do you participate?",
        options: [
          { text: "Plan your role carefully, respecting their traditions.", value: "J" },
          { text: "Join spontaneously, embracing the ritual’s flow.", value: "P" },
        ],
        dimension: "JP",
      },
    ];

    const realmMappings = {
      ENFJ: "Nesrin",
      ESTP: "Nesrin",
      ENTJ: "Sorin",
      ISTJ: "Sorin",
      INFJ: "Prisca",
      ESFP: "Niji Archipelagoes",
      INTJ: "Harmaa",
      INTP: "Harmaa",
      ENTP: "Aceso",
      ISFP: "Aceso",
      INFP: "Kural",
      ESFJ: "Kural",
      ENFP: "Cozen",
      ISFJ: "Niran",
      ESTJ: "Nagam",
      ISTP: "Ascian",
    };

    const realmDescriptions = {
      Nesrin: "A land of elemental aether, where modern houses blend with vibrant markets and swirling energies, Nesrin is home to those who thrive in connection and action.",
      Sorin: "At the heart of Ataraxia, Sorin hosts the prestigious Academy, a hub of knowledge and order, perfect for disciplined and ambitious souls.",
      Prisca: "A realm of introspection and wisdom, Prisca’s serene landscapes inspire those who seek deep understanding and harmony.",
      "Niji Archipelagoes": "A cluster of islands where rules are cast aside, the Niji Archipelagoes, with their mysterious Mirage Islands, attract free spirits and adventurers.",
      Harmaa: "Shrouded in perpetual night, Harmaa’s ravines and canals pulse with abrogation aether, drawing analytical and introspective minds.",
      Aceso: "Lush forests teeming with beasts and natura aether, Aceso is the haven of beast tamers and those who embrace the wild.",
      Kural: "A vast library of aetheric knowledge filled with spectres, Kural is the sanctuary for those who cherish wisdom and empathy.",
      Cozen: "A desolate land of canyons and nether, Cozen’s odiums challenge the resilient and imaginative who dare to thrive there.",
      Niran: "Floating above Sorin, Niran’s poesis aether and time creatures attract those who weave creativity and care into their lives.",
      Nagam: "Near Nesrin, Nagam’s reptilian people with scaled arms and eyes call to those who value structure and leadership.",
      Ascian: "A land of manes near Kural, Ascian beckons those who find freedom in solitude and practical ingenuity.",
    };

    const ProgressBar = ({ current, total }) => {
      return (
        <div className="w-full max-w-md mx-auto mt-4">
          <div className="bg-gray-700 h-2 rounded-full">
            <div
              className="bg-amber-400 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(current / total) * 100}%` }}
            ></div>
          </div>
        </div>
      );
    };

    const EmailForm = ({ onSubmit }) => {
      const [email, setEmail] = React.useState('');

      const handleSubmit = () => {
        onSubmit(email);
      };

      return (
        <div className="text-center p-6 max-w-lg mx-auto cursor-quill">
          <h2 className="text-2xl font-cinzel text-amber-300 mb-4">Enter Your Email</h2>
          <p className="text-gray-300 mb-6">Provide your email to receive your Ataraxia realm results and updates.</p>
          <div className="flex flex-col items-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="bg-gray-800 text-gray-200 px-4 py-2 rounded-lg mb-4 w-full max-w-xs"
              required
            />
            <button
              onClick={handleSubmit}
              className="bg-amber-500 text-gray-900 px-6 py-2 rounded-full hover:bg-amber-400 transition font-cinzel"
            >
              See Your Realm
            </button>
          </div>
        </div>
      );
    };

    const Quiz = () => {
      const [currentQuestion, setCurrentQuestion] = React.useState(0);
      const [scores, setScores] = React.useState({ E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 });
      const [showEmailForm, setShowEmailForm] = React.useState(false);
      const [result, setResult] = React.useState(null);
      const [email, setEmail] = React.useState('');
      const [isMusicPlaying, setIsMusicPlaying] = React.useState(false);
      const audioRef = React.useRef(new Audio('https://<username>.github.io/ataraxia-quiz/assets/ataraxia-theme.mp3'));

      const handleAnswer = (value, dimension) => {
        setScores((prev) => ({ ...prev, [value]: prev[value] + 1 }));
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
        } else {
          setShowEmailForm(true);
        }
      };

      const handleEmailSubmit = (submittedEmail) => {
        setEmail(submittedEmail);
        const mbtiType = determineMBTI(scores);
        setResult(realmMappings[mbtiType] || "Sorin");
        setShowEmailForm(false);
      };

      const determineMBTI = (scores) => {
        const ei = scores.E >= scores.I ? "E" : "I";
        const sn = scores.S >= scores.N ? "S" : "N";
        const tf = scores.T >= scores.F ? "T" : "F";
        const jp = scores.J >= scores.P ? "J" : "P";
        return `${ei}${sn}${tf}${jp}`;
      };

      const toggleMusic = () => {
        if (isMusicPlaying) {
          audioRef.current.pause();
        } else {
          audioRef.current.loop = true;
          audioRef.current.play().catch((err) => console.error('Audio play failed:', err));
        }
        setIsMusicPlaying(!isMusicPlaying);
      };

      const downloadSigil = () => {
        alert('Download feature requires html2canvas, not supported in CodePen. Visit the full site to download your sigil!');
      };

      const shareOnX = () => {
        const text = encodeURIComponent(`I got ${result} in the Ataraxia Realm Quiz! Discover your realm at https://<username>.github.io/ataraxia-quiz/`);
        window.open(`https://x.com/intent/tweet?text=${text}`, '_blank');
      };

      const shareOnInstagram = () => {
        alert('To share on Instagram, visit the full site to download your sigil and post it manually!');
      };

      const getSigilImage = (realm) => {
        try {
          return `https://<username>.github.io/ataraxia-quiz/assets/sigil-${realm.toLowerCase().replace(' ', '-')}.png`;
        } catch (e) {
          console.error(`Sigil image for ${realm} not found`);
          return 'https://<username>.github.io/ataraxia-quiz/assets/sigil-sorin.png';
        }
      };

      if (showEmailForm) {
        return <EmailForm onSubmit={handleEmailSubmit} />;
      }

      if (result) {
        return (
          <div className="text-center p-6 max-w-lg mx-auto cursor-quill">
            <div id="result-card">
              <h2 className="text-3xl font-cinzel text-amber-300 mb-4">Your Realm: {result}</h2>
              <p className="text-xl text-gray-200 mb-6">{realmDescriptions[result]}</p>
              <img
                src={getSigilImage(result)}
                alt={`${result} Sigil`}
                className="mx-auto mb-6 w-32 h-32"
                onError={(e) => (e.target.src = 'https://<username>.github.io/ataraxia-quiz/assets/sigil-sorin.png')}
              />
            </div>
            <div className="flex justify-center gap-4 mb-6">
              <button
                onClick={shareOnX}
                className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-500 transition font-cinzel"
              >
                Share on X
              </button>
              <button
                onClick={shareOnInstagram}
                className="bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-500 transition font-cinzel"
              >
                Share on Instagram
              </button>
              <button
                onClick={downloadSigil}
                className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-500 transition font-cinzel"
              >
                Download Sigil
              </button>
            </div>
          </div>
        );
      }

      const question = questions[currentQuestion];

      return (
        <div className="text-center p-6 max-w-lg mx-auto cursor-quill">
          <h1 className="text-4xl font-cinzel text-amber-300 mb-8">Discover Your Ataraxia Realm</h1>
          <button
            onClick={toggleMusic}
            className="absolute top-4 right-4 bg-gray-800 text-gray-200 px-4 py-2 rounded-full hover:bg-gray-700 transition"
          >
            {isMusicPlaying ? 'Pause Music' : 'Play Music'}
          </button>
          <ProgressBar current={currentQuestion + 1} total={questions.length} />
          <h2 className="text-2xl text-gray-200 mb-6">{question.text}</h2>
          <div className="grid gap-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.value, question.dimension)}
                className="bg-gray-800 text-gray-200 px-6 py-3 rounded-lg hover:bg-gray-700 transition"
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      );
    };

    const App = () => {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <Quiz />
        </div>
      );
    };

    ReactDOM.render(<App />, document.getElementById('root'));
  </script>
</body>
</html>
