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
                    notNull: {
                        msg: "Le titre est requis",
                    },
                    len: {
                        args: [1, 100],
                        msg: "Le titre doit comporter entre 1 et 100 caractères",
                    },
                },
            },
            booPageCount: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "Le nombre de pages est requis",
                    },
                    min: {
                        args: [1],
                        msg: "Le nombre de pages doit être supérieur à 0",
                    },
                },
            },
            booExcerpt: {
                type: DataTypes.STRING(300),
                validate: {
                    len: {
                        args: [0, 300],
                        msg: "L'extrait doit comporter au plus 300 caractères",
                    },
                },
            },
            booSummary: {
                type: DataTypes.STRING(100),
                validate: {
                    len: {
                        args: [0, 100],
                        msg: "Le résumé doit comporter au plus 100 caractères",
                    },
                },
            },
            booAvgRating: {
                type: DataTypes.DECIMAL(3, 2),
                validate: {
                    isDecimal: {
                        msg: "La note moyenne doit être un nombre décimal",
                    },
                    min: {
                        args: [0],
                        msg: "La note moyenne doit être d'au moins 0",
                    },
                    max: {
                        args: [5],
                        msg: "La note moyenne doit être au plus 5",
                    },
                },
            },
            booCoverImage: {
                type: DataTypes.STRING(300),
                validate: {
                    isUrl: {
                        msg: "L'image de couverture doit être une URL valide",
                    },
                },
            },
            booPublishDate: {
                type: DataTypes.DATE,
            },
            fk_user: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "L'identifiant de l'utilisateur est requis",
                    },
                },
            },
            fk_publisher: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "L'identifiant de l'éditeur est requis",
                    },
                },
            },
            fk_category: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "L'identifiant de la catégorie est requis",
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

const reviewModel = (sequelize, DataTypes) => {
    return sequelize.define(
        "t_reviews",
        {
            fk_user: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "L'identifiant de l'utilisateur est requis",
                    },
                },
            },
            fk_book: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "L'identifiant du livre est requis",
                    },
                },
            },
            revDate: {
                type: DataTypes.DATE,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "La date de l'avis est requise",
                    },
                },
            },
            revComment: {
                type: DataTypes.STRING(300),
                validate: {
                    len: {
                        args: [0, 300],
                        msg: "Le commentaire doit comporter au maximum 300 caractères",
                    },
                },
            },
            revRating: {
                type: DataTypes.DECIMAL(3, 2),
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "La note est requise",
                    },
                    min: {
                        args: [0],
                        msg: "La note doit être d'au moins 0",
                    },
                    max: {
                        args: [5],
                        msg: "La note doit être au maximum de 5",
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
            },
            usePassword: {
                type: DataTypes.STRING(),
            },
            useJoinDate: {
                type: DataTypes.STRING,
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
                primaryKey: true,
            },
            fk_book: {
                type: DataTypes.INTEGER,
                primaryKey: true,
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

const authorModel = (sequelize, DataTypes) => {
    return sequelize.define(
        "t_authors",
        {
            id_author: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            autFirstName: {
                type: DataTypes.STRING(50),
            },
            autLastName: {
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

export { bookModel, reviewModel, userModel, wroteModel, publisherModel, categoryModel, authorModel };
