import { Composition } from "remotion";
import CloudVideo from "./CloudVideo";
import CloudVideoMobile from "./CloudVideoMobile";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition id="CloudWorkflow" component={CloudVideo} durationInFrames={180} fps={30} width={1920} height={1080} />
      <Composition id="CloudWorkflowMobile" component={CloudVideoMobile} durationInFrames={180} fps={30} width={780} height={1400} />
    </>
  );
};
