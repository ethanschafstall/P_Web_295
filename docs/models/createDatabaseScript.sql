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
   booExcerpt VARCHAR(300) ,
   booSummary VARCHAR(100) ,
   booAvgRating DECIMAL(3,2)  ,
   booCoverImage VARCHAR(300) ,
   booPublishDate DATE NOT NULL,
   fk_user INT NOT NULL,
   fk_publisher INT NOT NULL,
   fk_category INT NOT NULL,
   PRIMARY KEY(id_book),
   FOREIGN KEY(fk_user) REFERENCES t_users(id_user),
   FOREIGN KEY(fk_publisher) REFERENCES t_publishers(id_publisher),
   FOREIGN KEY(fk_category) REFERENCES t_categories(id_category)
);

CREATE TABLE t_wrote(
   fk_book INT,
   fk_author INT,
   PRIMARY KEY(fk_book, fk_author),
   FOREIGN KEY(fk_book) REFERENCES t_books(id_book),
   FOREIGN KEY(fk_author) REFERENCES t_authors(id_author)
);

CREATE TABLE t_review(
   fk_book INT,
   fk_user INT,
   revDate DATE NOT NULL,
   revComment VARCHAR(300) ,
   revRating DECIMAL(3,2)   NOT NULL,
   PRIMARY KEY(fk_book, fk_user),
   FOREIGN KEY(fk_book) REFERENCES t_books(id_book),
   FOREIGN KEY(fk_user) REFERENCES t_users(id_user)
);
