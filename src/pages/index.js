import React from "react"
import Header from '../components/hedaer';
import Repos from '../components/repos';
import CodigoFacilito from '../components/codigofacilito';
import Medium from "../components/medium";
import EdNav from "../components/education-nav";


export default () => <div>
  <Header />
  <EdNav />
  <Repos />
  <CodigoFacilito />
  <Medium />
</div>