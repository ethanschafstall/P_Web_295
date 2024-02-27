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
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "The title can not be empty"
                    },
                    notNull: {
                        msg: "The title is a required property",
                    },
                },
            },
            booPageCount: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    isInt: {
                        msg: "Use only numbers for the page count",
                    },
                    notEmpty: {
                        msg: "The page count can not be empty.",
                    },
                    notNull: {
                        msg: "The page count is a required property",
                    },
                    min: {
                        args: [1.0],
                        msg: "The page count must be greater than 1.",
                    },
                    max: {
                        args: [15000.0],
                        msg: "The page count must be less than 15000.",
                    },
                },
            },
            // Not sure if i need to define a min/max string length in validate if notUrl isn't before.
            booExtract: {
                type: DataTypes.STRING(300),
                allowNull: true,
                validate: {
                    notUrl: true,
                    notNull: {
                        msg: "The title is a required property",
                    },
                },
            },
            booSummary: {
                type: DataTypes.STRING(100),
                allowNull: true,
                validate: {
                    
                    }, 
            },
            booAvgRating: {
                type: DataTypes.DECIMAL(3,2),
                allowNull: true,
                validate: {
                    }, 
            },
            booCoverImage: {
                type: DataTypes.STRING(300),
                allowNull: true,
                validate: {
                    }, 
            },
            booPublishDate: {
                type: DataTypes.DATE,
                allowNull: false,
                validate: {
                    }, 
            },
            fk_user: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            fk_publisher: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            fk_category: {
                type: DataTypes.INTEGER,
                allowNull: false,
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
                allowNull: false,
            },
            fk_user: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            revDate: {
                type: DataTypes.DATE,
                allowNull: true,
                validate: {
                },
            },
            revComment: {
                type: DataTypes.STRING(300),
                allowNull: true,
                validate: {
                },
            },
            revRating: {
                type: DataTypes.DECIMAL(3, 2),
                allowNull: false,
                validate: {
                    isInt: {
                        msg: "Use only numbers for the rating",
                    },
                    notEmpty: {
                        msg: "The rating count can not be empty.",
                    },
                    notNull: {
                        msg: "The rating is a required property",
                    },
                    min: {
                        args: [0],
                        msg: "The rating can not be below 0",
                    },
                    max: {
                        args: [5],
                        msg: "The rating can not be above 5.",
                    },
                },
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
                allowNull: false,
            },
            usePassword: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },
            useJoinDate: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            useBookCount: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            useReviewCount: {
                type: DataTypes.INTEGER,
                allowNull: false,
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
                allowNull: false,
            },
            fk_book: {
                type: DataTypes.INTEGER,
                allowNull: false,
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
                allowNull: false,
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
// A faire pour Lucas
};

export { bookModel, reviewModel, userModel, wroteModel, publisherModel, apartModel, categoryModel };
