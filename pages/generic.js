import Image from 'next/image'

const generic = () => {
  return (
    <div id="wrapper" style={{height: 100 + 'vh',backgroundColor:"#1b1c1c"}}>
      <section id="main" className="wrapper style1">
        <div className="inner">
          <header className="major">
            <h1>Generic Page</h1>
            <p>Lorem ipsum dolor sit magna consectetur</p>
          </header>
          <span className="image main">
            <Image src="/images/minimal-abstract-background-5k-hi-1920x1080.jpg" alt=""/>
            {/* <img
              src="/images/minimal-abstract-background-5k-hi-1920x1080.jpg"
              alt=""
            /> */}
          </span>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dapibus rutrum facilisis. className aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Etiam tristique
            libero eu nibh porttitor fermentum. Nullam venenatis erat id
            vehicula viverra. Nunc ultrices eros ut ultricies condimentum.
            Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae
            dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in
            lectus. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. In non lorem sit amet elit
            placerat maximus. Pellentesque aliquam maximus risus, vel venenatis
            mauris vehicula hendrerit.
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
};

export default generic;