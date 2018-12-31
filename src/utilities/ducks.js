export const createReducer = (initialState, handlers) =>
  (state = initialState, { type, payload }) =>
    handlers.hasOwnProperty(type)
      ? handlers[type](state, payload)
      : state

export const createAsyncActionType = (prefix, steps=['REQUEST', 'SUCCESS', 'FAILURE']) =>
  steps.reduce(
    (acc, suffix) => ({ ...acc, [suffix]: `${prefix}_${suffix}` }),
    {})
