import swaggerJSDoc from "swagger-jsdoc";
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API self-service-machine",
            version: "1.0.0",
            description:
                "API REST permettant de gérer l'application self-service-machine",
        },
        servers: [
            {
                url: "http://localhost:3000",
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
            schemas: {
                Books: {
                    type: "object",
                    required: ["id_book", "booTitle", "booPublishDate" ],
                    properties: {
                        id_book: {
                            type: "integer",
                            description: "Unique id for the book.",
                        },
                        booTitle: {
                            type: "string",
                            description: "The title of the book.",
                        },
                        booPageCount: {
                            type: "integer",
                            description: "The number of pages that the book has.",
                        },
                        booExcerpt: {
                            type: "string",
                            description: "An book's extract.",
                        },
                        booSummary : {
                            type: "string",
                            description: "The book's summary.",
                        },
                        booAvgRating : {
                            type: "float",
                            description: "The book's rating on a scale from 0 to 5.",
                        },
                        booCoverImage : {
                            type: "string",
                            description: "A link for the cover image of the book.",
                        },
                        booPublishDate: {
                            type: "string",
                            format: "date-time",
                            description: "The date and time of the publish .",
                        },
                    },
                },
                Review: {
                    type: "object",
                    required: ["fk_book", "fk_user", "revRating"],
                    properties: {
                        fk_book: {
                            type: "integer",
                            description: "Foreign key of the book, it is unique.",
                        },
                        fk_user: {
                            type: "integer",
                            description: "Foreign key of the user, it is unique.",
                        },
                        revDate: {
                            type: "string",
                            format: "date-time",
                            description: "The date and time of the review .",
                        },
                        revComment: {
                            type: "string",
                            description: "The comment of the review, it isn't mandatory.",
                        },
                        revRating : {
                            type: "float",
                            description: "The review's rating on a scale from 0 to 5.",
                        },
                    },
                },
                Users: {
                    type: "object",
                    required: ["id_user", "usePseudo", "usePassword", "useJoinDate", "useBookCount", "useReviewCount"],
                    properties: {
                        id_user: {
                            type: "integer",
                            description: "Unique id for the user.",
                        },
                        usePseudo: {
                            type: "integer",
                            description: "The title of the book.",
                        },
                        usePassword: {
                            type: "string",
                            description: "The password of the user.",
                        },
                        useJoinDate: {
                            type: "string",
                            format: "date-time",
                            description: "The joining date and time of the user.",
                        },
                        useBookCount: {
                            type: "integer",
                            description: "Number of books that the user published.",
                        },
                        useReviewCount : {
                            type: "integer",
                            description: "Number of reviews that the user posted.",
                        },
                    },
                },
                wrote: {
                    type: "object",
                    required: ["fk_book", "fk_author"],
                    properties: {
                        fk_book: {
                            type: "integer",
                            description: "Unique id for the user.",
                        },
                        fk_author: {
                            type: "integer",
                            description: "The title of the book.",
                        },
                    },
                },
            },
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
    },
    apis: ["./src/routes/*.mjs"], // Chemins vers vos fichiers de route
};
const swaggerSpec = swaggerJSDoc(options);
export { swaggerSpec };