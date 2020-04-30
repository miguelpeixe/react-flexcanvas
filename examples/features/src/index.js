import React from "react";
import ReactDom from "react-dom";

import FlexCanvas from "react-flexcanvas";

ReactDom.render(
  <FlexCanvas>
    <FlexCanvas.Row grow="3">
      <FlexCanvas.Column>
        <FlexCanvas.Item title="Key partners" color="blue">
          <FlexCanvas.Field
            title="Who are our key partners?"
            tip="Lorem ipsum dolor sit amet"
          />
          <FlexCanvas.Field title="Who are our key suppliers?" />
          <FlexCanvas.Field title="Which key resources are we acquairing from partners?" />
          <FlexCanvas.Field title="Which key activities do partners perform?" />
        </FlexCanvas.Item>
      </FlexCanvas.Column>
      <FlexCanvas.Column>
        <FlexCanvas.Item title="Key activities" color="red">
          <FlexCanvas.Field
            tip="Lorem ipsum dolor sit amet"
            title="What key activities do our value propositions require?"
          />
          <FlexCanvas.Field title="Our distribution channels?" />
          <FlexCanvas.Field title="Customer relationships?" />
          <FlexCanvas.Field title="Revenue streams?" />
        </FlexCanvas.Item>
        <FlexCanvas.Item title="Key resources" />
      </FlexCanvas.Column>
      <FlexCanvas.Column>
        <FlexCanvas.Item title="Value propositions" tip="Lorem ipsum dolor sit">
          <FlexCanvas.Field title="Who are our key suppliers?" />
        </FlexCanvas.Item>
      </FlexCanvas.Column>
      <FlexCanvas.Column>
        <FlexCanvas.ItemGroup title="Stuff" description="Lorem ipsum dolor sit">
          <FlexCanvas.Item title="Customer relationships" />
          <FlexCanvas.Item title="Channels" />
        </FlexCanvas.ItemGroup>
      </FlexCanvas.Column>
      <FlexCanvas.Column>
        <FlexCanvas.Item title="Customer segments" />
      </FlexCanvas.Column>
    </FlexCanvas.Row>
    <FlexCanvas.Row>
      <FlexCanvas.ItemGroup title="Stuff" description="Lorem ipsum dolor sit">
        <FlexCanvas.Item title="Cost Structure" />
        <FlexCanvas.Item title="Revenue Streams" />
      </FlexCanvas.ItemGroup>
    </FlexCanvas.Row>
  </FlexCanvas>,
  document.getElementById("app")
);
