export * from './colors'
export * from './media'

export const theme = (...args) => props =>
  args.reduce((v, arg) => v[arg], props.theme)
