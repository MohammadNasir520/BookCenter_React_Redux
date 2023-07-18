interface IUser {
  email: string;
  role: "user" | "admin";
  password: string;
  name: {
    firstName: string;
    lastName: string;
  };
  image: string;
}

interface IReview {
  book: string;
  user: IUser;
  reviewText: string;
}
