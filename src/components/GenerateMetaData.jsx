export async function generateMetadata({ params }) {
  return {
    title: `tutors ${params.id}`,
  }
}