const varNames = [
  'CONTENTFUL_SPACE',
  'CONTENTFUL_ENVIRONMENT',
  'CONTENTFUL_DELIVERY_TOKEN',
  'CONTENTFUL_MANAGEMENT_TOKEN',
] as const

type EnvVars = NodeJS.ProcessEnv & {
  [K in typeof varNames[number]]: string
}

const varsAreSet = (env: NodeJS.ProcessEnv): env is EnvVars => varNames
  .reduce<boolean>((acc, cur) => (process.env[cur] ? acc : false), true)

export const getEnv = () => {
  if (varsAreSet(process.env)) {
    return { ...process.env }
  }
  throw new Error('Environment variables not set')
}