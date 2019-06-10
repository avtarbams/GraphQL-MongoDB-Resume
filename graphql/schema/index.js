const { buildSchema } = require('graphql');

module.exports = buildSchema(`

type Experience {
    _id: ID!
    title: String!
    company: String!
    startDate: String!
    endDate: String!
    description: String!
}

input ExperienceInput {
    title: String!
    company: String!
    startDate: String!
    endDate: String!
    description: String!
}

type RootQuery {
    experience: [Experience!]!
}

type RootMutation {
    createExperience(experienceInput:ExperienceInput): Experience
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`);