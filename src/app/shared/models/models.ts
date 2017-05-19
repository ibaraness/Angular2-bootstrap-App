/**
 * Product model interface
 */
export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  imageURL: string;
  imageThumbURL :string;
  rating: number; //...0 out of 5 (halfs allowd, for example 3.5)
  reviewCount: number;
  additionalInfo?: string;
}

/**
 * Story model interface
 */
export interface IStory {
  id: number;
  title: string;
  subtitle: string;
  content: string;
  imageThumbURL: string;
  imageURL: string;
  teaserText: string;
}

/**
 * Review model interface
 */
export interface IReview {
  productId: number; //...The product this review belogs to
  title: string;
  content: string;
  ratings: number //...0 out of 5 (halfs allowd, for example 3.5)
}