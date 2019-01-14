import * as rules from "./rules";

export const getErrorMessage = options =>
  options.message !== undefined ? options.message : false;

/**
 * Add all rules to Context class using prototype Interface
 * this way we separate the rules module from the context
 * class to and not obligated to create all rules as class
 * methods.
 * @param {Context} context
 * @return {Context} newContext
 */
export const contextWrapper = context => {
  const newContext = context;
  Object.entries(rules).forEach(([name, func]) => {
    // assign new function with name of the exported
    // function in module of rules that take
    newContext.prototype[name] = function wrapped(...args) {
      // eslint-disable-next-line
			return this._add(func(...args));
    };
  });
  return newContext;
};

export const isObjectsEquals = (obj1, obj2) =>
  JSON.stringify(obj1) === JSON.stringify(obj2);

export const isEmpty = obj => isObjectsEquals(obj, {});