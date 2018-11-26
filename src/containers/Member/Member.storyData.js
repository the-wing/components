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
};
