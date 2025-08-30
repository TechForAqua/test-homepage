export const heroSectionContent = {
  badge: {
    text: "v1.0 Now Available",
    link: "/changelog",
  },
  headline: "From Paper to Code in Minutes, Not Months",
  subheadline:
    "LeCode-R is an AI-powered tool that automatically sets up and runs the codebase from any research paper, eliminating the pain of environment setup and dependency hell. Focus on innovation, not implementation.",
  cta: {
    primary: {
      text: "Download LeCode-R",
      link: "#download",
    },
    secondary: {
      text: "View on GitHub",
      link: "https://github.com/example/lecode-r",
    },
  },
  terminalAnimation: {
    // A more relevant terminal animation sequence
    sequence: [
      { type: "command", text: "$ lecode-r --url https://arxiv.org/abs/2305.12345" },
      { type: "output", text: "Analyzing 'Vision Transformers for Anomaly Detection'..." },
      { type: "output", text: "✓ Found public GitHub repository: github.com/user/vision-transformer" },
      { type: "output", text: "✓ Detected environment: Python 3.9, PyTorch 1.12, CUDA 11.3" },
      { type: "command", text: "Creating secure sandbox environment..." },
      { type: "output", text: "✓ Sandbox created at /tmp/lecode-r/sandbox-xyz" },
      { type: "command", text: "Installing dependencies from requirements.txt..." },
      { type: "output", text: "✓ Successfully installed 47 packages." },
      { type: "command", text: "Running training script: python train.py --epochs 1" },
      { type: "output", text: "Epoch 1/1, Loss: 0.1234, Accuracy: 98.7%" },
      { type: "output", text: "✅ Environment ready. Explore the code and results." },
    ],
  },
};

export const downloadSectionContent = {
  headline: "Get Started with LeCode-R",
  subheadline:
    "Download the tool for your operating system and start reproducing research in minutes. Free and open-source.",
  downloads: [
    { os: "macOS (Apple Silicon)", link: "#", icon: "apple" },
    { os: "macOS (Intel)", link: "#", icon: "apple" },
    { os: "Linux", link: "#", icon: "linux" },
    { os: "Windows", link: "#", icon: "windows" },
  ],
};

export const faqContent = [
  {
    question: "How does LeCode-R handle private repositories or code without a `requirements.txt`?",
    answer: "For private repos, you can provide a GitHub access token. If a requirements file is missing, LeCode-R's AI agent analyzes import statements and common dependencies for the framework (like PyTorch or TensorFlow) to create a probable dependency list, which you can then review and modify.",
  },
  {
    question: "What are the system requirements to run LeCode-R?",
    answer: "LeCode-R requires Docker to be installed on your system to create isolated and secure sandbox environments. It works on macOS, Linux, and Windows (via WSL2). We recommend at least 8GB of RAM for optimal performance.",
  },
  {
    question: "Is the execution environment secure?",
    answer: "Absolutely. All code is executed inside a containerized sandbox using Docker, with no access to your host file system by default. This prevents any unintended side effects or security risks.",
  },
  {
    question: "Can I use my own GPU with LeCode-R?",
    answer: "Yes. LeCode-R automatically detects and forwards NVIDIA GPUs to the sandbox environment if you have the NVIDIA Container Toolkit installed, allowing you to run GPU-accelerated models.",
  },
  {
    question: "What if a paper's code is not on GitHub?",
    answer: "Currently, LeCode-R primarily supports public GitHub repositories linked from research papers. Support for code hosted on other platforms or included as supplementary material is on our roadmap.",
  },
];
