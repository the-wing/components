const leslie = {
  industry: 'Government',
  location: 'All Access, Soho',
  name: 'Leslie Knope',
  position: 'Deputy Director of the Pawnee City Department of Parks and Recreation',
};

const ron = {
  industry: 'Government',
  location: 'All Access, Soho',
  name: 'Ron Swanson',
  position: 'Director of the Pawnee City Department of Parks and Recreation',
};

const garry = {
  industry: 'Government',
  location: 'All Access, Soho',
  name: 'Garry Gergich',
  position: 'Employee',
};

const leslieWithAsksAndOfferings = {
  ...leslie,
  asksAndOfferings: [
    {
      title: 'Offering',
      values: ['Waffles', 'Love', 'Friendship', 'Hard Work'],
    },
    {
      title: 'Asking',
      values: ['Also Waffles', 'Joe Biden', 'Ann', 'Fairness', 'More parks'],
    },
  ],
};

const ronWithAsksAndOfferings = {
  ...ron,
  asksAndOfferings: [
    {
      title: 'Offering',
      values: ['Woodworking knowledge', 'Harsh truths', 'Opinions'],
    },
    {
      title: 'Asking',
      values: ['Steak', 'Waffles', 'Peace and quiet'],
    },
  ],
};

const garryWithAsksAndOfferings = {
  ...garry,
  asksAndOfferings: [
    {
      title: 'Offering',
      values: ['Smiles'],
    },
    {
      title: 'Asking',
      values: ['You get his name right please?'],
    },
  ],
};

const leslieWithMessage = {
  ...leslie,
  message:
    'You and Ron Swanson attended the same event yesterday. You are also both interested in waffles.',
};

const ronWithMessage = {
  ...ron,
  message:
    'You and Leslie Knope attended the same event yesterday. You are also both interested in waffles.',
};

const garryWithMessage = {
  ...garry,
  message: "Isn't his name Jerry?",
};

export const data = {
  leslie,
  leslieWithAsksAndOfferings,
  leslieWithMessage,
  leslieWithAsksAndOfferingsAndMessage: {
    ...leslieWithAsksAndOfferings,
    ...leslieWithMessage,
  },
  ron,
  ronWithAsksAndOfferings,
  ronWithMessage,
  ronWithAsksAndOfferingsAndMessage: {
    ...ronWithAsksAndOfferings,
    ...ronWithMessage,
  },
  garry,
  garryWithAsksAndOfferings,
  garryWithMessage,
  garryWithAsksAndOfferingsAndMessage: {
    ...garryWithAsksAndOfferings,
    ...garryWithMessage,
  },
};
