let books = [
  {
    id_book: 1,
    booTitle: "The case Charles Dexter Ward",
    booPageCount: 300,
    booExcerpt: "https://www.globalgreyebooks.com/case-of-charles-dexter-ward-ebook.html",
    booSummary: "A man become crazy and his family want to help him.",
    booAvgRating: 4.0,
    booCoverImage: "https://2.bp.blogspot.com/-PXvELHryl4s/V7NmWWOG_DI/AAAAAAAAAzA/u-W2uKmHXVwMVZ_F6eYufsSdr361q06zQCLcB/s1600/AffaireCharlesDexterWard.jpg",
    booPublishDate: new Date(),
    fk_user: 1,
    fk_publisher: 1,
    fk_category: 1,
  },
  {
    id_book: 2,
    booTitle: "Le signe des quatres",
    booPageCount: 156,
    booExcerpt: "https://fernandamaterial2014.files.wordpress.com/2014/05/the-sign-of-four.pdf",
    booSummary: "Sherlock Holmes is investigating",
    booAvgRating: 2.5,
    booCoverImage: "https://th.bing.com/th/id/R.f999471f51eab473baa6fe5cf40a7f32?rik=CACwXQt6ldAzHQ&pid=ImgRaw&r=0",
    booPublishDate: "2023-05-15",
    fk_user: 1,
    fk_publisher: 2,
    fk_category: 2
  },
  {
    id_book: 3,
    booTitle: "The art of war",
    booPageCount: 170,
    booExcerpt : "https://www.penguinrandomhouse.ca/books/175362/the-art-of-war-by-sun-tzu-translated-by-the-denma-translation-group/9781590307281/excerpt",
    booSummary: "How to defeat his enemy",
    booAvgRating: 5,
    booCoverImage: "https://th.bing.com/th/id/R.47f2f234b979e69ae71cefb32c768bc2?rik=sURF7fkPdAtjdw&pid=ImgRaw&r=0",
    booPublishDate: 1890,
    fk_user: 1,
    fk_publisher: 3,
    fk_category: 3
  },
  {
    id_book: 4,
    booTitle: "1984",
    booPageCount: 328,
    booExcerpt: "https://i.pinimg.com/originals/71/c8/79/71c879b75d7eadc05301b71e84f98700.jpg",
    booSummary: "A dystopian novel set in a totalitarian society.",
    booAvgRating: 4.5,
    booCoverImage: "https://149522020.v2.pressablecdn.com/wp-content/uploads/2017/01/2a34d8_a6741e88335241308890543d203ad89dmv2.jpg",
    booPublishDate: "1949-06-08",
    fk_user: 2,
    fk_publisher: 4,
    fk_category: 4
  },
  {
    id_book: 5,
    booTitle: "Pride and Prejudice",
    booPageCount: 279,
    booExcerpt: "https://www.piqosity.com/wp-content/uploads/2022/01/vday-pride-prejudice.png",
    booSummary: "A romantic novel that also critiques the British landed gentry.",
    booAvgRating: 4.8,
    booCoverImage: "https://themarblefaunbooksandgifts.com/cdn/shop/products/Peacock_Cover_glitter_card_5_x_7.jpg?v=1571638712",
    booPublishDate: "1813-01-28",
    fk_user: 3,
    fk_publisher: 5,
    fk_category: 5
  },
  {
    id_book: 6,
    booTitle: "Moby Dick",
    booPageCount: 635,
    booExcerpt: "https://imgv2-1-f.scribdassets.com/img/document/369094583/original/c41ae143f4/1712987988?v=1",
    booSummary: "The narrative of Captain Ahab's obsessive quest to kill the white whale.",
    booAvgRating: 4.2,
    booCoverImage: "https://images.booksense.com/images/007/839/9781954839007.jpg",
    booPublishDate: "1851-10-18",
    fk_user: 4,
    fk_publisher: 6,
    fk_category: 6
  },
  {
    id_book: 7,
    booTitle: "The Great Gatsby",
    booPageCount: 180,
    booExcerpt: "https://d1uvxqwmcz8fl1.cloudfront.net/tes/resources/11808773/f4db15b0-f6ca-4326-88d0-06bb0b9e8b13/image?width=500&height=500&version=1538573846780",
    booSummary: "A novel about the American dream and the roaring twenties.",
    booAvgRating: 4.4,
    booCoverImage: "https://i0.wp.com/americanwritersmuseum.org/wp-content/uploads/2018/02/CK-3.jpg?resize=267%2C400&ssl=1",
    booPublishDate: "1925-04-10",
    fk_user: 5,
    fk_publisher: 7,
    fk_category: 7
  },
  {
    id_book: 8,
    booTitle: "To Kill a Mockingbird",
    booPageCount: 281,
    booExcerpt: "https://s3.studylib.net/store/data/008000832_1-192d51c7630257123e10728ad4fbdf6b-768x994.png",
    booSummary: "A novel about racial injustice in the Deep South.",
    booAvgRating: 4.7,
    booCoverImage: "https://m.media-amazon.com/images/I/71FxgtFKcQL._AC_UF1000,1000_QL80_.jpg",
    booPublishDate: "1960-07-11",
    fk_user: 6,
    fk_publisher: 8,
    fk_category: 8
  },
  {
    id_book: 9,
    booTitle: "War and Peace",
    booPageCount: 1225,
    booExcerpt: "https://onehundredpages.files.wordpress.com/2018/11/7.jpeg?w=640&h=853",
    booSummary: "A historical novel that chronicles the French invasion of Russia.",
    booAvgRating: 4.3,
    booCoverImage: "https://m.media-amazon.com/images/I/81oHM-dzefL._AC_UF1000,1000_QL80_.jpg",
    booPublishDate: "1869-01-01",
    fk_user: 7,
    fk_publisher: 9,
    fk_category: 9
  },
  {
    id_book: 10,
    booTitle: "Brave New World",
    booPageCount: 311,
    booExcerpt: "https://cdn.pearltrees.com/s/pic/sq/brave-new-world-aldous-huxley-2948122",
    booSummary: "A dystopian novel set in a futuristic world of genetically modified citizens.",
    booAvgRating: 4.6,
    booCoverImage: "https://static.wixstatic.com/media/ef0e82_888304ba602d4e67867ce6cfa59e944a~mv2.jpg/v1/fill/w_600,h_916,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ef0e82_888304ba602d4e67867ce6cfa59e944a~mv2.jpg",
    booPublishDate: "1932-01-01",
    fk_user: 8,
    fk_publisher: 10,
    fk_category: 10
  }
];
let publishers = [
  {
    id_publisher: 1,
    pubName: "Arkham House"
  },
  {
    id_publisher: 2,
    pubName: "George Newnes Ltd"
  },
  {
    id_publisher: 3,
    pubName: "Shambhala Publications"
  },
  {
    id_publisher: 4,
    pubName: "Secker & Warburg"
  },
  {
    id_publisher: 5,
    pubName: "T. Egerton"
  },
  {
    id_publisher: 6,
    pubName: "Harper & Brothers"
  },
  {
    id_publisher: 7,
    pubName: "Charles Scribner's Sons"
  },
  {
    id_publisher: 8,
    pubName: "J.B. Lippincott & Co."
  },
  {
    id_publisher: 9,
    pubName: "The Russian Messenger"
  },
  {
    id_publisher: 10,
    pubName: "Chatto & Windus"
  }
];
let authors = [
  {
    id_author: 1,
    autFirstName: "Howard Phillips",
    autLastName: "Lovecraft"
  },
  {
    id_author: 2,
    autFirstName: "Arthur Conan",
    autLastName: "Doyle"
  },
  {
    id_author: 3,
    autFirstName: "Sun",
    autLastName: "Tzu"
  },
  {
    id_author: 4,
    autFirstName: "George",
    autLastName: "Orwell"
  },
  {
    id_author: 5,
    autFirstName: "Jane",
    autLastName: "Austen"
  }
];

let categories = [
  {
    id_category: 1,
    catName: "horror"
  },
  {
    id_category: 2,
    catName: "mystery"
  },
  {
    id_category: 3,
    catName: "military strategy"
  },
  {
    id_category: 4,
    catName: "dystopian"
  },
  {
    id_category: 5,
    catName: "romance"
  },
  {
    id_category: 6,
    catName: "adventure"
  },
  {
    id_category: 7,
    catName: "fiction"
  },
  {
    id_category: 8,
    catName: "historical"
  },
  {
    id_category: 9,
    catName: "classic"
  },
  {
    id_category: 10,
    catName: "science fiction"
  }
];

let users = [
  {
    id_user: 1,
    usePseudo: "etml",
    usePassword: "etml",
    useJoinDate: "2024-03-02 09:10:36",
    useBookCount: 3,
    useReviewCount: 3
  },
  {
    id_user: 2,
    usePseudo: "george_orwell_fan",
    usePassword: "1984lover",
    useJoinDate: "2024-03-10 11:20:45",
    useBookCount: 1,
    useReviewCount: 1
  },
  {
    id_user: 3,
    usePseudo: "jane_austen_lover",
    usePassword: "prideandprejudice",
    useJoinDate: "2024-04-15 14:30:22",
    useBookCount: 1,
    useReviewCount: 1
  },
  {
    id_user: 4,
    usePseudo: "melville_fan",
    usePassword: "whalehunter",
    useJoinDate: "2024-05-01 15:40:30",
    useBookCount: 1,
    useReviewCount: 1
  },
  {
    id_user: 5,
    usePseudo: "gatsby_lover",
    usePassword: "jazzage",
    useJoinDate: "2024-05-10 16:50:45",
    useBookCount: 1,
    useReviewCount: 1
  },
  {
    id_user: 6,
    usePseudo: "mockingbird_fan",
    usePassword: "justice",
    useJoinDate: "2024-05-20 18:00:00",
    useBookCount: 1,
    useReviewCount: 1
  },
  {
    id_user: 7,
    usePseudo: "tolstoy_reader",
    usePassword: "russianliterature",
    useJoinDate: "2024-05-25 19:10:15",
    useBookCount: 1,
    useReviewCount: 1
  },
  {
    id_user: 8,
    usePseudo: "huxley_fan",
    usePassword: "bravenewworld",
    useJoinDate: "2024-05-28 20:20:30",
    useBookCount: 1,
    useReviewCount: 1
  }
];

let wrotes = [
  {
    fk_book: 1,
    fk_author: 1
  },
  {
    fk_book: 2,
    fk_author: 2
  },
  {
    fk_book: 3,
    fk_author: 3
  },
  {
    fk_book: 4,
    fk_author: 4
  },
  {
    fk_book: 5,
    fk_author: 5
  },
  {
    fk_book: 6,
    fk_author: 6
  },
  {
    fk_book: 7,
    fk_author: 7
  },
  {
    fk_book: 8,
    fk_author: 8
  },
  {
    fk_book: 9,
    fk_author: 9
  },
  {
    fk_book: 10,
    fk_author: 10
  }
];

let reviews = [
  {
    fk_user: 1,
    fk_book: 1,
    revDate: "2024-03-02 09:13",
    revComment: "good.",
    revRating: 4.5
  },
  {
    fk_user: 1,
    fk_book: 2,
    revDate: "2024-03-02 09:13",
    revComment: "Yes.",
    revRating: 3
  },
  {
    fk_user: 1,
    fk_book: 3,
    revDate: "2024-03-02 09:13",
    revComment: "Perfect.",
    revRating: 5,
  },
  {
    fk_user: 2,
    fk_book: 4,
    revDate: "2024-03-10 11:25",
    revComment: "A chilling view of a dystopian future.",
    revRating: 4.7
  },
  {
    fk_user: 3,
    fk_book: 5,
    revDate: "2024-04-15 14:35",
    revComment: "A timeless romance with sharp social commentary.",
    revRating: 4.9
  },
  {
    fk_user: 4,
    fk_book: 6,
    revDate: "2024-05-01 16:00",
    revComment: "An epic tale of obsession and revenge.",
    revRating: 4.3
  },
  {
    fk_user: 5,
    fk_book: 7,
    revDate: "2024-05-10 17:00",
    revComment: "A masterful portrayal of the Jazz Age.",
    revRating: 4.5
  },
  {
    fk_user: 6,
    fk_book: 8,
    revDate: "2024-05-20 18:30",
    revComment: "A profound exploration of morality and justice.",
    revRating: 4.8
  },
  {
    fk_user: 7,
    fk_book: 9,
    revDate: "2024-05-25 19:45",
    revComment: "A sweeping narrative of love and war.",
    revRating: 4.6
  },
  {
    fk_user: 8,
    fk_book: 10,
    revDate: "2024-05-28 20:45",
    revComment: "A disturbing vision of a controlled society.",
    revRating: 4.7
  }
];

export { books, publishers, categories, users, wrotes, reviews, authors }