// https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/
// Defines a model for transforming the data from json (within the mock-product file) to a json format ready to be exported to mysql.


const bookModel = (sequelize, DataTypes) => {
    return sequelize.define(
        "t_books",
        {
            id_book: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            booTitle: {
                type: DataTypes.STRING(100),
            },
            booPageCount: {
                type: DataTypes.INTEGER,
            },
            // Not sure if i need to define a min/max string length in validate if notUrl isn't before.
            booExtract: {
                type: DataTypes.STRING(300),
            },
            booSummary: {
                type: DataTypes.STRING(100),
            },
            booAvgRating: {
                type: DataTypes.DECIMAL(3,2),
            },
            booCoverImage: {
                type: DataTypes.STRING(300),
            },
            booPublishDate: {
                type: DataTypes.DATE,
            },
            fk_user: {
                type: DataTypes.INTEGER,
            },
            fk_publisher: {
                type: DataTypes.INTEGER,
            },
            fk_category: {
                type: DataTypes.INTEGER,
            },
        },
        {
            timestamps: true,
            createdAt: "created",
            updatedAt: false,
        }
    );
};

const reviewModel = (sequelize, DataTypes) => {
    return sequelize.define(
        "t_reviews",
        {
            // Not sure if any additional info for foreign keys are needed
            fk_book: {
                type: DataTypes.INTEGER,
            },
            fk_user: {
                type: DataTypes.INTEGER,
            },
            revDate: {
                type: DataTypes.DATE,
            },
            revComment: {
                type: DataTypes.STRING(300),
            },
            revRating: {
                type: DataTypes.DECIMAL(3, 2),
            },
        },
        {
            timestamps: true,
            createdAt: "created",
            updatedAt: false,
        }
    );
};

const userModel = (sequelize, DataTypes) => {
    return sequelize.define(
        "t_users",
        {
            id_user: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            usePseudo: {
                type: DataTypes.STRING(50),
            },
            usePassword: {
                type: DataTypes.STRING(50),
            },
            useJoinDate: {
                type: DataTypes.DATE,
            },
            useBookCount: {
                type: DataTypes.INTEGER,
            },
            useReviewCount: {
                type: DataTypes.INTEGER,
            },
        },
        {
            timestamps: true,
            createdAt: "created",
            updatedAt: false,
        }
    );
};

const wroteModel = (sequelize, DataTypes) => {
    return sequelize.define(
        "t_wrote",
        {
            fk_author: {
                type: DataTypes.INTEGER,
            },
            fk_book: {
                type: DataTypes.INTEGER,
            },
        },
        {
            timestamps: true,
            createdAt: "created",
            updatedAt: false,
        }
    );
};

const publisherModel = (sequelize, DataTypes) => {
    return sequelize.define(
        "t_publishers",
        {
            id_publisher: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            pubName: {
                type: DataTypes.STRING(50),
            },
        },
        {
            timestamps: true,
            createdAt: "created",
            updatedAt: false,
        }
    );
};

const categoryModel = (sequelize, DataTypes) => {
    return sequelize.define(
        "t_categories",
        {
            id_category: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            catName: {
                type: DataTypes.STRING(50),
            },
        },
        {
            timestamps: true,
            createdAt: "created",
            updatedAt: false,
        }
    );
};

export { bookModel, reviewModel, userModel, wroteModel, publisherModel, categoryModel };
