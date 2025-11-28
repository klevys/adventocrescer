export interface AdventDay {
  day: number;
  title: string;
  activity: string;
  verse: string;
  objective: string;
  challenge?: string;
  extra?: string;
  iconName?: string;
}

export interface IdeaImage {
  id: number;
  url: string;
  caption: string;
}