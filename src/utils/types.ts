
// Type definitions for the Copyfy application

export interface GeneratedContent {
  titles: string[];
  descriptions: string[];
  usps: string[];
  sitelinks: { title: string; description1: string; description2: string; url: string; }[];
}
