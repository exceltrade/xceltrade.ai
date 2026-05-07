export const homeQuery = `
  *[_type == "home"][0]{
    title,
    subtitle,
    heroImage,
    sections[]{
      title,
      content
    }
  }
`
