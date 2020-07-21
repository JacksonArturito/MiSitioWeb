import React from "react";
import { useStaticQuery, grap, graphql } from "gatsby";
import Posts from "./posts";
import Course from "./courses";

export default() =>{
    const data= useStaticQuery(graphql `
    {
        codigofacilitoJson{
          data{
            courses{
              title
              progress
              url
            }
          }
        }
      }`);
      console.log(data);
    return(
        <section>
            <div className="mt-24">
                <div className="max-w-4xl mx-auto">
                  <Posts data={data.codigofacilitoJson.data.courses} 
                  card={Course}
                  title="Mis Cursos online en CodigoFacilito"/>
                </div>
            </div>
        </section>
    );
}