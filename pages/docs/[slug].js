import { useRouter } from "next/router";

import {
  sanityClient,
  urlFor,
  usePreviewSubscription,
  PortableText,
} from "../../lib/sanity";

const documentationQuery = `  *[_type == "project" && slug.current == $slug][0]{
  projectName,
  slug,
"docs": *[_type == "documentation" && references(^._id)][0],
}`;

export default function documentation({ projectDoc }) {
  const router = useRouter();
  if (!router.isFallback && !projectDoc?.slug) {
    return <Error statusCode={404} />;
  }

  if (!projectDoc) return <div>Loading...</div>;

  return (
    <div
      id="wrapper"
      style={{ height: 100 + "vh", backgroundColor: "#1b1c1c" }}
    >
      <section id="main" className="wrapper style1 documentation">
        <div className="inner">
          <header className="major">
            <h1>{projectDoc?.projectName}</h1>
            <p>Lorem ipsum dolor sit magna consectetur</p>
          </header>
          {getDocumentBanner({ projectDoc })}
          <PortableText blocks={projectDoc?.docs?.content} />
        </div>
      </section>
    </div>
  );
}

function getDocumentBanner({ projectDoc }) {
  {
    if (projectDoc.docs.banner != null) {
      return (
        <span class="image main">
          <img src={urlFor(projectDoc.docs.banner)?.url()} />
        </span>
      );
    }
  }
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    `*[_type == "project" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps({ params, preview = false }) {
  const projectDoc = await sanityClient.fetch(documentationQuery, {
    slug: params.slug,
  });
  return {
    props: { preview, projectDoc },
  };
}

// export async function getStaticProps({ params }) {
//   const { slug } = params;
//   const document = await sanityClient.fetch(documentationQuery, { slug });
//   return { props: { data: { document }, preview: true } };
// }

// export async function getStaticProps(params){
//   const {slug} = params;
//   const docLink = await sanityClient.fetch(`*[_type == "documentation" && defined(slug.current)]{
//     slug,
//       content,
//      "project": *[_type == "project" && references(^._id)]}`)
//   const doc = await sanityClient.fetch(documentationQuery,slug);
//   return {props: {docLink}};
// }
