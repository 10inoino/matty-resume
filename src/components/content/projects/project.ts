export type Project = {
  id: number;
  name: string;
  organization: string;
  period: string;
  role: string;
  content: string[];
  result: string;
  dev_environment: {
    [key: string]: string;
  };
  project_size: string;
  reference: string[];
};
