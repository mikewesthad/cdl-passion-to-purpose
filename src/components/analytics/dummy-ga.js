const log = console.log;
const stringifyArgs = (...args) => args.map(arg => JSON.stringify(arg, null, 2));

const dummy = {
  initialize: (...args) => log("Analytics initialized: ", ...stringifyArgs(args)),
  pageview: (...args) => log("Analytics pageview: ", ...stringifyArgs(args)),
  event: (...args) => log("Analytics event: ", ...stringifyArgs(args))
};

export default dummy;
