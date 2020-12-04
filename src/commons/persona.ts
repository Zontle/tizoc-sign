export interface IPersona {
  username: string
  firstName: string
  lastName: string
  avatarSrc: string
  email: string
  address?: string
  phone?: string
}
export enum PersonaRole {
  registered = 'Registered',
  verified = 'Verified',
  clerk = 'Clerk',
  external = 'External'
}
export const PersonaColors = {
  [PersonaRole.registered]: "blue",
  [PersonaRole.verified]: "teal",
  [PersonaRole.clerk]: "yellow",
  [PersonaRole.external]: "purple"
}
