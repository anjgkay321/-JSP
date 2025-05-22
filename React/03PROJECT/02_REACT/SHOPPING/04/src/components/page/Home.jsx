import Layout from "../layout/Layout";

import "../../styles/Home.scss"

const home = () => {
  return (
    <Layout>
      <section >BANNER</section>
      <section >
        <ul  className="layout">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
        </ul>
      </section>
    </Layout>
  );
};

export default home;
