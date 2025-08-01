export type Recipe = {
  _id?: string;
  title: string;
  ingredients: string[];
  instructions: string;
  image?: string;
  createdBy?: string;
  createdAt?: Date;
};
