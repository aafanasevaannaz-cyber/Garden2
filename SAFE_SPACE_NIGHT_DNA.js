export const safeSpaceNightDNA = {
  editingRule: {
    changeOnly: ["night themes only"],
    neverTouch: ["day themes", "morning themes"],
    excludedRepos: ["App", "App2", "App4-", "Ambereshe", "Ambertishe-", "Ambergromche-", "Catty", "App3"]
  },
  noBlueNight: {
    principle: "No blue night for calming apps unless explicitly requested.",
    palette: {
      ink: "#0b0b0d",
      graphite: "#141416",
      charcoal: "#1c1b1a",
      mossShadow: "#2d342d",
      oliveSmoke: "#4d5648",
      warmBone: "#e7ddcf",
      mutedGold: "#b89d74",
      softPearl: "rgba(255,245,232,0.72)"
    },
    atmosphere: [
      "velvet darkness",
      "safe depth",
      "quiet enclosure",
      "muted gold instead of cold neon",
      "distant sky only",
      "rare stars only in background"
    ],
    avoid: [
      "bright blue",
      "cyan glow",
      "purple cyberpunk",
      "postcard galaxy",
      "stars over content",
      "tech-looking night"
    ]
  }
};
