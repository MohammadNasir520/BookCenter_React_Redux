export interface IUser {
  email: string;
  role: "user" | "admin";
  password: string;
  name: {
    firstName: string;
    lastName: string;
  };
  image: string;
}

export interface IReview {
  book: string;
  user: IUser;
  reviewText: string;
}
export interface IButton {
  th: string;
  title: string;
  img: string;
}
