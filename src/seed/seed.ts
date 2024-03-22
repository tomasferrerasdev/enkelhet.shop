export interface SeedProduct {
  description: string;
  images: string[];
  inStock: number;
  price: number;
  slug: string;
  tags: string[];
  title: string;
  finish: ('oak' | 'ash' | 'walnut' | 'wenge')[];
  series: 'lounge' | 'alabaster' | 'capsule';
  measurements: MeasurementsType;
}

type MeasurementsType = {
  total_height: string;
  seat_height: string;
  width: string;
  depth: string;
};

interface SeedData {
  products: SeedProduct[];
}

export const initialData: SeedData = {
  products: [
    {
      description:
        'Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
      images: ['example.jpg', 'example-2.webp'],
      inStock: 7,
      price: 75,
      slug: 'mens_chill_crew_neck_sweatshirt',
      tags: [''],
      title: 'Men’s Chill Crew Neck Sweatshirt',
      series: 'lounge',
      measurements: {
        total_height: '85cm',
        seat_height: '45cm',
        width: '60cm',
        depth: '80cm',
      },
      finish: ['ash', 'oak', 'walnut', 'wenge'],
    },
    {
      description:
        "The Men's Quilted Shirt Jacket features a uniquely fit, quilted design for warmth and mobility in cold weather seasons. With an overall street-smart aesthetic, the jacket features subtle silicone injected Tesla logos below the back collar and on the right sleeve, as well as custom matte metal zipper pulls. Made from 87% nylon and 13% polyurethane.",
      images: ['example.jpg', 'example-2.webp'],
      inStock: 5,
      price: 200,
      slug: 'men_quilted_shirt_jacket',
      tags: [''],
      title: "Men's Quilted Shirt Jacket",
      series: 'alabaster',
      measurements: {
        total_height: '85cm',
        seat_height: '45cm',
        width: '60cm',
        depth: '80cm',
      },
      finish: ['ash', 'oak', 'walnut', 'wenge'],
    },

    {
      description:
        "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Zip Up Bomber has a premium, modern silhouette made from a sustainable bamboo cotton blend for versatility in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, a concealed chest pocket with custom matte zipper pulls and a french terry interior. Made from 70% bamboo and 30% cotton.",
      images: ['example.jpg', 'example-2.webp'],
      inStock: 10,
      price: 130,
      slug: 'men_raven_lightweight_zip_up_bomber_jacket',

      tags: [''],
      title: "Men's Raven Lightweight Zip Up Bomber Jacket",
      series: 'capsule',
      measurements: {
        total_height: '85cm',
        seat_height: '45cm',
        width: '60cm',
        depth: '80cm',
      },
      finish: ['ash', 'oak', 'walnut', 'wenge'],
    },
    {
      description:
        'Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
      images: ['example.jpg', 'example-2.webp'],
      inStock: 7,
      price: 75,
      slug: 'mens_chill_crew_neck_sweatshirtt',

      tags: [''],
      title: 'Men’s Chill Crew Neck Sweatshirt',
      series: 'lounge',
      measurements: {
        total_height: '85cm',
        seat_height: '45cm',
        width: '60cm',
        depth: '80cm',
      },
      finish: ['ash', 'oak', 'walnut', 'wenge'],
    },
    {
      description:
        "The Men's Quilted Shirt Jacket features a uniquely fit, quilted design for warmth and mobility in cold weather seasons. With an overall street-smart aesthetic, the jacket features subtle silicone injected Tesla logos below the back collar and on the right sleeve, as well as custom matte metal zipper pulls. Made from 87% nylon and 13% polyurethane.",
      images: ['example.jpg', 'example-2.webp'],
      inStock: 5,
      price: 200,
      slug: 'men_quilted_shirt_jackett',
      tags: [''],
      title: "Men's Quilted Shirt Jacket",
      series: 'alabaster',
      measurements: {
        total_height: '85cm',
        seat_height: '45cm',
        width: '60cm',
        depth: '80cm',
      },
      finish: ['ash', 'oak', 'walnut', 'wenge'],
    },

    {
      description:
        "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Zip Up Bomber has a premium, modern silhouette made from a sustainable bamboo cotton blend for versatility in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, a concealed chest pocket with custom matte zipper pulls and a french terry interior. Made from 70% bamboo and 30% cotton.",
      images: ['example.jpg', 'example-2.webp'],
      inStock: 10,
      price: 130,
      slug: 'men_raven_lightweight_zip_up_bomber_jackett',
      tags: [''],
      title: "Men's Raven Lightweight Zip Up Bomber Jacket",
      series: 'capsule',
      measurements: {
        total_height: '85cm',
        seat_height: '45cm',
        width: '60cm',
        depth: '80cm',
      },
      finish: ['ash', 'oak', 'walnut', 'wenge'],
    },
    {
      description:
        'Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
      images: ['example.jpg', 'example-2.webp'],
      inStock: 7,
      price: 75,
      slug: 'mens_chill_crew_neck_sweatshirtto',
      tags: [''],
      title: 'Men’s Chill Crew Neck Sweatshirt',
      series: 'lounge',
      measurements: {
        total_height: '85cm',
        seat_height: '45cm',
        width: '60cm',
        depth: '80cm',
      },
      finish: ['ash', 'oak', 'walnut', 'wenge'],
    },
    {
      description:
        "The Men's Quilted Shirt Jacket features a uniquely fit, quilted design for warmth and mobility in cold weather seasons. With an overall street-smart aesthetic, the jacket features subtle silicone injected Tesla logos below the back collar and on the right sleeve, as well as custom matte metal zipper pulls. Made from 87% nylon and 13% polyurethane.",
      images: ['example.jpg', 'example-2.webp'],
      inStock: 5,
      price: 200,
      slug: 'men_quilted_shirt_jacketto',
      tags: [''],
      title: "Men's Quilted Shirt Jacket",
      series: 'alabaster',
      measurements: {
        total_height: '85cm',
        seat_height: '45cm',
        width: '60cm',
        depth: '80cm',
      },
      finish: ['ash', 'oak', 'walnut', 'wenge'],
    },

    {
      description:
        "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Zip Up Bomber has a premium, modern silhouette made from a sustainable bamboo cotton blend for versatility in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, a concealed chest pocket with custom matte zipper pulls and a french terry interior. Made from 70% bamboo and 30% cotton.",
      images: ['example.jpg', 'example-2.webp'],
      inStock: 10,
      price: 130,
      slug: 'men_raven_lightweight_zip_up_bomber_jacketto',
      tags: [''],
      title: "Men's Raven Lightweight Zip Up Bomber Jacket",
      series: 'capsule',
      measurements: {
        total_height: '85cm',
        seat_height: '45cm',
        width: '60cm',
        depth: '80cm',
      },
      finish: ['ash', 'oak', 'walnut', 'wenge'],
    },
    {
      description:
        'Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
      images: ['example.jpg', 'example-2.webp'],
      inStock: 7,
      price: 75,
      slug: 'mens_chill_crew_neck_sweatshirttoe',
      tags: [''],
      title: 'Men’s Chill Crew Neck Sweatshirt',
      series: 'lounge',
      measurements: {
        total_height: '85cm',
        seat_height: '45cm',
        width: '60cm',
        depth: '80cm',
      },
      finish: ['ash', 'oak', 'walnut', 'wenge'],
    },
    {
      description:
        "The Men's Quilted Shirt Jacket features a uniquely fit, quilted design for warmth and mobility in cold weather seasons. With an overall street-smart aesthetic, the jacket features subtle silicone injected Tesla logos below the back collar and on the right sleeve, as well as custom matte metal zipper pulls. Made from 87% nylon and 13% polyurethane.",
      images: ['example.jpg', 'example-2.webp'],
      inStock: 5,
      price: 200,
      slug: 'men_quilted_shirt_jackettoe',
      tags: [''],
      title: "Men's Quilted Shirt Jacket",
      series: 'alabaster',
      measurements: {
        total_height: '85cm',
        seat_height: '45cm',
        width: '60cm',
        depth: '80cm',
      },
      finish: ['ash', 'oak', 'walnut', 'wenge'],
    },
    {
      description:
        "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Zip Up Bomber has a premium, modern silhouette made from a sustainable bamboo cotton blend for versatility in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, a concealed chest pocket with custom matte zipper pulls and a french terry interior. Made from 70% bamboo and 30% cotton.",
      images: ['example.jpg', 'example-2.webp'],
      inStock: 10,
      price: 130,
      slug: 'men_raven_lightweight_zip_up_bomber_jackettoe',
      tags: [''],
      title: "Men's Raven Lightweight Zip Up Bomber Jacket",
      series: 'capsule',
      measurements: {
        total_height: '85cm',
        seat_height: '45cm',
        width: '60cm',
        depth: '80cm',
      },
      finish: ['ash', 'oak', 'walnut', 'wenge'],
    },
    {
      description:
        'Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
      images: ['example.jpg', 'example-2.webp'],
      inStock: 7,
      price: 75,
      slug: 'mens_chill_crew_neck_sweatshirttoes',
      tags: [''],
      title: 'Men’s Chill Crew Neck Sweatshirt',
      series: 'lounge',
      measurements: {
        total_height: '85cm',
        seat_height: '45cm',
        width: '60cm',
        depth: '80cm',
      },
      finish: ['ash', 'oak', 'walnut', 'wenge'],
    },
    {
      description:
        "The Men's Quilted Shirt Jacket features a uniquely fit, quilted design for warmth and mobility in cold weather seasons. With an overall street-smart aesthetic, the jacket features subtle silicone injected Tesla logos below the back collar and on the right sleeve, as well as custom matte metal zipper pulls. Made from 87% nylon and 13% polyurethane.",
      images: ['example.jpg', 'example-2.webp'],
      inStock: 5,
      price: 200,
      slug: 'men_quilted_shirt_jackettoes',
      tags: [''],
      title: "Men's Quilted Shirt Jacket",
      series: 'capsule',
      measurements: {
        total_height: '85cm',
        seat_height: '45cm',
        width: '60cm',
        depth: '80cm',
      },
      finish: ['ash', 'oak', 'walnut', 'wenge'],
    },

    {
      description:
        "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Zip Up Bomber has a premium, modern silhouette made from a sustainable bamboo cotton blend for versatility in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, a concealed chest pocket with custom matte zipper pulls and a french terry interior. Made from 70% bamboo and 30% cotton.",
      images: ['example.jpg', 'example-2.webp'],
      inStock: 10,
      price: 130,
      slug: 'men_raven_lightweight_zip_up_bomber_jackettoes',
      tags: [''],
      title: "Men's Raven Lightweight Zip Up Bomber Jacket",
      series: 'capsule',
      measurements: {
        total_height: '85cm',
        seat_height: '45cm',
        width: '60cm',
        depth: '80cm',
      },
      finish: ['ash', 'oak', 'walnut', 'wenge'],
    },
    {
      description:
        'Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
      images: ['example.jpg', 'example-2.webp'],
      inStock: 7,
      price: 75,
      slug: 'mens_chill_crew_neck_sweatshirttoeso',
      tags: [''],
      title: 'Men’s Chill Crew Neck Sweatshirt',
      series: 'capsule',
      measurements: {
        total_height: '85cm',
        seat_height: '45cm',
        width: '60cm',
        depth: '80cm',
      },
      finish: ['ash', 'oak', 'walnut', 'wenge'],
    },
    {
      description:
        "The Men's Quilted Shirt Jacket features a uniquely fit, quilted design for warmth and mobility in cold weather seasons. With an overall street-smart aesthetic, the jacket features subtle silicone injected Tesla logos below the back collar and on the right sleeve, as well as custom matte metal zipper pulls. Made from 87% nylon and 13% polyurethane.",
      images: ['example.jpg', 'example-2.webp'],
      inStock: 5,
      price: 200,
      slug: 'men_quilted_shirt_jackettoeso',
      tags: [''],
      title: "Men's Quilted Shirt Jacket",
      series: 'capsule',
      measurements: {
        total_height: '85cm',
        seat_height: '45cm',
        width: '60cm',
        depth: '80cm',
      },
      finish: ['ash', 'oak', 'walnut', 'wenge'],
    },
    {
      description:
        "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Zip Up Bomber has a premium, modern silhouette made from a sustainable bamboo cotton blend for versatility in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, a concealed chest pocket with custom matte zipper pulls and a french terry interior. Made from 70% bamboo and 30% cotton.",
      images: ['example.jpg', 'example-2.webp'],
      inStock: 10,
      price: 130,
      slug: 'men_raven_lightweight_zip_up_bomber_jackettoeso',
      tags: [''],
      title: "Men's Raven Lightweight Zip Up Bomber Jacket",
      series: 'capsule',
      measurements: {
        total_height: '85cm',
        seat_height: '45cm',
        width: '60cm',
        depth: '80cm',
      },
      finish: ['ash', 'oak', 'walnut', 'wenge'],
    },
  ],
};
