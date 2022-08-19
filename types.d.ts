// export interface Video {
//   caption: string;
//   video: {
//     asset: {
//       _id: string;
//       url: string;
//     }
//   };
//   _id: string;
//   postedBy: {
//     image: string;
//     userName: string;
//     _id: string;
//   },
//   likes: {
//     _key: string;
//     _ref: string;
//     _type: string;
//   };
// }

export interface Video {
  caption: string;
  video: {
    asset: {
      _id: string;
      url: string;
    };
  };
  _id: string;
  postedBy: {
    _id: string;
    userName: string;
    image: string;
  };
  likes: {
    postedBy: {
      _id: string;
      userName: string;
      image: string;
    };
  }[];
  comments: {
    comment: string;
    _key: string;
    postedBy: {
      _ref: string;
    };
  }[];
  userId: string;
}

export interface IUser {
  _id: string;
  _type: string;
  userName: string;
  image: string;
}

