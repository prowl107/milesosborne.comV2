import { useState } from "react";
import {
  sanityClient,
  urlFor,
  usePreviewSubscription,
  PortableText,
} from "../../lib/sanity";

const documentationQuery = `*[_type == "documentation" && slug.current == $slug][0]{
  title,
  content,
  _id,
  project->{
  projectName,
  slug,
}
}`;


export default function OneRecipe({ data, preview }) {
  if (!data) return <div>Loading...</div>;
  const { data: documentation } = usePreviewSubscription(documentationQuery, {
    params: { slug: data.documentation?.slug },
    initialData: data,
    enabled: preview,
  });

  return (
    <div
      id="wrapper"
      style={{ height: 100 + "vh", backgroundColor: "#1b1c1c" }}
    >
      <section id="main" className="wrapper style1">
        <div className="inner">
          <header className="major">
            <h1>Generic Page</h1>
            <h1>{documentation?.title}</h1>
            <p>Lorem ipsum dolor sit magna consectetur</p>
          </header>
          <span className="image main">
            {/* <img
              src="/images/minimal-abstract-background-5k-hi-1920x1080.jpg"
              alt=""
            /> */}
          </span>
          <PortableText blocks={documentation?.content}></PortableText>
          <p>
            Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Pellentesque venenatis dolor imperdiet dolor
            mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor
            sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet,
            fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit.
            Donec urna ex, lacinia in purus ac, pretium pulvinar mauris.
            Curabitur sapien risus, commodo eget turpis at, elementum convallis
            elit. Pellentesque enim turpis, hendrerit tristique.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Ddocumentationid vehicula viverra. Nunc ultrices eros ut ultricies
            condimentum. Mauris risus lacus, blandit sit amet venenatis non,
            bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at,
            euismod in lectus. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas. In non lorem sit amet
            elit placerat maximus. Pellentesque aliquam maximus risus, vel
            venenatis mauris vehicula hendrerit.
          </p>
          <p>
            Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Pellentesque venenatis dolor imperdiet dolor mattis sagittis.
            Praesent rutrum sem diam, vitae egestas enim auctor sit amet.
            Pellentesque leo mauris, consectetur id ipsum sit amet, fersapien
            risus, commodo eget turpis at, elementum convallis elit.
            Pellentesque enim turpis, hendrerit tristique lorem ipsum dolor.
          </p>
        </div>
      </section>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    `*[_type == "documentation" && defined(slug.current)]{
      "params": {
        "slug": slug.current
      }
    }`
  );

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const documentation = await sanityClient.fetch(documentationQuery, { slug });
  return { props: { data: { documentation }, preview: true } };
}
