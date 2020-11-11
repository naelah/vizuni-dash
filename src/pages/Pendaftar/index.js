import React from "react";
import { Container } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const UitmPage = (props) => {
  return (
    <>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="UITM" breadcrumbItem="Finale" />

        </Container>
      </div>
    </>
  );
};

export default UitmPage;

// Step 1: Buat file ni. tengok nama folder. Uitm/index.js. tekan next tab
