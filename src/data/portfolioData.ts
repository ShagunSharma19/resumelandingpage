export interface SocialLinks {
  instagram: string;
  gmail: string;
  linkedin: string;
  github: string;
}

export interface SiteConfig {
  name: string;
  role: string;
  secondaryPositioning: string;
  college: string;
  location: string;
  semester: string;
  email: string;
  portraitUrl: string;
}

export const INITIAL_CONFIG: SiteConfig = {
  name: "Shagun Sharma",
  role: "Python Developer",
  secondaryPositioning: "BCA Student • AI Explorer • Emerging Technology Enthusiast",
  college: "SVGC Ghumarwin",
  location: "Himachal Pradesh, India",
  semester: "BCA 5th Semester Student",
  email: "shagunsharma8483@gmail.com",
  portraitUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKnO1kK3WFq-sUi5wQqmfz0OB9i49Yq3UmTEdlDOILb3llzeGU8DTPVM1H1kOhszSglQAo1MjgN_fiN7zxU4jj_eDYV52VN4QmnE1yjt70exm4DVwhdnhWavHRC1hnerxFYMtvS6m1UbiYxC8tM6O0sd2nA7i53Usy3NmW_F-yG8KHzEfTQxoorN5SSJnx02i2NWJUKDApgN3qtTqZsrAk__Ov7coB0VghmkozOP-uBJQRaLl-2VFjsoSqCYLz4OuRgYs"
};

export const INITIAL_SOCIAL_LINKS: SocialLinks = {
  instagram: "https://instagram.com",
  gmail: "mailto:shagunsharma8483@gmail.com",
  linkedin: "https://linkedin.com",
  github: "https://github.com"
};

export interface JourneyStep {
  id: number;
  stageNum: string;
  badge: string;
  title: string;
  desc: string;
  connectedWith: string;
  keyPractices: string[];
  sampleInsight: string;
}

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    id: 0,
    stageNum: "01 / STAGE",
    badge: "Focus: Python Core & Logic",
    title: "Stage 01: LEARN — Grasping Foundations & Algorithmic Logic",
    desc: "Mastering Python syntax, variables, conditionals, functional programming and data structures through structured exercises. Developing strong computational thinking rather than memorizing syntax.",
    connectedWith: "Python + BCA Studies",
    keyPractices: [
      "Daily problem-solving with Python loops and conditionals",
      "Function design with clear inputs, type discipline, and return statements",
      "Object-oriented programming concepts (Classes, Methods, Inheritance)",
      "Standard library mastery: sys, os, math, collections, itertools"
    ],
    sampleInsight: "Write code that humans can read and machines can execute reliably."
  },
  {
    id: 1,
    stageNum: "02 / STAGE",
    badge: "Focus: AI Workflows & Tools",
    title: "Stage 02: EXPERIMENT — Testing AI Capabilities & Structured Inputs",
    desc: "Exploring prompt structures, testing deterministic versus creative AI outputs, and learning how models process instructional context for problem-solving.",
    connectedWith: "AI Tools & Exploration",
    keyPractices: [
      "Role-based system prompting and few-shot formatting",
      "Testing token limits, hallucination boundaries, and temperature tuning",
      "Comparing generative outputs across image, text, and video models",
      "Analyzing structured JSON outputs for programmatic consumption"
    ],
    sampleInsight: "Prompt engineering is programming in natural language with strict context boundaries."
  },
  {
    id: 2,
    stageNum: "03 / STAGE",
    badge: "Focus: Automation & Utilities",
    title: "Stage 03: BUILD — Practical Automations & Everyday Scripts",
    desc: "Writing lightweight Python scripts to manipulate files and connecting no-code workflows via Make to automate repetitive operations.",
    connectedWith: "Python Automation + Make",
    keyPractices: [
      "Batch file renaming, organizing, and disk management utilities",
      "Extracting text from raw documents, CSVs, and web responses",
      "Constructing automated triggers and routers using Make",
      "Integrating automated notification webhooks and data pipelines"
    ],
    sampleInsight: "If you have to do a manual task more than three times, write a Python script for it."
  },
  {
    id: 3,
    stageNum: "04 / STAGE",
    badge: "Focus: Process & Code Logs",
    title: "Stage 04: DOCUMENT — Maintaining Code Logs & Learning Notes",
    desc: "Practicing clear code comments, README explanations, and structured logs to turn every small trial into a referenceable learning milestone.",
    connectedWith: "Technical Transparency",
    keyPractices: [
      "Writing comprehensive README.md documents for each experiment",
      "Documenting edge cases, bugs encountered, and troubleshooting steps",
      "Maintaining version history and meaningful Git commit messages",
      "Sharing transparent progress with peer developer communities"
    ],
    sampleInsight: "Clear documentation is the difference between a throwaway script and lasting knowledge."
  },
  {
    id: 4,
    stageNum: "05 / STAGE",
    badge: "Focus: Refinement & Scale",
    title: "Stage 05: IMPROVE — Iterative Polishing & Future Projects",
    desc: "Taking initial scripts and refining error handling, efficiency, and preparing toward end-to-end Python applications with real-world usefulness.",
    connectedWith: "Long-term Developer Growth",
    keyPractices: [
      "Refactoring repetitive code into modular reusable packages",
      "Adding robust try/except error handling and informative logging",
      "Benchmarking execution time and memory footprint",
      "Planning full-stack web and API integrations for planned utilities"
    ],
    sampleInsight: "First make it work, then make it right, then make it clean."
  }
];

export interface ProjectItem {
  id: string;
  projectNumber: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  urlPlaceholder: string;
  status: "Completed" | "Exploration" | "Automation" | "In Progress" | "Multimedia";
  fullDetails: {
    overview: string;
    objective: string;
    technologies: string[];
    outcomes: string[];
    demoData?: {
      title: string;
      preview: string;
      interactiveType: "prompt_generator" | "workflow_diagram" | "video_storyboard" | "roadmap";
    };
  };
}

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "project_01",
    projectNumber: "PROJECT 01",
    title: "Universal AI Prompt Generator",
    category: "Exploration",
    description: "An AI prompt-generation project designed to create structured prompts through a guided workflow.",
    tags: ["AI", "Prompt Engineering", "AI Tools"],
    urlPlaceholder: "PASTE_PROJECT_URL_HERE",
    status: "Exploration",
    fullDetails: {
      overview: "Universal AI Prompt Generator is an interactive exploration into prompt architectures. It guides users through role definition, target task, context variables, tone constraints, and output formatting to yield deterministic outputs from AI models.",
      objective: "To eliminate guesswork in prompt design by establishing standard structural blocks (System Persona, Input Data, Rules/Constraints, Expected Format).",
      technologies: ["Prompt Engineering", "Structured Markdown", "AI Workflow Analysis", "JSON Schema Formatting"],
      outcomes: [
        "Structured system prompts for developer code generation and refactoring",
        "Repeatable content synthesis templates with zero fluff",
        "Consistent extraction templates for unstructured text"
      ],
      demoData: {
        title: "Try the Prompt Template Builder",
        preview: "Role: Senior Python Architect\nContext: Refactoring messy script into modular classes\nOutput: Clean PEP8 compliant code with docstrings",
        interactiveType: "prompt_generator"
      }
    }
  },
  {
    id: "project_02",
    projectNumber: "PROJECT 02",
    title: "Make Automation Workflows",
    category: "Automation",
    description: "Learning to create simple workflow automations using Make and exploring how AI can be integrated into practical workflows.",
    tags: ["Make", "Automation", "AI"],
    urlPlaceholder: "PASTE_PROJECT_URL_HERE",
    status: "Automation",
    fullDetails: {
      overview: "Hands-on exploration of visual automation pipelines. Connected event triggers (forms, webhooks, RSS feeds) to AI processing nodes and multi-channel outputs (Google Sheets, email alerts, Discord updates).",
      objective: "Understand how business logic flows automatically between SaaS services without manual human intervention.",
      technologies: ["Make (Integromat)", "Webhooks", "JSON Parsing", "API Integrations", "Data Mapping"],
      outcomes: [
        "Automated content ingestion and routing pipeline",
        "Real-time alerts for critical events with filtered conditions",
        "Zero-code error handling and fallback route definitions"
      ],
      demoData: {
        title: "Multi-Step Automation Pipeline",
        preview: "Trigger [Incoming Data Webhook] → Filter [Valid Payload?] → Module [AI Summarizer] → Output [Organized Data Row]",
        interactiveType: "workflow_diagram"
      }
    }
  },
  {
    id: "project_03",
    projectNumber: "PROJECT 03",
    title: "AI Advertisement Project",
    category: "Multimedia",
    description: "Created a short AI-powered advertisement as part of my technology learning journey, experimenting with AI video generation, visual storytelling and content creation.",
    tags: ["AI Tools", "AI Video", "Content Creation"],
    urlPlaceholder: "PASTE_PROJECT_URL_HERE",
    status: "Multimedia",
    fullDetails: {
      overview: "A creative project exploring the frontier of generative video and commercial storytelling. Produced an experimental commercial concept by combining generated visual assets, narrative scripting, and cinematic voiceover synthesis.",
      objective: "Explore creative applications of AI tools, camera motion simulation, stylistic consistency, and audio-visual synchronization.",
      technologies: ["Generative Video Tools", "Voice Synthesis", "Storyboarding", "Visual Prompt Sequencing", "Digital Editing"],
      outcomes: [
        "Scripted 60-second video storyboard with scene-by-scene prompt prompts",
        "Explored camera motion modifiers (pan, zoom, orbit, tilt)",
        "Synthesized narration and background sound design alignment"
      ],
      demoData: {
        title: "Production Storyboard Showcase",
        preview: "Scene 1: Futuristic Mountain Lab (Slow Zoom) → Scene 2: Holographic Code Grid → Scene 3: Human Developer in Focus",
        interactiveType: "video_storyboard"
      }
    }
  },
  {
    id: "project_04",
    projectNumber: "PROJECT 04",
    title: "Python Projects Coming Soon",
    category: "In Progress",
    description: "Currently strengthening my Python skills and preparing to build practical Python projects. No fictitious repositories or exaggerated features — only genuine work once complete.",
    tags: ["Python", "Programming", "Learning"],
    urlPlaceholder: "PASTE_PROJECT_URL_HERE",
    status: "In Progress",
    fullDetails: {
      overview: "Honest roadmap for foundational Python applications. Rather than claiming unfinished work, this space tracks the architecture of utilities being developed during BCA coursework.",
      objective: "Build solid, tested Python utilities solving concrete everyday problems.",
      technologies: ["Python 3.12", "CLI Interfaces (argparse)", "File I/O", "REST API Consumption", "SQLite"],
      outcomes: [
        "Automated Desktop Organizer (OS/shutil)",
        "CLI Weather & Currency Monitor",
        "Structured Log Parser & Report Generator"
      ],
      demoData: {
        title: "Roadmap Milestones",
        preview: "Phase 1: CLI Utilities → Phase 2: Web Scraping & APIs → Phase 3: Flask / FastAPI Backend",
        interactiveType: "roadmap"
      }
    }
  }
];

export interface PythonFocusItem {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  bullets: string[];
  status: string;
  iconName: string;
}

export const PYTHON_FOCUS_ITEMS: PythonFocusItem[] = [
  {
    id: "fundamentals",
    num: "01",
    title: "Python Fundamentals",
    subtitle: "Learning Modules:",
    bullets: [
      "Variables & Data types",
      "Conditions & Logical Flow",
      "Loops (for, while)",
      "Functions & Scope",
      "Basic programming concepts"
    ],
    status: "Active Study",
    iconName: "layers"
  },
  {
    id: "problem_solving",
    num: "02",
    title: "Problem Solving",
    subtitle: "Learning how to:",
    bullets: [
      "Break problems into smaller steps",
      "Write clean logical solutions",
      "Practice programming problems",
      "Improve computational thinking"
    ],
    status: "Regular Practice",
    iconName: "brain"
  },
  {
    id: "automation",
    num: "03",
    title: "Python Automation",
    subtitle: "Exploring how Python can:",
    bullets: [
      "Automate repetitive tasks",
      "Work with files & directories",
      "Process information & text",
      "Create useful everyday utilities"
    ],
    status: "Scripting Experiments",
    iconName: "cpu"
  },
  {
    id: "python_ai",
    num: "04",
    title: "Python + AI",
    subtitle: "Exploring how Python connects with:",
    bullets: [
      "AI tools & APIs",
      "AI workflows & automation",
      "Intelligent utility applications",
      "Automated data handling"
    ],
    status: "Exploration",
    iconName: "sparkles"
  },
  {
    id: "python_web",
    num: "05",
    title: "Python + Web",
    subtitle: "Learning how Python is used for:",
    bullets: [
      "Web development concepts",
      "Backend fundamentals",
      "Connecting with APIs",
      "Future web-based projects"
    ],
    status: "Conceptual Learning",
    iconName: "globe"
  }
];

export interface AIPlaygroundArea {
  num: string;
  title: string;
  desc: string;
  iconName: string;
  colorScheme: "blue" | "lavender" | "emerald";
  details: {
    focusTopic: string;
    keyTools: string[];
    whatILearn: string;
    practicalExample: string;
  };
}

export const AI_PLAYGROUND_AREAS: AIPlaygroundArea[] = [
  {
    num: "01",
    title: "Artificial Intelligence",
    desc: "Studying AI fundamentals, practical use cases, and how machines interpret structured prompts.",
    iconName: "binary",
    colorScheme: "blue",
    details: {
      focusTopic: "Foundations of Modern Machine Intelligence",
      keyTools: ["LLM architectures", "Context Windows", "Zero-shot & Few-shot Learning"],
      whatILearn: "Understanding how natural language interfaces transform computation and augment programming.",
      practicalExample: "Analyzing how token probability creates responses and how temperature affects creativity versus precision."
    }
  },
  {
    num: "02",
    title: "Prompt Engineering",
    desc: "Designing structured, repeatable prompt architectures to extract precise, deterministic outputs.",
    iconName: "message-square-code",
    colorScheme: "lavender",
    details: {
      focusTopic: "Deterministic Natural Language Programming",
      keyTools: ["System Prompts", "Constraint Encoders", "Structured JSON Outputs"],
      whatILearn: "Crafting guardrails, strict instructions, and markdown templates to avoid hallucinations.",
      practicalExample: "Building universal templates for code reviews that output only bug line numbers, root cause, and suggested patch."
    }
  },
  {
    num: "03",
    title: "AI Automation",
    desc: "Connecting automated workflows with AI processing to streamline repetitive digital tasks.",
    iconName: "cog",
    colorScheme: "blue",
    details: {
      focusTopic: "Event-Driven Autonomous Pipelines",
      keyTools: ["Make", "Webhooks", "JSON Mapping", "Data Filtration"],
      whatILearn: "Chaining disparate applications so repetitive manual data entry happens automatically in seconds.",
      practicalExample: "Listening to new spreadsheet rows, extracting key sentiments via AI, and categorizing into prioritized lists."
    }
  },
  {
    num: "04",
    title: "AI Tools",
    desc: "Hands-on testing of emerging AI developer utilities, research aids, and productivity tools.",
    iconName: "box",
    colorScheme: "lavender",
    details: {
      focusTopic: "Developer Productivity Amplifiers",
      keyTools: ["AI Code Assistants", "Research Agents", "Command-line AI Tools"],
      whatILearn: "Evaluating which tools genuinely accelerate learning without compromising fundamental understanding.",
      practicalExample: "Comparing documentation summaries generated by AI tools versus official Python technical specifications."
    }
  },
  {
    num: "05",
    title: "AI Image & Video",
    desc: "Exploring visual storytelling, AI image generation, and creative multimedia workflows.",
    iconName: "image",
    colorScheme: "blue",
    details: {
      focusTopic: "Generative Visual Storytelling",
      keyTools: ["Diffusion Models", "Prompt Modifiers", "Video Generation Platforms"],
      whatILearn: "Studying camera perspectives, lighting terminologies, and artistic composition cues.",
      practicalExample: "Generating cinematic concept scenes with defined aspect ratios and consistent color palettes."
    }
  },
  {
    num: "06",
    title: "Emerging Technologies",
    desc: "Staying curious about new shifts in computer science, software design, and practical tech trends.",
    iconName: "compass",
    colorScheme: "emerald",
    details: {
      focusTopic: "Tech Horizons & Future Stacks",
      keyTools: ["Web Standards", "Modern APIs", "Autonomous Agents", "Cloud Basics"],
      whatILearn: "Tracking where software engineering is heading to align college studies with real industry trajectories.",
      practicalExample: "Reading technical whitepapers and experimenting with lightweight open-source models."
    }
  }
];

export interface MilestoneItem {
  stage: string;
  stageName: string;
  title: string;
  description: string;
  category: "academic" | "programming" | "ai" | "current" | "future";
}

export const TIMELINE_MILESTONES: MilestoneItem[] = [
  {
    stage: "Stage 01",
    stageName: "01",
    title: "BCA Enrollment (SVGC Ghumarwin)",
    description: "Began formal computer applications degree, learning computational logic and IT essentials.",
    category: "academic"
  },
  {
    stage: "Stage 02",
    stageName: "02",
    title: "Programming Foundation",
    description: "Built logic in C, C++, and basic web markup (HTML), learning how code executes at a low level.",
    category: "programming"
  },
  {
    stage: "Stage 03",
    stageName: "03",
    title: "Python Learning",
    description: "Adopted Python as primary language of choice for its readability, versatility, and rich ecosystem.",
    category: "programming"
  },
  {
    stage: "Stage 04",
    stageName: "04",
    title: "Exploring AI",
    description: "Discovered modern Artificial Intelligence capabilities and their potential to augment development.",
    category: "ai"
  },
  {
    stage: "Stage 05",
    stageName: "05",
    title: "AI Mastery Program",
    description: "Structured learning curriculum dedicated to understanding AI models, tooling, and workflow patterns.",
    category: "ai"
  },
  {
    stage: "Stage 06",
    stageName: "06",
    title: "First AI Project",
    description: "Constructed initial hands-on AI experiments including guided workflow tools.",
    category: "ai"
  },
  {
    stage: "Stage 07",
    stageName: "07",
    title: "Prompt Engineering",
    description: "Investigating structured context, formatting rules, and systematic instructions for AI.",
    category: "ai"
  },
  {
    stage: "Stage 08",
    stageName: "08",
    title: "Automation",
    description: "Creating automated scenarios using Make to chain events and process information smoothly.",
    category: "programming"
  },
  {
    stage: "Stage 09 (Current)",
    stageName: "09",
    title: "Python + AI Exploration",
    description: "Actively investigating how Python code can orchestrate AI tools and power automation utilities.",
    category: "current"
  },
  {
    stage: "Stage 10 (Ahead)",
    stageName: "10",
    title: "Future Projects",
    description: "Deploying end-to-end practical Python applications with clean code, documentation, and real utility.",
    category: "future"
  }
];

export const CODE_SNIPPETS = [
  {
    id: "clean_logic",
    title: "01_data_cleaner.py",
    description: "A clean Python script demonstrating data sanitation and structure.",
    code: `def clean_student_records(raw_records: list[dict]) -> list[dict]:
    """
    Cleans raw student entry data, validates CGPA scores,
    and returns sorted, structured records.
    """
    cleaned = []
    for entry in raw_records:
        name = entry.get("name", "").strip().title()
        cgpa = float(entry.get("cgpa", 0.0))
        semester = entry.get("semester", "5th")
        
        if 0.0 <= cgpa <= 10.0:
            cleaned.append({
                "student_name": name,
                "cgpa": round(cgpa, 2),
                "semester": semester,
                "status": "Verified"
            })
            
    return sorted(cleaned, key=lambda x: x["cgpa"], reverse=True)`
  },
  {
    id: "file_automation",
    title: "02_file_organizer.py",
    description: "Python automation script organizing directory files by extension.",
    code: `import os
import shutil
from pathlib import Path

def organize_downloads(target_dir: str) -> dict[str, int]:
    """
    Categorizes downloaded files into subdirectories:
    Documents, Scripts, Images, and Archives.
    """
    categories = {
        "Documents": [".pdf", ".docx", ".txt", ".xlsx"],
        "Scripts": [".py", ".sh", ".json", ".sql"],
        "Images": [".png", ".jpg", ".jpeg", ".svg"],
        "Archives": [".zip", ".tar", ".gz"]
    }
    
    path = Path(target_dir)
    stats = {cat: 0 for cat in categories}
    
    for file in path.iterdir():
        if file.is_file():
            ext = file.suffix.lower()
            for cat, extensions in categories.items():
                if ext in extensions:
                    dest = path / cat
                    dest.mkdir(exist_ok=True)
                    shutil.move(str(file), str(dest / file.name))
                    stats[cat] += 1
                    break
                    
    return stats`
  },
  {
    id: "ai_wrapper",
    title: "03_structured_prompt.py",
    description: "Python function formatting structured system prompts for predictable AI responses.",
    code: `def build_prompt_payload(role: str, task: str, constraints: list[str]) -> str:
    """
    Assembles a deterministic prompt with clear boundary markers.
    """
    constraint_lines = "\\n".join(f"- {c}" for c in constraints)
    
    return f"""### ROLE
{role}

### TASK
{task}

### STRICT CONSTRAINTS
{constraint_lines}

### OUTPUT FORMAT
Provide your response strictly in Markdown with clear headers."""`
  }
];
