    
const Event = require('../../models/experience');
  
module.exports = {
    experience: async () => {
      try {
        const experience = await Event.find();
        return experience.map(exp => {
          return {...exp._doc, _id: exp.id};
        });
      } catch (err) {
        throw err;
      }
    },
    createExperience: async args => {
      const experience = new Experience({
        title: args.experienceInput.title,
        company: args.experienceInput.company,
        startDate: new Date(args.experienceInput.startDate),
        endDate: new Date(args.experienceInput.endDate),
        description: args.experienceInput.description
      });
      try {
        const result = await experience.save();
        return result.map(exp => {
            return {...exp._doc, _id: exp.id};
          });
      } catch (err) {
        console.log(err);
        throw err;
      }
    }
  };