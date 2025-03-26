export const SITE = {
  website: "https://gsasikiran.github.io", // replace this with your deployed domain
  author: "Sasi Kiran Gaddipati",
  profile: "https://gsasikiran.github.io",
  desc: "Personal website of Sasi Kiran Gaddipati",
  title: "Sasi Kiran Gaddipati",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Suggest Changes",
    url: "https://github.com/gsasikiran/gsasikiran.github.io/edit/main/",
  },
  dynamicOgImage: true,
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Europe/Berlin", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
