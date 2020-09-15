type ImageDataProps = {
  alternativeText: string
  url: string
}

export type LogoProps = ImageDataProps

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: ImageDataProps
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: ImageDataProps
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
}
