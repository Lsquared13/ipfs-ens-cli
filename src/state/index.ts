import makeStore from './store';

export default makeStore;

export * from './store';
export * from './DeployDuck';
export * from './GitDuck';

import * as Selectors from './sharedSelectors';
export import SharedSelectors = Selectors;

import * as Types from './sharedTypes';
export import SharedTypes = Types;