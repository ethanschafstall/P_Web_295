CREATE DATABASE IF NOT EXISTS db_books;

USE db_books;

CREATE TABLE t_authors(
   id_author INT AUTO_INCREMENT,
   autFirstName VARCHAR(50)  NOT NULL,
   autLastName VARCHAR(50)  NOT NULL,
   PRIMARY KEY(id_author)
);

CREATE TABLE t_categories(
   id_category INT AUTO_INCREMENT,
   catName VARCHAR(50)  NOT NULL,
   PRIMARY KEY(id_category)
);

CREATE TABLE t_publishers(
   id_publisher INT AUTO_INCREMENT,
   pubName VARCHAR(50)  NOT NULL,
   PRIMARY KEY(id_publisher)
);

CREATE TABLE t_users(
   id_user INT AUTO_INCREMENT,
   usePseudo VARCHAR(50)  NOT NULL,
   usePassword VARCHAR(50)  NOT NULL,
   useJoinDate DATE NOT NULL,
   useBookCount INT NOT NULL,
   useReviewCount INT NOT NULL,
   PRIMARY KEY(id_user)
);

CREATE TABLE t_books(
   id_book INT AUTO_INCREMENT,
   booTitle VARCHAR(100)  NOT NULL,
   booPageCount INT NOT NULL,
   booExcerpt VARCHAR(500) ,
   booSummary VARCHAR(900) ,
   booAvgRating DECIMAL(3,2)  ,
   booCoverImage VARCHAR(300) ,
   booPublishDate DATE NOT NULL,
   fk_user INT NOT NULL,
   fk_publisher INT NOT NULL,
   PRIMARY KEY(id_book),
   FOREIGN KEY(fk_user) REFERENCES t_users(id_user),
   FOREIGN KEY(fk_publisher) REFERENCES t_publishers(id_publisher)
);

CREATE TABLE t_wrote(
   fk_book INT,
   fk_author INT,
   PRIMARY KEY(fk_book, fk_author),
   FOREIGN KEY(fk_book) REFERENCES t_books(id_book),
   FOREIGN KEY(fk_author) REFERENCES t_authors(id_author)
);

CREATE TABLE t_categorize(
   id_book INT,
   fk_category INT,
   PRIMARY KEY(fk_book, fk_category),
   FOREIGN KEY(fk_book) REFERENCES t_books(id_book),
   FOREIGN KEY(fk_category) REFERENCES t_categories(id_category)
);

CREATE TABLE t_review(
   fk_book INT,
   fk_user INT,
   revDate DATE NOT NULL,
   revComment VARCHAR(900) ,
   revRating DECIMAL(3,2)   NOT NULL,
   PRIMARY KEY(fk_book, fk_user),
   FOREIGN KEY(fk_book) REFERENCES t_books(id_book),
   FOREIGN KEY(fk_user) REFERENCES t_users(id_user)
);

-- Authors
INSERT INTO t_authors (autFirstName, autLastName) VALUES
('J.K.', 'Rowling'),
('Stephen', 'King'),
('George', 'Orwell'),
('Douglas', 'Kennedy');

-- Categories
INSERT INTO t_categories (catName) VALUES
('Fantasy'),
('Horror'),
('Dystopian'),
('Suspense'),
('Fiction'),
('Thriller'),
('Science Fiction'),
('Children\'s literature'),
('Novel');

-- Publishers
INSERT INTO t_publishers (pubName) VALUES
('Bloomsbury'),
('Penguin Random House'),
('HarperCollins'),
('Abacus Books');

-- Users
INSERT INTO t_users (usePseudo, usePassword, useJoinDate, useBookCount, useReviewCount) VALUES
('booklover123', 'password123', '2023-05-10', 10, 5),
('reader456', 'securepass', '2023-07-20', 5, 2),
('bibliophile789', 'strongpassword', '2023-09-15', 15, 8),
('ethanschafstall', 'password123', '2023-09-15', 15, 8);

-- Books
INSERT INTO t_books (booTitle, booPageCount, booExcerpt, booSummary, booAvgRating, booCoverImage, booPublishDate, fk_user, fk_publisher) VALUES
('Harry Potter and the Philosopher''s Stone', 320, 'The boy who lived...', 'First book in the Harry Potter series.', 4.5, 'harry_potter_1.jpg', '1997-06-26', 1, 1),
('The Shining', 447, 'All work and no play makes Jack a dull boy.', 'A psychological horror novel.', 4.2, 'the_shining.jpg', '1977-01-28', 2, 2),
('1984', 328, 'It was a bright cold day in April...', 'A dystopian novel.', 4.8, '1984.jpg', '1949-06-08', 3, 3),
('The Dead Heart', 208, 'That dumbshit map. I`d been seduced by it. Seduced by its possibilities. 
That map had brought me here ...That map had been a serious mistake`', 'The map in question is of Australia, 
stumbled across in a second-hand bookshop by American journalist Nick Hawthorne, en route to another dead-end hack job in Akron, 
Ohio. Seduced by all that wilderness, all that NOTHING, Nick decides to put his midlife crisis on hold and light out to the ultimate 
nowheresville - where a chance encounter throws him into a sun-baked orgy of surf, sex and swill, and a nightmare from which there is no escape. 
`Douglas Kennedy might never be allowed into Australia again. This is a crazy, compulsive ultimately serious thriller and a bravura fictional 
debut from one of our best travel writers` Philip Kerr', 4.8, 'https://m.media-amazon.com/images/I/81-NNnKYezL._AC_UF1000,1000_QL80_.jpg', '1995-04-13', 4, 4);

-- Categorize
INSERT INTO t_categorize (fk_book, fk_category) VALUES
(1, 1), -- Harry Potter and the Philosopher cateogized as Fantasy
(1, 8), -- Harry Potter and the Philosopher cateogized as Children's literature
(1, 9), -- Harry Potter and the Philosopher cateogized as Novel
(2, 9), -- The Shining cateogized as Novel
(3, 3), -- 1984 cateogized as Dystopian
(3, 7), -- 1984 cateogized as Science Fiction
(4, 4), -- The Dead Heart cateogized as Suspense
(4, 5), -- The Dead Heart cateogized as Fiction
(4, 6); -- The Dead Heart cateogized as Thriller

-- Wrote
INSERT INTO t_wrote (fk_book, fk_author) VALUES
(1, 1), -- J.K. Rowling wrote Harry Potter
(2, 2), -- Stephen King wrote The Shining
(3, 3), -- George Orwell wrote 1984
(4, 4); -- Douglas Kennedy wrote The Dead Heart

-- Reviews
INSERT INTO t_review (fk_book, fk_user, revDate, revComment, revRating) VALUES
(1, 1, '2023-06-15', 'Amazing book, loved every page!', 5),
(2, 2, '2023-08-01', 'Terrifying! Couldn''t put it down.', 4),
(3, 3, '2023-10-20', 'A classic that everyone should read.', 5),
(4, 4, '2024-03-19', 'Had to read this book for ECG class and I really enjoyed it.', 5);