import { IStoryTeaser } from "app/shared/story/story.component";
import { IProduct } from "app/shared/product/product.component";

/**
 * A list of story model objects
 */
export const STORIES: IStoryTeaser[] = [
    {
      id:1,
      title:'Buiding Bootstrap site in a weekend',
      content:'Today story talks about blah... blah...',
      imageURL:'/assets/images/img1.jpg'
    },
    {
      id:2,
      title:'Buiding Angular2 app',
      content:'Today story talks about blah... blah...',
      imageURL:'/assets/images/img2.jpg'
    },
    {
      id:3,
      title:'Buiding Angular2 app',
      content:'Today story talks about blah... blah...',
      imageURL:'/assets/images/img3.jpg'
    }
  ];

/**
 * A list of product model objects
 */
export const PRODUCTS: IProduct[] = [
    {
      id:1,
      title:'Picture',
      description:`This picture is the best, only <strong>$1.99</strong> for a copy`,
      price: 1.99,
      imageURL: '/assets/images/img4.jpg',
      rating:3,
      reviews:5
    },
    {
      id:2,
      title:'Picture',
      description:`This picture is the best, only <strong>$1.99</strong> for a copy`,
      price: 1.99,
      imageURL: '/assets/images/img5.jpg',
      rating:5,
      reviews:1
    },
    {
      id:3,
      title:'Picture',
      description:`This picture is the best, only <strong>$1.99</strong> for a copy`,
      price: 1.99,
      imageURL: '/assets/images/img6.jpg',
      rating:1.5,
      reviews:3
    },
    {
      id:4,
      title:'Picture',
      description:`This picture is the best, only <strong>$1.99</strong> for a copy`,
      price: 1.99,
      imageURL: '/assets/images/img7.jpg',
      rating:3,
      reviews:12
    }
  ];

/**
 * Another list of story model objects, we will use it on our 'other topics' section
 */
export const OTHER_STORIES: IStoryTeaser[] = [
    {
      id:1,
      title:'Buiding Bootstrap site in a weekend',
      content:'Today story talks about blah... blah...',
      imageURL:'/assets/images/img1.jpg'
    },
    {
      id:2,
      title:'Buiding Angular2 app',
      content:'Today story talks about blah... blah...',
      imageURL:'/assets/images/img2.jpg'
    },
    {
      id:3,
      title:'Buiding Angular2 app',
      content:'Today story talks about blah... blah...',
      imageURL:'/assets/images/img3.jpg'
    },
    {
      id:4,
      title:'Buiding Bootstrap site in a weekend',
      content:'Today story talks about blah... blah...',
      imageURL:'/assets/images/img4.jpg'
    },
    {
      id:5,
      title:'Buiding Angular2 app',
      content:'Today story talks about blah... blah...',
      imageURL:'/assets/images/img5.jpg'
    },
    {
      id:6,
      title:'Buiding Angular2 app',
      content:'Today story talks about blah... blah...',
      imageURL:'/assets/images/img6.jpg'
    }
  ];