export const resolvers = {
  Mutation: {
    logUserIn: (_, { token }, { cache }) => {
      localStorage.setItem('token', token);
      cache.writeData({
        data: {
          isLoggedIn: true,
        },
      });
      return null;
    },
    logUserOut: (_, __, { cache }) => {
      localStorage.removeItem('token');
      window.location = '/';
      return null;
    },
  },
};

// export const logUserIn = {
//   Mutation: {
//     logUserIn: (_, { token }, { cache }) => {
//       console.log('logUserIn');
//       localStorage.setItem('token', token);
//       cache.writeData({
//         data: {
//           isLoggedIn: true,
//         },
//       });
//       return null;
//     },
//   },
// };
// export const logUserOut = {
//   Mutation: {
//     logUserOut: (_, __, { cache }) => {
//       console.log('logUserOut');
//       localStorage.removeItem('token');
//       window.location = '/';
//       return null;
//     },
//   },
// };
