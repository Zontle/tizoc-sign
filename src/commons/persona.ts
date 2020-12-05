export interface IPersona {
  tag: string
  firstName: string
  lastName: string
  avatarSrc?: string
  proof?: string
  proofMetadata?: string
  email?: string
}
export enum PersonaRole {
  registered = 'Registered',
  verified = 'Verified',
  company = 'Company',
  backoffice = 'Backoffice',
  service = 'Service'
}
export const PersonaColors = {
  [PersonaRole.registered]: "blue",
  [PersonaRole.verified]: "teal",
  [PersonaRole.company]: "purple",
  [PersonaRole.service]: "yellow",
  [PersonaRole.backoffice]: "red"
}
