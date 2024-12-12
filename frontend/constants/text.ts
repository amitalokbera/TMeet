export const APP_NAME = "TMeet";

export const LANDING_PAGE = {
  FEATURES: {
    ONE_CLICK: {
      TITLE: "One-Click Meetings",
      CONTENT:
        "Start or join a meeting instantly. No downloads, no fuss. Experience the simplicity of modern video conferencing.",
      ICON: "Video",
    },
    LIGHTNING_FAST: {
      TITLE: "Lightning Fast",
      CONTENT:
        "Enjoy high-quality video and audio with minimal latency. Our optimized infrastructure ensures smooth communication.",
      ICON: "Zap",
    },
    SECURE: {
      TITLE: "Secure by Design",
      CONTENT:
        "Your conversations are protected with end-to-end encryption. We prioritize your privacy and data security.",
      ICON: "Shield",
    },
  },
  WHY_CHOOSE: {
    TITLE: `Why Choose ${APP_NAME}?`,
    DATA: [
      {
        TITLE: "Team Collaboration",
        CONTENT:
          "Seamlessly work together with your team, no matter where they are. Foster productivity and connection.",
        ICON: "Users",
      },
      {
        TITLE: "Global Reach",
        CONTENT:
          "Connect with anyone, anywhere in the world, breaking down geographical barriers for truly global communication.",
        ICON: "Globe",
      },
      {
        TITLE: "Easy Scheduling",
        CONTENT:
          "Integrate with your calendar for effortless meeting planning and reminders. Never miss an important call again.",
        ICON: "Calendar",
      },
      {
        TITLE: "Open Source",
        CONTENT:
          "TMeet is fully open source. Contribute, customize, and help shape the future of video conferencing.",
        ICON: "Code",
      },
      {
        TITLE: "Self-Hostable",
        CONTENT:
          "Take control of your data. Host TMeet on your own servers for complete privacy and customization.",
        ICON: "Server",
      },
      {
        TITLE: "RBAC Support",
        CONTENT:
          "Role-Based Access Control (RBAC) ensures fine-grained permissions and security for your organization.",
        ICON: "LockIcon",
      },
    ],
  },
};

export const DASHBOARD = {
  TITLE: `Welcome to your ${APP_NAME} Dashboard`,
  NEW_MEETING: {
    TITLE: "Start a new meeting",
    ICON: "Video",
    BUTTON_TEXT: "Start New Meeting",
  },
  JOIN_MEETING: {
    TITLE: "Join a meeting",
    ICON: "MonitorSpeaker",
    BUTTON_TEXT: "Join Meeting",
  },
  ACCOUNT_SETTING: {
    TITLE: "Account Settings",
    ICON: "Settings",
    BUTTON_TEXT: "Manage Account",
  },
  SCHEDULE_MEETING: {
    TITLE: "Schedule a meeting",
    ICON: "Calendar",
    CONTENT: "You have {0} upcoming meetings today.",
  },
  MEETING_HISTORY: {
    TITLE: "Meeting History",
    ICON: "Clock",
    CONTENT: "You have {0} meetings in the past 30 days.",
  },
};

export const THEME = {
  LIGHT: "Light",
  DARK: "Dark",
  SYSTEM: "System",
  TOGGLE: "Toggle theme",
};
