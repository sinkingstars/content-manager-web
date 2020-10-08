import React, { Fragment } from "react";

export default function ProjetosTable() {
  return (
    <Fragment>
      <div style={{ display: "grid", gridTemplateColumns:"5% 95%", minWidth:"700px"}}>
        <div
          style={{ display: "flex", flexBasis:"120px", flexDirection:"column", width: "120px" }}
        >
           <button type="button" className="btn btn-primary" style={{margin:"30px 0px 0px 20px", border:"solid 1px #000"}}>
            Logo
          </button>
          <button type="button" className="btn btn-primary" style={{margin:"50px 0px 20px 20px", border:"solid 1px #000"}}>
            Dashboard
          </button>
          <button type="button" className="btn btn-primary" style={{margin:"0px 0px 20px 20px", border:"solid 1px #000"}}>
            Projetos
          </button>
          <button type="button" className="btn btn-primary" style={{marginLeft:"20px", border:"solid 1px #000"}}>
            Personas
          </button>
        </div>
        <div style={{ textAlign: "center" }}>
          <div
            className="card"
            style={{
              width: "70%",
              height: "50px",
              backgroundColor: "#343a40",
              color: "white",
              textAlign: "center",
              fontSize: "25px",
              margin: "25px",
              padding: "5px",
              boxShadow: "0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              display: "inline-block",
              overflow: "hidden",
            }}
          >
            PROJETOS
          </div>
          <div
            style={{
              margin: "1px",
              border: "solid 1px #000   ",
              width: "70%",
              transform: "translate(21%, 0%)",
            }}
          >
            <div style={{ margin: "50px" }}>
              <button
                type="button"
                className="btn btn-primary"
                style={{ float: "left", marginBottom: "10px", border:"solid 1px #000"}}
              >
                Novo Projeto
              </button>
              <table
                className="table table-striped"
                style={{ border: "solid 1px #000" }}
              >
                <thead className="thead-dark">
                  <tr>
                    <th>Nome do Projeto</th>
                    <th>Artigos</th>
                    <th>Colaboradores</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Blog Posts</td>
                    <td>40</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>Instagram</td>
                    <td>30</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>Facebook</td>
                    <td>41</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>Twitter</td>
                    <td>34</td>
                    <td>2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
