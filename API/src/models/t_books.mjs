// https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/
// Defines a model for transforming the data from json (within the mock-product file) to a json format ready to be exported to mysql.
const BookModel = (sequelize, DataTypes) => {
    return sequelize.define(
        "Books",
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

        },
        {
            timestamps: true,
            createdAt: "created",
            updatedAt: false,
        }
    );
};

export { BookModel };
