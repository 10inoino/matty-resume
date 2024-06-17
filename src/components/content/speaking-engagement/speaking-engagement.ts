export type SpeakingEngagement = {
  id: number;
  title: string;
  date: string;
  content: string;
  reference: {
    [key: string]: string;
  };
};
