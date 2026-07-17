const NICHE_PACKS = [
  {
    id: "devops",
    label: "DevOps",
    category: "Technology",
    free: true,
    summary: "Pipelines and platforms",
    keywords: ["devops", "cloud", "automation", "pipelines", "kubernetes", "containers", "sre", "platform"],
    words: [
      ["GIT", "Distributed version control used by most software teams.", 1],
      ["DOCKER", "Container tooling used to package apps with dependencies.", 1],
      ["HELM", "Kubernetes package manager that installs charts.", 1],
      ["YAML", "Human-readable config format used in many pipelines.", 1],
      ["SHELL", "Command interface used by operations teams.", 1],
      ["CICD", "Automated path from code commit to release.", 1],
      ["RUNBOOK", "Operational steps followed during incidents.", 1],
      ["PIPELINE", "Automated workflow for build, test, and deploy.", 1],
      ["SECRETS", "Sensitive values that should not be stored in source code.", 1],
      ["ANSIBLE", "Automation tool known for YAML playbooks.", 2],
      ["CANARY", "Release pattern that sends limited traffic to a new version.", 2],
      ["SLO", "Reliability target agreed for a service.", 2],
      ["TERRAFORM", "Infrastructure as code tool using plans and state.", 2],
      ["CONTAINER", "Portable runtime unit for an application process.", 2],
      ["ROLLBACK", "Release action that returns to a previous version.", 2],
      ["GRAFANA", "Dashboard tool often paired with Prometheus.", 2],
      ["ARTIFACT", "Versioned build output stored for deployment.", 2],
      ["KUBERNETES", "Container orchestration platform for clustered workloads.", 3],
      ["PROMETHEUS", "Metrics system with a pull-based scrape model.", 3],
      ["OBSERVABILITY", "Practice of understanding systems from emitted signals.", 3],
      ["DEPLOYMENT", "Kubernetes object that manages replica rollout.", 3],
      ["BLUEGREEN", "Release pattern that switches traffic between environments.", 3],
      ["AUTOSCALING", "Capacity adjustment based on load or policy.", 3],
      ["IDEMPOTENT", "Able to run repeatedly with the same final result.", 3],
      ["ORCHESTRATE", "Coordinate many services or automation steps.", 3],
    ],
  },
  {
    id: "ai",
    label: "AI",
    category: "Technology",
    free: true,
    summary: "Models and data",
    keywords: ["ai", "artificial intelligence", "machine learning", "ml", "data", "models", "chatbot", "automation"],
    words: [
      ["MODEL", "System trained to make predictions or generate outputs.", 1],
      ["TOKEN", "Text unit processed by many language models.", 1],
      ["PROMPT", "Input instructions sent to a generative model.", 1],
      ["VECTOR", "Numeric representation used for similarity search.", 1],
      ["DATASET", "Collection of examples used for training or evaluation.", 1],
      ["AGENT", "AI system that can choose steps toward a goal.", 1],
      ["LABEL", "Expected answer attached to a training example.", 1],
      ["RAG", "Pattern that retrieves context before generation.", 1],
      ["NEURON", "Basic computational unit in a neural network.", 2],
      ["TRAINING", "Process of fitting model parameters from examples.", 2],
      ["INFERENCE", "Running a trained model to produce an output.", 2],
      ["GRADIENT", "Signal used to update model weights during learning.", 2],
      ["OVERFIT", "When a model memorizes training data too closely.", 2],
      ["LATENT", "Hidden representation learned by a model.", 2],
      ["CLASSIFIER", "Model that assigns inputs to categories.", 2],
      ["FEATURE", "Input signal used by a model.", 2],
      ["EMBEDDING", "Dense vector representation of text, images, or items.", 3],
      ["ATTENTION", "Mechanism that weights context while processing inputs.", 3],
      ["TRANSFORMER", "Architecture behind many modern language models.", 3],
      ["MULTIMODAL", "Able to process more than one input type.", 3],
      ["EVALUATION", "Process used to measure model quality.", 3],
      ["RETRIEVAL", "Finding relevant context before generation.", 3],
      ["FINE TUNING", "Training an existing model for a more specific task.", 3],
      ["ALIGNMENT", "Making model behavior better match human intent.", 3],
    ],
  },
  {
    id: "jw",
    label: "JW Study",
    category: "Faith",
    free: false,
    summary: "Bible study terms",
    keywords: ["jw", "jehovah", "bible", "faith", "religion", "study", "ministry", "watchtower"],
    words: [
      ["BIBLE", "Primary book used for study and teaching.", 1],
      ["FAITH", "Trust and conviction shown through action.", 1],
      ["PRAYER", "Personal communication with God.", 1],
      ["PSALM", "Sacred song or poem found in the Bible.", 1],
      ["PROVERB", "Short saying that teaches wisdom.", 1],
      ["KINGDOM", "Central theme in the preaching message.", 1],
      ["MEETING", "Regular gathering for worship and instruction.", 1],
      ["MINISTRY", "Public teaching and preaching activity.", 1],
      ["SCRIPTURE", "A passage from the Bible.", 2],
      ["BAPTISM", "Public symbol of dedication.", 2],
      ["MEMORIAL", "Annual observance of Jesus' death.", 2],
      ["PARADISE", "Promised peaceful future for the earth.", 2],
      ["PIONEER", "Volunteer who spends set time in ministry.", 2],
      ["ELDER", "Appointed man who shepherds the congregation.", 2],
      ["GOSPEL", "Good news message in Christian teaching.", 2],
      ["DISCIPLE", "Learner who follows a teacher.", 2],
      ["CONGREGATION", "Local group that meets for worship.", 3],
      ["PUBLICATION", "Study material prepared for teaching.", 3],
      ["WATCHTOWER", "Magazine title associated with Bible study.", 3],
      ["ENDURANCE", "Staying faithful under difficulty.", 3],
      ["RESURRECTION", "Restoration of life after death.", 3],
      ["PROPHECY", "Inspired message about future events.", 3],
      ["DEDICATION", "Personal commitment to serve God.", 3],
    ],
  },
  {
    id: "medical",
    label: "Medical",
    category: "Health",
    free: false,
    summary: "Clinical vocabulary",
    keywords: ["medical", "medicine", "doctor", "nurse", "health", "hospital", "clinical", "anatomy"],
    words: [
      ["TRIAGE", "Sorting patients by urgency of care.", 1],
      ["SYMPTOM", "Patient-experienced sign of illness.", 1],
      ["DOSAGE", "Measured amount of medicine to take.", 1],
      ["ACUTE", "Sudden or short-term condition.", 1],
      ["CHRONIC", "Long-lasting or recurring condition.", 1],
      ["STERILE", "Free from living microorganisms.", 1],
      ["PULSE", "Rhythmic beat felt from blood flow.", 1],
      ["FEVER", "Body temperature above the normal range.", 1],
      ["VACCINE", "Preparation that stimulates immune protection.", 2],
      ["INSULIN", "Hormone used to regulate blood sugar.", 2],
      ["CARDIAC", "Related to the heart.", 2],
      ["THERAPY", "Treatment intended to improve health.", 2],
      ["ANATOMY", "Study of body structure.", 2],
      ["PATHOGEN", "Organism or agent that can cause disease.", 2],
      ["IMMUNITY", "Body's ability to resist infection.", 2],
      ["SURGERY", "Treatment involving an operation.", 2],
      ["DIAGNOSIS", "Identification of a disease or condition.", 3],
      ["NEUROLOGY", "Medical specialty focused on the nervous system.", 3],
      ["PHARMACY", "Practice and place for preparing medicines.", 3],
      ["VENTILATOR", "Machine that supports breathing.", 3],
      ["RADIOLOGY", "Medical imaging specialty.", 3],
      ["ANTIBIOTIC", "Medicine used against bacterial infections.", 3],
      ["HEMATOLOGY", "Medical specialty focused on blood.", 3],
      ["RESPIRATORY", "Related to breathing and the lungs.", 3],
    ],
  },
  {
    id: "legal",
    label: "Legal",
    category: "Professional",
    free: false,
    summary: "Law and courts",
    keywords: ["legal", "law", "lawyer", "attorney", "court", "contract", "compliance", "justice"],
    words: [
      ["TORT", "Civil wrong that may lead to damages.", 1],
      ["APPEAL", "Request for a higher court to review a decision.", 1],
      ["BRIEF", "Written legal argument submitted to a court.", 1],
      ["WITNESS", "Person who gives evidence.", 1],
      ["COUNSEL", "Lawyer or legal advice.", 1],
      ["DAMAGES", "Money awarded for loss or injury.", 1],
      ["CLAIM", "Demand for a legal remedy or right.", 1],
      ["JUDGE", "Official who presides over a court.", 1],
      ["CONTRACT", "Enforceable agreement between parties.", 2],
      ["STATUTE", "Written law passed by a legislature.", 2],
      ["EVIDENCE", "Material used to prove facts in a case.", 2],
      ["LIABILITY", "Legal responsibility for an act or debt.", 2],
      ["PLAINTIFF", "Party who starts a civil case.", 2],
      ["DEFENDANT", "Party responding to a claim or charge.", 2],
      ["HEARING", "Court session for argument or evidence.", 2],
      ["VERDICT", "Decision reached by a jury or court.", 2],
      ["PRECEDENT", "Earlier decision used as authority.", 3],
      ["AFFIDAVIT", "Written statement confirmed by oath.", 3],
      ["JURISDICTION", "Court's authority to hear a matter.", 3],
      ["LITIGATION", "Process of taking legal action.", 3],
      ["ARBITRATION", "Private dispute resolution by a neutral party.", 3],
      ["DISCOVERY", "Pre-trial exchange of relevant information.", 3],
      ["INJUNCTION", "Court order requiring or preventing an action.", 3],
      ["COMPLIANCE", "Conforming to rules, laws, or standards.", 3],
    ],
  },
  {
    id: "cyber",
    label: "Cybersecurity",
    category: "Technology",
    free: false,
    summary: "Defense and risk",
    keywords: ["cyber", "security", "hacker", "hackers", "hacking", "pentest", "malware", "privacy", "defense"],
    words: [
      ["HASH", "Fixed-length digest of data.", 1],
      ["SALT", "Random value added before hashing a password.", 1],
      ["PATCH", "Update that fixes a vulnerability or bug.", 1],
      ["TOKEN", "Credential-like value used for access.", 1],
      ["CIPHER", "Algorithm for encryption or decryption.", 1],
      ["BACKUP", "Copy kept for recovery.", 1],
      ["PROXY", "Intermediary that forwards requests.", 1],
      ["LOGIN", "Process of gaining access to an account.", 1],
      ["FIREWALL", "Control that filters network traffic.", 2],
      ["PHISHING", "Fraudulent attempt to steal sensitive information.", 2],
      ["MALWARE", "Software designed to harm systems or data.", 2],
      ["EXPLOIT", "Code or method that abuses a vulnerability.", 2],
      ["SANDBOX", "Isolated environment for safer analysis.", 2],
      ["PAYLOAD", "Action or content delivered after compromise.", 2],
      ["FORENSIC", "Related to digital evidence investigation.", 2],
      ["PRIVILEGE", "Permission level granted to a user or process.", 2],
      ["ZERODAY", "Vulnerability known before a fix is available.", 3],
      ["FORENSICS", "Investigation of digital evidence.", 3],
      ["INCIDENT", "Security event requiring response.", 3],
      ["PATCHING", "Applying updates to reduce risk.", 3],
      ["VULNERABILITY", "Weakness that can be abused.", 3],
      ["THREATMODEL", "Structured view of risks and attack paths.", 3],
      ["RANSOMWARE", "Malware that demands payment to restore access.", 3],
      ["ENCRYPTION", "Transforming data so only authorized parties can read it.", 3],
    ],
  },
  {
    id: "cloud",
    label: "Cloud",
    category: "Technology",
    free: false,
    summary: "Services and scale",
    keywords: ["cloud", "azure", "aws", "gcp", "serverless", "network", "storage", "infrastructure"],
    words: [
      ["REGION", "Geographic area hosting cloud resources.", 1],
      ["SUBNET", "Segment of a virtual network.", 1],
      ["QUEUE", "Service pattern for ordered async work.", 1],
      ["TOPIC", "Publish-subscribe channel in messaging systems.", 1],
      ["STORAGE", "Service for persisting objects, files, or disks.", 1],
      ["FUNCTION", "Serverless unit triggered by events.", 1],
      ["TENANT", "Cloud account boundary for an organization.", 1],
      ["BUCKET", "Object storage container name used by some clouds.", 1],
      ["SERVERLESS", "Cloud model where servers are abstracted away.", 2],
      ["PEERING", "Connection between virtual networks.", 2],
      ["AUTOSCALE", "Automatically changing capacity by demand.", 2],
      ["KEYVAULT", "Managed store for secrets and certificates.", 2],
      ["CDN", "Distributed cache for content near users.", 2],
      ["GATEWAY", "Entry point that routes or protects traffic.", 2],
      ["IDENTITY", "Account or principal used for access control.", 2],
      ["FAILOVER", "Moving service to backup capacity after failure.", 2],
      ["AVAILABILITY", "Measure of service uptime and resilience.", 3],
      ["LOADBALANCER", "Service that distributes traffic across targets.", 3],
      ["ORCHESTRATION", "Coordinating multiple services or resources.", 3],
      ["REPLICATION", "Copying data for resilience or locality.", 3],
      ["OBSERVABILITY", "Signals that help explain cloud system behavior.", 3],
      ["GOVERNANCE", "Policies and controls for cloud usage.", 3],
      ["MULTICLOUD", "Architecture using more than one cloud provider.", 3],
      ["RESILIENCE", "Ability to recover and keep serving under failure.", 3],
    ],
  },
  {
    id: "sports",
    label: "Sports",
    category: "Lifestyle",
    free: false,
    summary: "Games, training, and competition",
    keywords: ["sports", "sport", "soccer", "football", "rugby", "cricket", "basketball", "fitness", "athlete"],
    words: [
      ["GOAL", "Score made by sending a ball into a target area.", 1],
      ["COACH", "Person who trains and guides a team.", 1],
      ["MATCH", "Contest between players or teams.", 1],
      ["SPRINT", "Short race run at high speed.", 1],
      ["RALLY", "Sequence of shots before a point is won.", 1],
      ["LEAGUE", "Organized group of teams competing over a season.", 1],
      ["REFEREE", "Official who enforces rules during play.", 2],
      ["STRIKER", "Attacking player expected to score goals.", 2],
      ["WICKET", "Cricket target made of stumps and bails.", 2],
      ["DRIBBLE", "Move a ball while keeping control.", 2],
      ["TOURNAMENT", "Series of contests leading to a winner.", 2],
      ["TRAINING", "Practice done to improve performance.", 2],
      ["ENDURANCE", "Ability to sustain effort over time.", 3],
      ["FORMATION", "Team shape used during play.", 3],
      ["POSSESSION", "Control of the ball or puck.", 3],
      ["CHAMPIONSHIP", "Title contest or season-winning event.", 3],
      ["QUALIFIER", "Contest used to earn entry to a later round.", 3],
      ["PERFORMANCE", "How well an athlete or team executes.", 3],
    ],
  },
  {
    id: "computers",
    label: "Computers",
    category: "Technology",
    free: false,
    summary: "Hardware, software, and code",
    keywords: ["computers", "computer", "pc", "software", "hardware", "coding", "programming", "developer"],
    words: [
      ["MOUSE", "Pointing device used to control a cursor.", 1],
      ["CACHE", "Fast storage used to speed up access.", 1],
      ["BINARY", "Base-two number system used by computers.", 1],
      ["KERNEL", "Core part of an operating system.", 1],
      ["SCRIPT", "Small program often used for automation.", 1],
      ["BROWSER", "Application used to view web pages.", 1],
      ["COMPILER", "Tool that turns source code into executable form.", 2],
      ["DATABASE", "Structured store for application data.", 2],
      ["PROTOCOL", "Rules for communication between systems.", 2],
      ["VARIABLE", "Named value in a program.", 2],
      ["FIRMWARE", "Software embedded in hardware.", 2],
      ["TERMINAL", "Text interface for running commands.", 2],
      ["ALGORITHM", "Step-by-step method for solving a problem.", 3],
      ["RECURSION", "Function pattern where a task calls itself.", 3],
      ["INTERFACE", "Boundary where systems or people interact.", 3],
      ["VIRTUALIZE", "Run a simulated computer environment.", 3],
      ["ENCRYPTION", "Protecting data by transforming it with a key.", 3],
      ["ARCHITECTURE", "High-level structure of a computer system.", 3],
    ],
  },
  {
    id: "art",
    label: "Art",
    category: "Creative",
    free: false,
    summary: "Visual creation and design",
    keywords: ["art", "drawing", "painting", "design", "creative", "artist", "gallery", "illustration"],
    words: [
      ["CANVAS", "Surface used for painting.", 1],
      ["BRUSH", "Tool used to apply paint.", 1],
      ["SKETCH", "Quick drawing or rough visual plan.", 1],
      ["COLOR", "Visual quality such as red, blue, or green.", 1],
      ["MURAL", "Large artwork painted on a wall.", 1],
      ["FRAME", "Border or structure around artwork.", 1],
      ["PALETTE", "Set of colors used by an artist.", 2],
      ["PORTRAIT", "Artwork showing a person.", 2],
      ["TEXTURE", "Surface feel or visual roughness.", 2],
      ["CONTRAST", "Difference between light, dark, color, or shape.", 2],
      ["GALLERY", "Place where artwork is displayed.", 2],
      ["SHADING", "Use of light and dark to create form.", 2],
      ["PERSPECTIVE", "Technique for showing depth on a flat surface.", 3],
      ["COMPOSITION", "Arrangement of elements in an artwork.", 3],
      ["ABSTRACTION", "Art that does not directly copy reality.", 3],
      ["ILLUSTRATION", "Image made to explain or decorate content.", 3],
      ["TYPOGRAPHY", "Design and arrangement of text.", 3],
      ["AESTHETIC", "Style or sense of visual beauty.", 3],
    ],
  },
  {
    id: "finance",
    label: "Finance",
    category: "Business",
    free: false,
    summary: "Money, markets, and planning",
    keywords: ["finance", "money", "investing", "business", "markets", "budget", "banking", "accounting"],
    words: [
      ["BUDGET", "Plan for income and spending.", 1],
      ["ASSET", "Resource with economic value.", 1],
      ["DEBT", "Money owed to another party.", 1],
      ["EQUITY", "Ownership value after liabilities.", 1],
      ["PROFIT", "Money left after costs.", 1],
      ["INVOICE", "Document requesting payment.", 1],
      ["INTEREST", "Cost of borrowing or return on lending.", 2],
      ["LIQUIDITY", "How easily an asset can become cash.", 2],
      ["PORTFOLIO", "Collection of investments.", 2],
      ["DIVIDEND", "Payment made to shareholders.", 2],
      ["REVENUE", "Income from sales before expenses.", 2],
      ["FORECAST", "Estimate of future financial results.", 2],
      ["CASHFLOW", "Movement of money in and out.", 3],
      ["VALUATION", "Estimate of what something is worth.", 3],
      ["VOLATILITY", "Degree of price movement over time.", 3],
      ["DIVERSIFY", "Spread investments to reduce risk.", 3],
      ["COMPOUNDING", "Growth earned on prior growth.", 3],
      ["AMORTIZATION", "Paying off debt over scheduled periods.", 3],
    ],
  },
  {
    id: "forex",
    label: "Forex Trading",
    category: "Business",
    free: false,
    summary: "Currency markets and trader terms",
    keywords: ["forex", "fx", "trading", "trader", "currency", "pips", "charts", "markets", "finance"],
    words: [
      ["PIP", "Small price movement unit in many currency pairs.", 1],
      ["LOT", "Standardized trade size in forex.", 1],
      ["SPREAD", "Difference between bid and ask price.", 1],
      ["BROKER", "Platform or firm that connects traders to markets.", 1],
      ["CHART", "Visual display of price movement over time.", 1],
      ["TREND", "General direction of market movement.", 1],
      ["CANDLE", "Chart bar showing open, high, low, and close.", 2],
      ["LEVERAGE", "Borrowed exposure that increases trade size.", 2],
      ["MARGIN", "Capital required to open or hold a trade.", 2],
      ["PAIR", "Two currencies quoted against each other.", 2],
      ["STOPLOSS", "Order used to limit loss on a position.", 2],
      ["TAKEPROFIT", "Order used to lock in target gains.", 2],
      ["VOLATILITY", "Degree of price movement in a market.", 3],
      ["DRAWDOWN", "Drop from account peak to a lower value.", 3],
      ["LIQUIDITY", "How easily trades can be executed.", 3],
      ["RESISTANCE", "Price zone where sellers may appear.", 3],
      ["SUPPORT", "Price zone where buyers may appear.", 3],
      ["BACKTEST", "Testing a strategy on historical price data.", 3],
      ["SCALPING", "Fast trading style targeting small moves.", 3],
      ["POSITION", "Open trade held by a trader.", 3],
    ],
  },
  {
    id: "education",
    label: "Education",
    category: "Learning",
    free: false,
    summary: "School, study, and teaching",
    keywords: ["education", "school", "student", "teacher", "learning", "study", "university", "training"],
    words: [
      ["LESSON", "Structured teaching session.", 1],
      ["QUIZ", "Short test of knowledge.", 1],
      ["GRADE", "Score or level of performance.", 1],
      ["CLASS", "Group of students or a course session.", 1],
      ["STUDY", "Activity of learning or reviewing material.", 1],
      ["TUTOR", "Person who gives individual instruction.", 1],
      ["SYLLABUS", "Outline of course topics and requirements.", 2],
      ["LECTURE", "Teaching talk given to learners.", 2],
      ["PROJECT", "Extended task used for learning or assessment.", 2],
      ["DIPLOMA", "Document showing completion of a program.", 2],
      ["CURRICULUM", "Planned set of learning content.", 2],
      ["ASSESSMENT", "Process for measuring learning.", 2],
      ["PEDAGOGY", "Method and practice of teaching.", 3],
      ["LITERACY", "Ability to read and write effectively.", 3],
      ["SCHOLARSHIP", "Funding or award for study.", 3],
      ["RESEARCH", "Systematic investigation to learn new facts.", 3],
      ["ACCREDITATION", "Formal approval of an education program.", 3],
      ["METACOGNITION", "Awareness of one's own thinking and learning.", 3],
    ],
  },
  {
    id: "music",
    label: "Music",
    category: "Creative",
    free: false,
    summary: "Sound, rhythm, and performance",
    keywords: ["music", "song", "singing", "instrument", "piano", "guitar", "band", "audio"],
    words: [
      ["NOTE", "Single musical sound or pitch symbol.", 1],
      ["BEAT", "Basic pulse in music.", 1],
      ["SONG", "Short musical composition with melody.", 1],
      ["CHORD", "Group of notes played together.", 1],
      ["RHYTHM", "Pattern of sounds and silences.", 1],
      ["MELODY", "Memorable sequence of pitches.", 1],
      ["TEMPO", "Speed of a piece of music.", 2],
      ["HARMONY", "Notes combined to support a melody.", 2],
      ["VOCALS", "Sung parts of a track.", 2],
      ["GUITAR", "String instrument often strummed or picked.", 2],
      ["PIANO", "Keyboard instrument with hammers and strings.", 2],
      ["RECORDING", "Captured audio performance.", 2],
      ["ARRANGEMENT", "How musical parts are organized.", 3],
      ["IMPROVISE", "Create music spontaneously while performing.", 3],
      ["SYNCOPATION", "Rhythm that stresses unexpected beats.", 3],
      ["PRODUCTION", "Process of shaping recorded music.", 3],
      ["ORCHESTRA", "Large ensemble with many instrument sections.", 3],
      ["COMPOSITION", "Original piece of music.", 3],
    ],
  },
  {
    id: "gaming",
    label: "Gaming",
    category: "Entertainment",
    free: false,
    summary: "Games, strategy, and play",
    keywords: ["gaming", "game", "games", "esports", "console", "strategy", "rpg", "play"],
    words: [
      ["LEVEL", "Stage or progress area in a game.", 1],
      ["QUEST", "Task or mission for a player.", 1],
      ["SCORE", "Points earned during play.", 1],
      ["AVATAR", "Player's digital character.", 1],
      ["LOOT", "Rewards collected in a game.", 1],
      ["BOSS", "Powerful enemy often found at a level end.", 1],
      ["COMBO", "Sequence of actions chained together.", 2],
      ["COOLDOWN", "Delay before an ability can be reused.", 2],
      ["SANDBOX", "Game style that supports open-ended play.", 2],
      ["TUTORIAL", "Intro sequence that teaches controls.", 2],
      ["MATCHMAKING", "System that pairs players for a game.", 2],
      ["CONTROLLER", "Input device used for console play.", 2],
      ["STRATEGY", "Plan used to win or progress.", 3],
      ["MULTIPLAYER", "Game mode for more than one player.", 3],
      ["ACHIEVEMENT", "Award for completing a game challenge.", 3],
      ["CHECKPOINT", "Saved progress location.", 3],
      ["LEADERBOARD", "Ranking list of top scores or players.", 3],
      ["IMMERSION", "Feeling of being absorbed in a game world.", 3],
    ],
  },
  {
    id: "netflix",
    label: "Netflix Movies & Series",
    category: "Entertainment",
    free: false,
    summary: "Streaming, episodes, and screen stories",
    keywords: ["netflix", "movies", "series", "streaming", "film", "tv", "binge", "cinema", "episodes"],
    words: [
      ["MOVIE", "Feature-length story watched on a screen.", 1],
      ["SERIES", "Story told across multiple episodes.", 1],
      ["EPISODE", "Single part of a series.", 1],
      ["SEASON", "Group of episodes released as a set.", 1],
      ["GENRE", "Category such as comedy, drama, or action.", 1],
      ["STREAM", "Watch video over the internet without downloading first.", 1],
      ["TRAILER", "Short preview used to promote a movie or series.", 2],
      ["SUBTITLE", "Text version of dialogue shown on screen.", 2],
      ["DUBBING", "Replacing original dialogue with another language track.", 2],
      ["BINGE", "Watch many episodes in one sitting.", 2],
      ["CLIFFHANGER", "Ending that leaves the audience waiting for the next part.", 2],
      ["SOUNDTRACK", "Music used in a movie or series.", 2],
      ["DOCUMENTARY", "Non-fiction screen story about real subjects.", 3],
      ["CINEMATIC", "Having the style or quality of film.", 3],
      ["ANTAGONIST", "Character or force opposing the hero.", 3],
      ["PROTAGONIST", "Main character driving the story.", 3],
      ["SCREENPLAY", "Written script for a movie or episode.", 3],
      ["RECOMMENDATION", "Suggested title based on viewing interests.", 3],
      ["SUSPENSE", "Tension created while waiting to see what happens.", 3],
      ["MINISERIES", "Short series with a limited number of episodes.", 3],
    ],
  },
  {
    id: "food",
    label: "Food",
    category: "Lifestyle",
    free: false,
    summary: "Cooking and kitchen skills",
    keywords: ["food", "cooking", "chef", "recipe", "baking", "kitchen", "restaurant", "nutrition"],
    words: [
      ["RECIPE", "Instructions for preparing a dish.", 1],
      ["SPICE", "Flavoring from seeds, bark, roots, or fruit.", 1],
      ["SAUCE", "Liquid or soft topping for food.", 1],
      ["BAKE", "Cook using dry heat in an oven.", 1],
      ["GRILL", "Cook over direct heat.", 1],
      ["FLOUR", "Ground grain used in baking.", 1],
      ["MARINADE", "Seasoned liquid used before cooking.", 2],
      ["SAUTE", "Cook quickly in a small amount of fat.", 2],
      ["SIMMER", "Cook just below boiling.", 2],
      ["PROTEIN", "Nutrient important for body repair and growth.", 2],
      ["DESSERT", "Sweet course often served after a meal.", 2],
      ["GARNISH", "Decoration or finishing touch on a dish.", 2],
      ["FERMENT", "Use microbes to transform food flavor or texture.", 3],
      ["EMULSION", "Mixture of liquids that usually do not combine.", 3],
      ["PASTEURIZE", "Heat food or drink to reduce harmful microbes.", 3],
      ["MISEENPLACE", "Prepared setup of ingredients before cooking.", 3],
      ["CARAMELIZE", "Brown sugars by heating for deeper flavor.", 3],
      ["NUTRITION", "Study of food and how it supports the body.", 3],
    ],
  },
  {
    id: "space",
    label: "Space",
    category: "Science",
    free: false,
    summary: "Astronomy and exploration",
    keywords: ["space", "astronomy", "planet", "stars", "galaxy", "nasa", "rocket", "science"],
    words: [
      ["STAR", "Luminous ball of hot plasma.", 1],
      ["ORBIT", "Path of an object around another body.", 1],
      ["COMET", "Icy body that can form a tail near the sun.", 1],
      ["MOON", "Natural satellite of a planet.", 1],
      ["ROCKET", "Vehicle propelled by expelled gas.", 1],
      ["PLANET", "Large body orbiting a star.", 1],
      ["ASTEROID", "Small rocky body orbiting the sun.", 2],
      ["GALAXY", "Huge system of stars, gas, and dust.", 2],
      ["NEBULA", "Cloud of gas and dust in space.", 2],
      ["ECLIPSE", "Event where one body blocks light from another.", 2],
      ["TELESCOPE", "Instrument that collects distant light.", 2],
      ["GRAVITY", "Force that attracts masses toward each other.", 2],
      ["SUPERNOVA", "Powerful explosion of a star.", 3],
      ["BLACKHOLE", "Region where gravity prevents light escaping.", 3],
      ["EXOPLANET", "Planet outside our solar system.", 3],
      ["CONSTELLATION", "Recognized pattern of stars.", 3],
      ["MICROGRAVITY", "Condition of very weak apparent gravity.", 3],
      ["ATMOSPHERE", "Layer of gases around a planet.", 3],
    ],
  },
  {
    id: "business",
    label: "Business",
    category: "Professional",
    free: false,
    summary: "Startups, strategy, and teams",
    keywords: ["business", "startup", "company", "marketing", "sales", "entrepreneur", "strategy", "management"],
    words: [
      ["BRAND", "Identity and reputation of a product or company.", 1],
      ["SALES", "Activity of closing customer purchases.", 1],
      ["LEAD", "Potential customer or opportunity.", 1],
      ["MARGIN", "Difference between revenue and cost.", 1],
      ["PITCH", "Short persuasive presentation.", 1],
      ["MARKET", "Group of buyers for a product or service.", 1],
      ["STRATEGY", "Plan for reaching business goals.", 2],
      ["CUSTOMER", "Person or organization that buys from a business.", 2],
      ["PRODUCT", "Thing or service offered to a market.", 2],
      ["REVENUE", "Income earned from business activity.", 2],
      ["ROADMAP", "Planned sequence of product or business work.", 2],
      ["CAMPAIGN", "Coordinated marketing effort.", 2],
      ["OPERATIONS", "Processes that keep a business running.", 3],
      ["POSITIONING", "How a product is framed in a market.", 3],
      ["NEGOTIATION", "Discussion to reach an agreement.", 3],
      ["PARTNERSHIP", "Business relationship for shared value.", 3],
      ["ACQUISITION", "Process of gaining customers or buying a company.", 3],
      ["RETENTION", "Keeping customers over time.", 3],
    ],
  },
];

const DIFFICULTIES = {
  easy: { gridSize: 10, words: 7, maxLevel: 1, attempts: 80 },
  medium: { gridSize: 12, words: 10, maxLevel: 2, attempts: 110 },
  hard: { gridSize: 15, words: 14, maxLevel: 3, attempts: 150 },
};

const state = {
  selectedNiche: "devops",
  difficulty: "easy",
  puzzle: null,
  activePlacementId: null,
  recommendationQuery: "",
  startedAt: Date.now(),
  timerId: null,
  hintsUsed: 0,
  checks: 0,
  solvedPlacementIds: new Set(),
  rewardMilestones: new Set(),
  rewardBurstTimer: null,
  fullAccess: localStorage.getItem("nicheCrossword.fullAccess") === "true",
};

const dom = {
  interestInput: document.querySelector("#interestInput"),
  recommendButton: document.querySelector("#recommendButton"),
  recommendationText: document.querySelector("#recommendationText"),
  recommendationChips: document.querySelector("#recommendationChips"),
  nicheSelect: document.querySelector("#nicheSelect"),
  nicheMeta: document.querySelector("#nicheMeta"),
  grid: document.querySelector("#crosswordGrid"),
  clueList: document.querySelector("#clueList"),
  cluePanel: document.querySelector("#cluePanel"),
  currentNiche: document.querySelector("#currentNiche"),
  progressLabel: document.querySelector("#progressLabel"),
  timerLabel: document.querySelector("#timerLabel"),
  scoreLabel: document.querySelector("#scoreLabel"),
  feedback: document.querySelector("#feedback"),
  showCluesToggle: document.querySelector("#showCluesToggle"),
  timerToggle: document.querySelector("#timerToggle"),
  upgradeDialog: document.querySelector("#upgradeDialog"),
  unlockButton: document.querySelector("#unlockButton"),
  testUnlockButton: document.querySelector("#testUnlockButton"),
  installButton: document.querySelector("#installButton"),
  paidPackList: document.querySelector("#paidPackList"),
};

let deferredInstallPrompt = null;

function isUnlocked(pack) {
  return pack.free || state.fullAccess;
}

function getCurrentPack() {
  return NICHE_PACKS.find((pack) => pack.id === state.selectedNiche) ?? NICHE_PACKS[0];
}

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function normalizeAnswer(answer) {
  return answer.replace(/[^A-Z]/gi, "").toUpperCase();
}

function makeWordPool(pack, difficulty) {
  const settings = DIFFICULTIES[difficulty];
  const eligible = pack.words
    .map(([answer, clue, level]) => ({
      answer: normalizeAnswer(answer),
      clue,
      level,
    }))
    .filter((word) => word.answer.length > 1 && word.level <= settings.maxLevel);

  const fallback = pack.words.map(([answer, clue, level]) => ({
    answer: normalizeAnswer(answer),
    clue,
    level,
  }));

  return shuffle(eligible.length >= settings.words ? eligible : fallback)
    .filter((word) => word.answer.length <= settings.gridSize)
    .slice(0, Math.max(settings.words + 4, settings.words));
}

function createEmptyGrid(size) {
  return Array.from({ length: size }, () =>
    Array.from({ length: size }, () => ({ letter: "", across: false, down: false })),
  );
}

function getCell(grid, row, col) {
  return grid[row]?.[col] ?? null;
}

function canPlace(grid, word, row, col, direction) {
  const size = grid.length;
  const rowStep = direction === "down" ? 1 : 0;
  const colStep = direction === "across" ? 1 : 0;
  const endRow = row + rowStep * (word.length - 1);
  const endCol = col + colStep * (word.length - 1);

  if (row < 0 || col < 0 || endRow >= size || endCol >= size) {
    return { ok: false, crosses: 0 };
  }

  const before = getCell(grid, row - rowStep, col - colStep);
  const after = getCell(grid, endRow + rowStep, endCol + colStep);
  if (before?.letter || after?.letter) {
    return { ok: false, crosses: 0 };
  }

  let crosses = 0;

  for (let index = 0; index < word.length; index += 1) {
    const currentRow = row + rowStep * index;
    const currentCol = col + colStep * index;
    const cell = grid[currentRow][currentCol];
    const letter = word[index];

    if (cell.letter && cell.letter !== letter) {
      return { ok: false, crosses: 0 };
    }

    if (cell.letter && cell[direction]) {
      return { ok: false, crosses: 0 };
    }

    if (cell.letter === letter) {
      crosses += 1;
      continue;
    }

    if (direction === "across") {
      if (getCell(grid, currentRow - 1, currentCol)?.letter || getCell(grid, currentRow + 1, currentCol)?.letter) {
        return { ok: false, crosses: 0 };
      }
    } else if (getCell(grid, currentRow, currentCol - 1)?.letter || getCell(grid, currentRow, currentCol + 1)?.letter) {
      return { ok: false, crosses: 0 };
    }
  }

  return { ok: true, crosses };
}

function placeWord(grid, word, clue, row, col, direction) {
  const rowStep = direction === "down" ? 1 : 0;
  const colStep = direction === "across" ? 1 : 0;
  const cells = [];

  for (let index = 0; index < word.length; index += 1) {
    const currentRow = row + rowStep * index;
    const currentCol = col + colStep * index;
    const cell = grid[currentRow][currentCol];
    cell.letter = word[index];
    cell[direction] = true;
    cells.push([currentRow, currentCol]);
  }

  return {
    id: `${direction}-${row}-${col}-${word}`,
    answer: word,
    clue,
    row,
    col,
    direction,
    cells,
    number: 0,
  };
}

function findCandidates(grid, word) {
  const candidates = [];
  const size = grid.length;

  for (let row = 0; row < size; row += 1) {
    for (let col = 0; col < size; col += 1) {
      const cell = grid[row][col];
      if (!cell.letter) {
        continue;
      }

      for (let index = 0; index < word.length; index += 1) {
        if (word[index] !== cell.letter) {
          continue;
        }

        for (const direction of ["across", "down"]) {
          const candidateRow = direction === "down" ? row - index : row;
          const candidateCol = direction === "across" ? col - index : col;
          const result = canPlace(grid, word, candidateRow, candidateCol, direction);
          if (result.ok && result.crosses > 0) {
            const center = (size - 1) / 2;
            const distance = Math.abs(candidateRow - center) + Math.abs(candidateCol - center);
            candidates.push({
              row: candidateRow,
              col: candidateCol,
              direction,
              score: result.crosses * 30 - distance + Math.random(),
            });
          }
        }
      }
    }
  }

  return candidates.sort((left, right) => right.score - left.score);
}

function seedFirstWord(grid, word, clue) {
  const size = grid.length;
  const direction = Math.random() > 0.5 ? "across" : "down";
  const row = direction === "across" ? Math.floor(size / 2) : Math.max(0, Math.floor((size - word.length) / 2));
  const col = direction === "down" ? Math.floor(size / 2) : Math.max(0, Math.floor((size - word.length) / 2));
  return placeWord(grid, word, clue, row, col, direction);
}

function assignNumbers(placements) {
  const starts = new Map();
  placements
    .slice()
    .sort((left, right) => left.row - right.row || left.col - right.col)
    .forEach((placement) => {
      const key = `${placement.row},${placement.col}`;
      if (!starts.has(key)) {
        starts.set(key, starts.size + 1);
      }
      placement.number = starts.get(key);
    });
}

function trimPuzzle(grid, placements) {
  const occupiedRows = [];
  const occupiedCols = [];

  grid.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      if (cell.letter) {
        occupiedRows.push(rowIndex);
        occupiedCols.push(colIndex);
      }
    });
  });

  const minRow = Math.max(0, Math.min(...occupiedRows) - 1);
  const maxRow = Math.min(grid.length - 1, Math.max(...occupiedRows) + 1);
  const minCol = Math.max(0, Math.min(...occupiedCols) - 1);
  const maxCol = Math.min(grid.length - 1, Math.max(...occupiedCols) + 1);
  const trimmed = [];

  for (let row = minRow; row <= maxRow; row += 1) {
    const nextRow = [];
    for (let col = minCol; col <= maxCol; col += 1) {
      nextRow.push({ ...grid[row][col] });
    }
    trimmed.push(nextRow);
  }

  placements.forEach((placement) => {
    placement.row -= minRow;
    placement.col -= minCol;
    placement.cells = placement.cells.map(([row, col]) => [row - minRow, col - minCol]);
  });

  return trimmed;
}

function generatePuzzle(pack, difficulty) {
  const settings = DIFFICULTIES[difficulty];
  const pool = makeWordPool(pack, difficulty);
  let bestPuzzle = null;

  for (let attempt = 0; attempt < settings.attempts; attempt += 1) {
    const grid = createEmptyGrid(settings.gridSize);
    const words = shuffle(pool);
    const placements = [];
    const seed = words.shift();

    if (!seed) {
      break;
    }

    placements.push(seedFirstWord(grid, seed.answer, seed.clue));

    for (const word of words) {
      if (placements.length >= settings.words) {
        break;
      }

      const candidates = findCandidates(grid, word.answer);
      if (candidates.length === 0) {
        continue;
      }

      const chosen = candidates[0];
      placements.push(placeWord(grid, word.answer, word.clue, chosen.row, chosen.col, chosen.direction));
    }

    if (!bestPuzzle || placements.length > bestPuzzle.placements.length) {
      const snapshot = grid.map((row) => row.map((cell) => ({ ...cell })));
      const placementSnapshot = placements.map((placement) => ({
        ...placement,
        cells: placement.cells.map((cell) => [...cell]),
      }));
      bestPuzzle = { grid: snapshot, placements: placementSnapshot };
    }

    if (bestPuzzle.placements.length >= settings.words) {
      break;
    }
  }

  assignNumbers(bestPuzzle.placements);
  bestPuzzle.grid = trimPuzzle(bestPuzzle.grid, bestPuzzle.placements);
  bestPuzzle.size = bestPuzzle.grid.length;
  return bestPuzzle;
}

function getPackSearchText(pack) {
  const wordText = pack.words.flatMap(([answer, clue]) => [answer, clue]).join(" ");
  return [pack.label, pack.category, pack.summary, ...(pack.keywords ?? []), wordText].join(" ").toLowerCase();
}

function getRecommendations(query) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) {
    return [];
  }

  const terms = normalized
    .split(/[^a-z0-9]+/i)
    .map((term) => term.trim())
    .filter(Boolean);

  return NICHE_PACKS.map((pack) => {
    const searchText = getPackSearchText(pack);
    const label = pack.label.toLowerCase();
    const category = pack.category.toLowerCase();
    const keywords = pack.keywords ?? [];
    let score = 0;

    if (label === normalized || keywords.includes(normalized)) {
      score += 80;
    }
    if (label.includes(normalized) || category.includes(normalized) || pack.summary.toLowerCase().includes(normalized)) {
      score += 35;
    }

    for (const term of terms) {
      if (label.includes(term)) {
        score += 35;
      }
      if (category.includes(term)) {
        score += 18;
      }
      if (keywords.some((keyword) => keyword.includes(term) || term.includes(keyword))) {
        score += 30;
      }
      if (searchText.includes(term)) {
        score += 8;
      }
    }

    return { pack, score };
  })
    .filter((result) => result.score > 0)
    .sort((left, right) => right.score - left.score || left.pack.label.localeCompare(right.pack.label))
    .slice(0, 4);
}

function renderNiches() {
  dom.nicheSelect.innerHTML = "";

  const grouped = NICHE_PACKS.reduce((groups, pack) => {
    if (!groups.has(pack.category)) {
      groups.set(pack.category, []);
    }
    groups.get(pack.category).push(pack);
    return groups;
  }, new Map());

  [...grouped.keys()].sort().forEach((category) => {
    const group = document.createElement("optgroup");
    group.label = category;
    grouped
      .get(category)
      .slice()
      .sort((left, right) => left.label.localeCompare(right.label))
      .forEach((pack) => {
        const option = document.createElement("option");
        option.value = pack.id;
        option.textContent = `${pack.label} - ${pack.free ? "Free" : state.fullAccess ? "Unlocked" : "Paid"}`;
        option.selected = pack.id === state.selectedNiche;
        group.append(option);
      });
    dom.nicheSelect.append(group);
  });

  renderNicheMeta();
  renderRecommendations(state.recommendationQuery);
  renderPaidPacks();
}

function renderNicheMeta() {
  const pack = getCurrentPack();
  const access = pack.free ? "Free pack" : state.fullAccess ? "Unlocked pack" : "Paid pack";
  dom.nicheMeta.innerHTML = `
    <span>${pack.category}</span>
    <strong>${pack.label}</strong>
    <small>${access} / ${pack.words.length} terms / ${pack.summary}</small>
  `;
}

function renderPaidPacks() {
  dom.paidPackList.innerHTML = "";
  NICHE_PACKS.filter((pack) => !pack.free).forEach((pack) => {
    const item = document.createElement("li");
    item.textContent = `${pack.label} - ${pack.summary}`;
    dom.paidPackList.append(item);
  });
}

function renderRecommendations(query) {
  dom.recommendationChips.innerHTML = "";
  const matches = getRecommendations(query);

  if (!query.trim()) {
    dom.recommendationText.textContent = "Type an interest to get niche recommendations.";
    return;
  }

  if (matches.length === 0) {
    dom.recommendationText.textContent = "No exact pack yet. Try a broader word like technology, creative, sport, health, or business.";
    return;
  }

  dom.recommendationText.textContent = `Recommended: ${matches.map(({ pack }) => pack.label).join(", ")}`;

  matches.forEach(({ pack }) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "recommendation-chip";
    button.dataset.niche = pack.id;
    button.innerHTML = `
      <span>${pack.label}</span>
      <small>${pack.free ? "Free" : state.fullAccess ? "Open" : "Paid"}</small>
    `;
    button.addEventListener("click", () => selectPack(pack.id));
    dom.recommendationChips.append(button);
  });
}

function selectPack(packId) {
  const pack = NICHE_PACKS.find((item) => item.id === packId);
  if (!pack) {
    return;
  }

  if (!isUnlocked(pack)) {
    openUpgradeDialog();
    dom.nicheSelect.value = state.selectedNiche;
    return;
  }

  state.selectedNiche = pack.id;
  startNewPuzzle();
}

function applyBestRecommendation() {
  const query = dom.interestInput.value.trim();
  state.recommendationQuery = query;
  renderRecommendations(query);
  const [best] = getRecommendations(query);
  if (best) {
    selectPack(best.pack.id);
  }
}

function renderGrid() {
  const { grid, placements } = state.puzzle;
  const starts = new Map();
  placements.forEach((placement) => {
    starts.set(`${placement.row},${placement.col}`, placement.number);
  });

  dom.grid.innerHTML = "";
  dom.grid.style.setProperty("--grid-rows", String(grid.length));
  dom.grid.style.setProperty("--grid-cols", String(grid[0]?.length ?? grid.length));

  grid.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      const key = `${rowIndex},${colIndex}`;
      if (!cell.letter) {
        const block = document.createElement("div");
        block.className = "block-cell";
        block.setAttribute("aria-hidden", "true");
        dom.grid.append(block);
        return;
      }

      const wrapper = document.createElement("div");
      wrapper.className = "cell";
      wrapper.dataset.row = String(rowIndex);
      wrapper.dataset.col = String(colIndex);

      if (starts.has(key)) {
        const number = document.createElement("span");
        number.className = "cell-number";
        number.textContent = starts.get(key);
        wrapper.append(number);
      }

      const input = document.createElement("input");
      input.className = "cell-input";
      input.maxLength = 1;
      input.autocomplete = "off";
      input.inputMode = "text";
      input.dataset.answer = cell.letter;
      input.dataset.row = String(rowIndex);
      input.dataset.col = String(colIndex);
      input.setAttribute("aria-label", `Row ${rowIndex + 1}, column ${colIndex + 1}`);
      input.addEventListener("input", handleCellInput);
      input.addEventListener("keydown", handleCellKeydown);
      input.addEventListener("focus", () => setActivePlacementFromCell(rowIndex, colIndex));
      wrapper.append(input);
      dom.grid.append(wrapper);
    });
  });
}

function renderClues() {
  dom.cluePanel.hidden = !dom.showCluesToggle.checked;
  dom.clueList.innerHTML = "";
  if (!dom.showCluesToggle.checked) {
    return;
  }

  const grouped = {
    across: state.puzzle.placements.filter((placement) => placement.direction === "across"),
    down: state.puzzle.placements.filter((placement) => placement.direction === "down"),
  };

  for (const direction of ["across", "down"]) {
    const section = document.createElement("section");
    section.className = "clue-section";
    const title = document.createElement("h3");
    title.textContent = direction === "across" ? "Across" : "Down";
    const stack = document.createElement("div");
    stack.className = "clue-stack";
    section.append(title, stack);

    grouped[direction]
      .slice()
      .sort((left, right) => left.number - right.number)
      .forEach((placement) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "clue-item";
        button.dataset.placementId = placement.id;
        button.innerHTML = `
          <span class="clue-number">${placement.number}</span>
          <span class="clue-text">${placement.clue}</span>
          <span class="clue-length">${placement.answer.length}</span>
        `;
        button.addEventListener("click", () => focusPlacement(placement.id));
        stack.append(button);
      });

    dom.clueList.append(section);
  }
}

function updateStats() {
  const inputs = [...dom.grid.querySelectorAll(".cell-input")];
  const filled = inputs.filter((input) => input.value.trim()).length;
  const correct = inputs.filter((input) => input.value.toUpperCase() === input.dataset.answer).length;
  const progress = inputs.length ? Math.round((filled / inputs.length) * 100) : 0;
  const accuracy = inputs.length ? correct / inputs.length : 0;
  const score = Math.max(0, Math.round(accuracy * 1000 - state.hintsUsed * 35 - state.checks * 10));

  dom.progressLabel.textContent = `${progress}%`;
  dom.scoreLabel.textContent = String(score);
}

function getInputAt(row, col) {
  return dom.grid.querySelector(`.cell-input[data-row="${row}"][data-col="${col}"]`);
}

function isPlacementSolved(placement) {
  return placement.cells.every(([row, col]) => {
    const input = getInputAt(row, col);
    return input?.value.toUpperCase() === input?.dataset.answer;
  });
}

function evaluateWordRewards() {
  if (!state.puzzle) {
    return;
  }

  const solved = state.puzzle.placements.filter(isPlacementSolved);
  state.solvedPlacementIds = new Set(solved.map((placement) => placement.id));
  const solvedCount = solved.length;
  const milestone = Math.floor(solvedCount / 4);

  if (milestone < 1 || state.rewardMilestones.has(milestone)) {
    return;
  }

  state.rewardMilestones.add(milestone);
  grantRewardLetters(milestone, solvedCount);
}

function getRewardLetterCount() {
  if (state.difficulty === "easy") {
    return 3;
  }
  if (state.difficulty === "medium") {
    return 2;
  }
  return 1;
}

function grantRewardLetters(milestone, solvedCount) {
  const candidates = [...dom.grid.querySelectorAll(".cell-input")].filter(
    (input) => !input.value && !input.readOnly,
  );

  if (candidates.length === 0) {
    showRewardBurst("Sugar rush", "No empty cells left for bonus letters.");
    return;
  }

  const rewardCount = Math.min(getRewardLetterCount(), candidates.length);
  shuffle(candidates)
    .slice(0, rewardCount)
    .forEach((input) => {
      const cell = input.closest(".cell");
      input.value = input.dataset.answer;
      input.readOnly = true;
      input.dataset.reward = "true";
      cell.classList.remove("is-wrong");
      cell.classList.add("is-right", "is-bonus");
    });

  dom.feedback.textContent = `${solvedCount} words solved. Candy clue unlocked: ${rewardCount} bonus letter${rewardCount === 1 ? "" : "s"}!`;
  updateStats();
  showRewardBurst("Candy clue unlocked", `Reward ${milestone}: ${rewardCount} letters dropped in.`);
}

function showRewardBurst(title, subtitle) {
  const existing = document.querySelector(".reward-burst");
  existing?.remove();
  window.clearTimeout(state.rewardBurstTimer);

  const burst = document.createElement("div");
  burst.className = "reward-burst";
  burst.setAttribute("role", "status");
  burst.innerHTML = `
    <div class="reward-copy">
      <strong>${title}</strong>
      <span>${subtitle}</span>
    </div>
    <span class="candy-pop one"></span>
    <span class="candy-pop two"></span>
    <span class="candy-pop three"></span>
    <span class="candy-pop four"></span>
    <span class="candy-pop five"></span>
    <span class="candy-pop six"></span>
  `;

  document.querySelector(".puzzle-stage").append(burst);
  dom.grid.classList.add("is-rewarding");
  state.rewardBurstTimer = window.setTimeout(() => {
    burst.remove();
    dom.grid.classList.remove("is-rewarding");
  }, 2200);
}

function tickTimer() {
  if (!dom.timerToggle.checked) {
    dom.timerLabel.textContent = "--:--";
    return;
  }

  const elapsed = Math.floor((Date.now() - state.startedAt) / 1000);
  const minutes = String(Math.floor(elapsed / 60)).padStart(2, "0");
  const seconds = String(elapsed % 60).padStart(2, "0");
  dom.timerLabel.textContent = `${minutes}:${seconds}`;
}

function startTimer() {
  clearInterval(state.timerId);
  state.startedAt = Date.now();
  tickTimer();
  state.timerId = setInterval(tickTimer, 1000);
}

function startNewPuzzle() {
  const pack = getCurrentPack();
  state.puzzle = generatePuzzle(pack, state.difficulty);
  state.activePlacementId = null;
  state.hintsUsed = 0;
  state.checks = 0;
  state.solvedPlacementIds = new Set();
  state.rewardMilestones = new Set();
  window.clearTimeout(state.rewardBurstTimer);
  document.querySelector(".reward-burst")?.remove();
  dom.currentNiche.textContent = pack.label;
  dom.feedback.textContent = `${state.puzzle.placements.length} words generated.`;
  renderNiches();
  renderGrid();
  renderClues();
  updateStats();
  startTimer();
}

function handleCellInput(event) {
  const input = event.currentTarget;
  const cell = input.closest(".cell");
  input.value = input.value.replace(/[^a-z]/gi, "").toUpperCase().slice(0, 1);
  cell.classList.remove("is-right", "is-wrong");

  if (input.value && input.value.toUpperCase() === input.dataset.answer) {
    cell.classList.add("is-right");
  } else if (input.value) {
    cell.classList.add("is-wrong");
  }

  updateStats();
  evaluateWordRewards();

  if (input.value) {
    moveFocus(input, 1);
  }
}

function handleCellKeydown(event) {
  const input = event.currentTarget;
  if (event.key === "Backspace" && !input.value) {
    event.preventDefault();
    moveFocus(input, -1);
  }
  if (event.key === "ArrowRight") {
    event.preventDefault();
    focusCell(Number(input.dataset.row), Number(input.dataset.col) + 1);
  }
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    focusCell(Number(input.dataset.row), Number(input.dataset.col) - 1);
  }
  if (event.key === "ArrowDown") {
    event.preventDefault();
    focusCell(Number(input.dataset.row) + 1, Number(input.dataset.col));
  }
  if (event.key === "ArrowUp") {
    event.preventDefault();
    focusCell(Number(input.dataset.row) - 1, Number(input.dataset.col));
  }
}

function moveFocus(input, delta) {
  const placement = getActivePlacementForInput(input);
  if (!placement) {
    return;
  }

  const index = placement.cells.findIndex(
    ([row, col]) => row === Number(input.dataset.row) && col === Number(input.dataset.col),
  );
  const next = placement.cells[index + delta];
  if (next) {
    focusCell(next[0], next[1]);
  }
}

function focusCell(row, col) {
  const target = dom.grid.querySelector(`.cell-input[data-row="${row}"][data-col="${col}"]`);
  target?.focus();
}

function getPlacementsForCell(row, col) {
  return state.puzzle.placements.filter((placement) =>
    placement.cells.some(([cellRow, cellCol]) => cellRow === row && cellCol === col),
  );
}

function setActivePlacementFromCell(row, col) {
  const placements = getPlacementsForCell(row, col);
  const current = placements.find((placement) => placement.id === state.activePlacementId);
  const next = current ?? placements[0] ?? null;
  state.activePlacementId = next?.id ?? null;
  paintActivePlacement();
}

function getActivePlacementForInput(input) {
  const row = Number(input.dataset.row);
  const col = Number(input.dataset.col);
  const placements = getPlacementsForCell(row, col);
  return placements.find((placement) => placement.id === state.activePlacementId) ?? placements[0] ?? null;
}

function focusPlacement(placementId) {
  const placement = state.puzzle.placements.find((item) => item.id === placementId);
  if (!placement) {
    return;
  }

  state.activePlacementId = placement.id;
  paintActivePlacement();
  const nextEmpty = placement.cells.find(([row, col]) => {
    const input = dom.grid.querySelector(`.cell-input[data-row="${row}"][data-col="${col}"]`);
    return input && !input.value;
  });
  const [row, col] = nextEmpty ?? placement.cells[0];
  focusCell(row, col);
}

function paintActivePlacement() {
  dom.grid.querySelectorAll(".cell").forEach((cell) => cell.classList.remove("is-highlighted"));
  dom.clueList.querySelectorAll(".clue-item").forEach((item) => item.classList.remove("is-active"));

  const placement = state.puzzle.placements.find((item) => item.id === state.activePlacementId);
  if (!placement) {
    return;
  }

  placement.cells.forEach(([row, col]) => {
    dom.grid.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`)?.classList.add("is-highlighted");
  });
  dom.clueList.querySelector(`[data-placement-id="${placement.id}"]`)?.classList.add("is-active");
}

function checkPuzzle() {
  state.checks += 1;
  const inputs = [...dom.grid.querySelectorAll(".cell-input")];
  let wrong = 0;
  let empty = 0;

  inputs.forEach((input) => {
    const cell = input.closest(".cell");
    cell.classList.remove("is-right", "is-wrong");
    if (!input.value) {
      empty += 1;
      return;
    }
    if (input.value.toUpperCase() === input.dataset.answer) {
      cell.classList.add("is-right");
    } else {
      wrong += 1;
      cell.classList.add("is-wrong");
    }
  });

  if (wrong === 0 && empty === 0) {
    dom.feedback.textContent = "Complete. Puzzle solved.";
    clearInterval(state.timerId);
  } else if (wrong === 0) {
    dom.feedback.textContent = `${empty} cells left.`;
  } else {
    dom.feedback.textContent = `${wrong} cells need review.`;
  }

  updateStats();
  evaluateWordRewards();
}

function revealPuzzle() {
  dom.grid.querySelectorAll(".cell-input").forEach((input) => {
    const cell = input.closest(".cell");
    input.value = input.dataset.answer;
    cell.classList.remove("is-wrong");
    cell.classList.add("is-right");
  });
  dom.feedback.textContent = "Solution revealed.";
  clearInterval(state.timerId);
  updateStats();
}

function revealHint() {
  const candidates = [...dom.grid.querySelectorAll(".cell-input")].filter(
    (input) => input.value.toUpperCase() !== input.dataset.answer,
  );

  if (candidates.length === 0) {
    dom.feedback.textContent = "No hint needed.";
    return;
  }

  const input = candidates[Math.floor(Math.random() * candidates.length)];
  const cell = input.closest(".cell");
  input.value = input.dataset.answer;
  cell.classList.remove("is-wrong");
  cell.classList.add("is-right");
  state.hintsUsed += 1;
  dom.feedback.textContent = "One cell revealed.";
  updateStats();
}

function resetEntries() {
  dom.grid.querySelectorAll(".cell-input").forEach((input) => {
    input.value = "";
    input.readOnly = false;
    delete input.dataset.reward;
    input.closest(".cell").classList.remove("is-right", "is-wrong", "is-bonus");
  });
  state.hintsUsed = 0;
  state.checks = 0;
  state.solvedPlacementIds = new Set();
  state.rewardMilestones = new Set();
  window.clearTimeout(state.rewardBurstTimer);
  document.querySelector(".reward-burst")?.remove();
  dom.grid.classList.remove("is-rewarding");
  dom.feedback.textContent = "Grid reset.";
  updateStats();
  startTimer();
}

function openUpgradeDialog() {
  if (typeof dom.upgradeDialog.showModal === "function") {
    dom.upgradeDialog.showModal();
  } else {
    window.alert("Paid niche packs are locked in this prototype.");
  }
}

function bindEvents() {
  document.querySelectorAll("[data-difficulty]").forEach((button) => {
    button.addEventListener("click", () => {
      state.difficulty = button.dataset.difficulty;
      document.querySelectorAll("[data-difficulty]").forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      startNewPuzzle();
    });
  });

  document.querySelector("#newPuzzleButton").addEventListener("click", startNewPuzzle);
  document.querySelector("#checkButton").addEventListener("click", checkPuzzle);
  document.querySelector("#hintButton").addEventListener("click", revealHint);
  document.querySelector("#resetButton").addEventListener("click", resetEntries);
  document.querySelector("#revealButton").addEventListener("click", revealPuzzle);
  dom.nicheSelect.addEventListener("change", () => selectPack(dom.nicheSelect.value));
  dom.interestInput.addEventListener("input", () => {
    state.recommendationQuery = dom.interestInput.value;
    renderRecommendations(state.recommendationQuery);
  });
  dom.recommendButton.addEventListener("click", applyBestRecommendation);
  dom.showCluesToggle.addEventListener("change", renderClues);
  dom.timerToggle.addEventListener("change", tickTimer);
  dom.unlockButton.addEventListener("click", openUpgradeDialog);
  dom.testUnlockButton.addEventListener("click", () => {
    state.fullAccess = true;
    localStorage.setItem("nicheCrossword.fullAccess", "true");
    dom.upgradeDialog.close();
    renderNiches();
    dom.nicheSelect.value = state.selectedNiche;
    dom.feedback.textContent = "Paid packs unlocked for this device.";
  });

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    dom.installButton.hidden = false;
  });

  dom.installButton.addEventListener("click", async () => {
    if (!deferredInstallPrompt) {
      return;
    }
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    dom.installButton.hidden = true;
  });
}

async function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    try {
      await navigator.serviceWorker.register("./service-worker.js");
    } catch (error) {
      console.warn("Service worker registration failed", error);
    }
  }
}

bindEvents();
renderNiches();
startNewPuzzle();
registerServiceWorker();
