import React from "react";
import ReactDom from "react-dom";

import FlexCanvas from "react-flexcanvas";

ReactDom.render(
  <FlexCanvas>
    <FlexCanvas.Row grow="3">
      <FlexCanvas.Column>
        <FlexCanvas.Item title="Key partners">
          <FlexCanvas.Field title="Who are our key partners?" />
          <FlexCanvas.Field title="Who are our key suppliers?" />
          <FlexCanvas.Field title="Which key resources are we acquairing from partners?" />
          <FlexCanvas.Field title="Which key activities do partners perform?" />
        </FlexCanvas.Item>
      </FlexCanvas.Column>
      <FlexCanvas.Column>
        <FlexCanvas.Item title="Key activities">
          <FlexCanvas.Field title="What key activities do our value propositions require?" />
          <FlexCanvas.Field title="Our distribution channels?" />
          <FlexCanvas.Field title="Customer relationships?" />
          <FlexCanvas.Field title="Revenue streams?" />
        </FlexCanvas.Item>
        <FlexCanvas.Item title="Key resources" />
      </FlexCanvas.Column>
      <FlexCanvas.Column>
        <FlexCanvas.Item title="Value propositions" />
      </FlexCanvas.Column>
      <FlexCanvas.Column>
        <FlexCanvas.Item title="Customer relationships" />
        <FlexCanvas.Item title="Channels" />
      </FlexCanvas.Column>
      <FlexCanvas.Column>
        <FlexCanvas.Item title="Customer segments" />
      </FlexCanvas.Column>
    </FlexCanvas.Row>
    <FlexCanvas.Row>
      <FlexCanvas.Item title="Cost Structure" />
      <FlexCanvas.Item title="Revenue Streams" />
    </FlexCanvas.Row>
  </FlexCanvas>,
  document.getElementById("app")
);
