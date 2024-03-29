import mongoose from "mongoose";

// Define the enums
export const AnimalStatus = {
  Healthy: 'Healthy',
  Sick: 'Sick',
  Deceased: 'Deceased',
};

export const AnimalTypes = {
  Bird: 'Bird',
  Pet: 'Pet',
  LiveStock: 'LiveStock',
};

const animalSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    type:{
        type: String,
        enum: Object.values(AnimalTypes), // Use enum to specify the possible values
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    birthDate: {
        type: Date,
        required: true,
    },
    deathDate: {
        type: Date,
        required: false,
    },
    status: {
        type: String,
        enum: Object.values(AnimalStatus), // Use enum to specify the possible values
        required: true,
    },
    pictureUrl: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
});

const animal = mongoose.model("Animals", animalSchema);

export { animal, animalSchema };

// const animals = [
//     {
//       id: 1,
//       type: AnimalTypes.Pet,
//       name: 'Buddy',
//       birthDate: new Date('2018-05-15'),
//       status: AnimalStatus.Healthy,
//       pictureUrl:
//         'https://cdn.pixabay.com/photo/2016/12/05/11/39/fox-1883658_1280.jpg',
//       description:
//         'Buddy is a very friendly dog. He loves to play fetch and go for walks. He is very loyal and loves to be around people. He is a great companion for anyone who loves dogs.',
//       farmId: 1,
//     },
//     {
//       id: 2,
//       type: AnimalTypes.Pet,
//       name: 'Whiskers',
//       birthDate: new Date('2019-02-20'),
//       deathDate: new Date('2022-09-10'),
//       status: AnimalStatus.Healthy,
//       pictureUrl:
//         'https://cdn.pixabay.com/photo/2014/12/12/19/45/lion-565820_1280.jpg',
//       description:
//         'Whiskers is a playful cat who loves to chase mice and nap in the sun. She is very independent and enjoys exploring the outdoors. She is a great mouser and keeps the barn free of pests.',
//       farmId: 1,
//     },
//     {
//       id: 3,
//       type: AnimalTypes.LiveStock,
//       name: 'Mooey',
//       birthDate: new Date('2017-11-10'),
//       status: AnimalStatus.Healthy,
//       pictureUrl:
//         'https://cdn.pixabay.com/photo/2013/06/29/21/18/wolf-142173_1280.jpg',
//       description:
//         'Mooey is a gentle cow who loves to graze in the pasture. She provides fresh milk for the farm and enjoys being brushed and petted. She is a favorite among visitors to the farm.',
//       farmId: 2,
//     },
//     {
//       id: 4,
//       type: AnimalTypes.LiveStock,
//       name: 'Thunder',
//       birthDate: new Date('2016-08-03'),
//       status: AnimalStatus.Healthy,
//       pictureUrl:
//         'https://cdn.pixabay.com/photo/2018/07/14/17/46/raccoon-3538081_1280.jpg',
//       description:
//         'Thunder is a majestic horse with a gentle temperament. He enjoys long rides through the countryside and has a strong bond with his rider.',
//       farmId: 2,
//     },
//     {
//       id: 5,
//       type: AnimalTypes.Bird,
//       name: 'Cluck',
//       birthDate: new Date('2020-04-12'),
//       status: AnimalStatus.Healthy,
//       pictureUrl:
//         'https://cdn.pixabay.com/photo/2016/12/05/11/39/fox-1883658_1280.jpg',
//       description:
//         'Cluck is a lively chicken who loves to explore the farmyard. She lays delicious eggs and enjoys scratching in the dirt for bugs.',
//       farmId: 3,
//     },
//     {
//       id: 6,
//       type: AnimalTypes.LiveStock,
//       name: 'Snuffles',
//       birthDate: new Date('2018-12-05'),
//       status: AnimalStatus.Sick,
//       pictureUrl:
//         'https://cdn.pixabay.com/photo/2014/12/12/19/45/lion-565820_1280.jpg',
//       description:
//         'Snuffles is a cheerful pig who has unfortunately fallen ill recently. Despite feeling under the weather, he still enjoys snacking on apples and taking mud baths.',
//       farmId: 3,
//     },
//     {
//       id: 7,
//       type: AnimalTypes.LiveStock,
//       name: 'Woolly',
//       birthDate: new Date('2019-10-25'),
//       status: AnimalStatus.Healthy,
//       pictureUrl:
//         'https://cdn.pixabay.com/photo/2016/12/05/11/39/fox-1883658_1280.jpg',
//       description:
//         'Woolly is a fluffy sheep with a warm fleece. She loves grazing in the fields and enjoys being around other sheep. She provides soft wool for knitting and keeps the pasture well-trimmed.',
//       farmId: 4,
//     },
//     {
//       id: 8,
//       type: AnimalTypes.LiveStock,
//       name: 'Billy',
//       birthDate: new Date('2018-04-18'),
//       status: AnimalStatus.Healthy,
//       pictureUrl:
//         'https://cdn.pixabay.com/photo/2014/12/12/19/45/lion-565820_1280.jpg',
//       description:
//         'Billy is a curious goat who is always climbing and exploring. He has a taste for fresh greens and enjoys nibbling on anything he can find. His playful nature makes him a favorite among visitors to the farm.',
//       farmId: 4,
//     },
//     {
//       id: 9,
//       type: AnimalTypes.Pet,
//       name: 'Hoppy',
//       birthDate: new Date('2020-01-07'),
//       status: AnimalStatus.Healthy,
//       pictureUrl:
//         'https://cdn.pixabay.com/photo/2013/06/29/21/18/wolf-142173_1280.jpg',
//       description:
//         'Hoppy is an energetic rabbit who loves hopping around the garden. She enjoys munching on carrots and lettuce and is always on the lookout for a cozy spot to nap.',
//       farmId: 5,
//     },
//     {
//       id: 10,
//       type: AnimalTypes.Bird,
//       name: 'Quacky',
//       birthDate: new Date('2017-06-14'),
//       deathDate: new Date('2023-03-19'),
//       status: AnimalStatus.Deceased,
//       pictureUrl:
//         'https://cdn.pixabay.com/photo/2018/07/14/17/46/raccoon-3538081_1280.jpg',
//       description:
//         'Quacky was a friendly duck who enjoyed swimming in the pond and waddling around the farmyard. She will be fondly remembered for her cheerful quacks and playful antics.',
//       farmId: 5,
//     },
//     {
//       id: 11,
//       type: AnimalTypes.Pet,
//       name: 'Buddy',
//       birthDate: new Date('2018-05-15'),
//       status: AnimalStatus.Healthy,
//       pictureUrl:
//         'https://cdn.pixabay.com/photo/2016/12/05/11/39/fox-1883658_1280.jpg',
//       description:
//         'Buddy is a very friendly dog. He loves to play fetch and go for walks. He is very loyal and loves to be around people. He is a great companion for anyone who loves dogs.',
//       farmId: 1,
//     },
//     {
//       id: 12,
//       type: AnimalTypes.Pet,
//       name: 'Whiskers',
//       birthDate: new Date('2019-02-20'),
//       deathDate: new Date('2022-09-10'),
//       status: AnimalStatus.Healthy,
//       pictureUrl:
//         'https://cdn.pixabay.com/photo/2014/12/12/19/45/lion-565820_1280.jpg',
//       description:
//         'Whiskers is a playful cat who loves to chase mice and nap in the sun. She is very independent and enjoys exploring the outdoors. She is a great mouser and keeps the barn free of pests.',
//       farmId: 1,
//     },
// ];