export interface Certificate {
  id: string;
  course: string;
  institute: string;
  sponsor?: string;
  trainer?: string;
  duration: string;
  tag: string;
}

export const certificates: Certificate[] = [
  {
    id: "flutter-dart-industrial",
    course: "Flutter & Dart Application Development (Industrial Attachment)",
    institute: "PeopleNTech Institute of IT, Dhaka",
    duration: "01 July 2024 – 30 September 2024",
    tag: "Flutter",
  },
  {
    id: "native-android-kotlin",
    course: "Native Android Development with Kotlin",
    institute: "Daffodil International Professional Training Institute (DIPTI)",
    sponsor: "National Skills Development Authority (NSDA)",
    duration: "01 August 2023 – 30 January 2024",
    tag: "Android",
  },
  {
    id: "jetpack-compose",
    course: "Jetpack Compose with Composable UI",
    institute: "Udemy",
    trainer: "Syed Tanvir Ahmad",
    duration: "01 April 2024 – 30 May 2024",
    tag: "Compose",
  },
];
